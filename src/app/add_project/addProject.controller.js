
'use strict';

angular.module('kingaFrontend')
  .controller('AddProjectCtrl', function ($scope, $http,  $stateParams, kingaApi) {

    if ($stateParams.id != true) {
      $scope.title = $stateParams.title;
      $scope.thumbnail = $stateParams.thumbnail;
      $scope.description = $stateParams.description;
      $scope.project_date = new Date($stateParams.project_date);
      $scope.project_id = $stateParams.id;
      $scope.photoset_id = $stateParams.photoset_id
      $scope.projectExist = function() {
        return true;
      };


    } else {
      $scope.title = null;
      $scope.thumbnail = null;
      $scope.description = null;
      $scope.project_date = null;
      $scope.project_id = null;
      $scope.photoset_id = null
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
        $scope.loginError = "title and thumbnail cannot be blank.";
        return;
      }

      var params = {
        title : $scope.title,
        thumbnail: $scope.thumbnail,
        description: $scope.description,
        project_date : $('#project_date').val(),
        photoset_id: $scope.photoset_id
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
          $scope.project_id = response.project.id;
          $scope.projectExist = function() {
            return true;
          };

        }).error(function(body, status) {

        });

      }

    };

    $scope.syncPhotos = function() {
      var project_id = $scope.project_id;
      var photoset_id= $scope.photoset_id
      kingaApi.Flicker.getPhotosFromPhotoset(project_id, photoset_id)
      .success(function(response) {
        console.log(response)
      }).error(function(body, status) {

      });
    };

    // $scope.deletePhoto = function(photo) {
    //   photo.project_id = $scope.project_id
    //   kingaApi.Photo.delete(photo)
    //   .success(function(response) {
    //     $scope.photos.splice( $scope.photos.indexOf(photo), 1 );
    //   }).error(function(body, status) {
    //
    //   });
    //
    // };

    // $scope.setFeatured = function(photo, featured) {
    //   photo.project_id = $scope.project_id
    //   photo.featured = featured;
    //   kingaApi.Photo.setUpFeatured(photo)
    //   .success(function(response) {
    //     console.log(response)
    //   }).error(function(body, status) {
    //   });
    // };

    //
    // $scope.asyncSavePhoto = function() {
    //   var params = {
    //     project_id : $scope.project_id,
    //     url : $scope.url,
    //     horizontal: $scope.horizontal
    //   }
    //   kingaApi.Photo.create(params)
    //   .success(function(response) {
    //     $scope.photos.push(response.photo);
    //     $scope.showPhotoInput = false;
    //     $scope.url = null;
    //     $scope.horizontal = null;
    //
    //   }).error(function(body, status) {});
    //
    // };



  });
