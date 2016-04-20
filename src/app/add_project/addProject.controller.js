'use strict';

angular.module('kingaFrontend')
  .controller('AddProjectCtrl', function ($scope, $http, $state, $stateParams, kingaApi, FlashMessages, FileUploader, $q) {
    // url: "https://api.cloudinary.com/hpymbyjxq/image/upload"

    $scope.uploader = new FileUploader({
        url: "https://kinga-api.herokuapp.com/api/containers/storage/upload",
        autoUpload: true,
        queue: [],
        onAfterAddingAll: function(addedItems) {
          FlashMessages.add({
            title: 'cierpliwości..',
            info: 'loading..'
          });
        },
        onCompleteAll: function() {
          this.queue.forEach(function(x) {
            return kingaApi.Photo.create({
              project_id: $scope.project_id,
              tempurl: x.file.name
            }).then(function(response) {
              $scope.photos.push(response.data)
              FlashMessages.add({
                title: 'You upladed photo',
                info: 'hurrey'
              });
            }, function() {
              console.log("error")
            });
          })
          this.queue = [];
        },
        onSuccessItem: function(item, response, status, headers) {
          // kingaApi.Photo.create({
          //   project_id: $scope.project_id,
          //   tempurl: item.file.name
          // })
        }
    });

    if ($stateParams.id != true) {
      $scope.title = $stateParams.title;
      $scope.thumbnail = $stateParams.thumbnail;
      $scope.description = $stateParams.description;
      $scope.project_date = new Date($stateParams.project_date);
      $scope.project_id = $stateParams.id;
      $scope.photos = $stateParams.photos;
      $scope.projectError = null;
      $scope.projectExist = function() {
        return true;
      };


    } else {
      $scope.title = null;
      $scope.thumbnail = null;
      $scope.description = null;
      $scope.project_date = null;
      $scope.project_id = null;
      $scope.photos = [];
      $scope.projectError = null;
      $scope.projectExist = function() {
        return false;
      };
    }




    $scope.attemptSave = function() {
      $scope.asyncSave();
      return true
    }



    $scope.asyncSave = function() {
      $scope.loginError = null;

      if (!$scope.title) {
        $scope.loginError = "title and flickr name cannot be blank.";
        return;
      }

      var params = {
        title : $scope.title,
        description: $scope.description,
        project_date : $('#project_date').val(),
      }



      if ($stateParams.id != true) {
        params.id = $stateParams.id
        kingaApi.Project.update(params)
        .success(function(response) {
          $scope.project_id = response.project.id;
        }).error(function(body, status) {

        });

      } else {
        kingaApi.Project.create(params)
        .success(function(response) {
          $scope.project_id = response.id;
          $scope.projectExist = function() {
            return true;
          };

        }).error(function(body, status) {

        });

      }

    };

    $scope.syncPhotos = function() {
    };


  });
