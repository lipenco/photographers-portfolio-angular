"use strict";
var kf = angular.module('kingaFrontend');
kf.controller('AdminGalleryCtrl', function ($scope, $timeout, $rootScope, kingaApi, FlashMessages) {

  kingaApi.Project.getProject($scope.project_id)
  .success(function(response) {
    $scope.photos = response.project.photos;
  }).error(function(body, status) {

  });

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

});
