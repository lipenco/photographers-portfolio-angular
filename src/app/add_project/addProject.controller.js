
'use strict';

angular.module('kingaFrontend')
  .controller('AddProjectCtrl', function ($scope, $http,  $stateParams, kingaApi) {

    if ($stateParams.id != true) {
      $scope.title = $stateParams.title;
      $scope.thumbnail = $stateParams.thumbnail;
      $scope.description = $stateParams.description;
      $scope.project_date = new Date($stateParams.project_date);
      $scope.url = null;
      $scope.horizontal = 'true';
      $scope.project_id = $stateParams.id;
      $scope.photos = $stateParams.photos;


    } else {
      $scope.title = null;
      $scope.thumbnail = null;
      $scope.description = null;
      $scope.project_date = null;
      $scope.url = null;
      $scope.horizontal = 'true';
      $scope.project_id = null;
      $scope.photos = [];

    }

    $scope.projectExist = function() {
      return true;
    };


    $scope.attemptSave = function() {
      $scope.asyncSave();
      return true
    }

    $scope.attemptSavePhoto = function() {
      $scope.asyncSavePhoto();
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
        project_date : $('#project_date').val()
      }

      if ($stateParams.id != true) {
        params.id = $stateParams.id
        kingaApi.Project.update(params)
        .success(function(response) {
          $scope.project_id = response.project.id;
          $scope.projectExist = false;
        }).error(function(body, status) {

        });

      } else {
        kingaApi.Project.create(params)
        .success(function(response) {
          $scope.project_id = response.project.id;
          $scope.projectExist = false;

        }).error(function(body, status) {

        });

      }



    };

    $scope.addPhoto = function() {
      $scope.showPhotoInput = function() {
        return true;
      }
    };

    $scope.deletePhoto = function(photo) {
      photo.project_id = $scope.project_id
      kingaApi.Photo.delete(photo)
      .success(function(response) {
        $scope.photos.splice( $scope.photos.indexOf(photo), 1 );
      }).error(function(body, status) {

      });

    };

    $scope.setFeatured = function(photo, featured) {
      photo.project_id = $scope.project_id
      photo.featured = featured;
      kingaApi.Photo.setUpFeatured(photo)
      .success(function(response) {
        console.log(response)
      }).error(function(body, status) {
      });
    };


    $scope.asyncSavePhoto = function() {
      var params = {
        project_id : $scope.project_id,
        url : $scope.url,
        horizontal: $scope.horizontal
      }
      kingaApi.Photo.create(params)
      .success(function(response) {
        $scope.photos.push(response.photo);
        $scope.showPhotoInput = false;
        $scope.url = null;
        $scope.horizontal = null;

      }).error(function(body, status) {});

    };



  });
