"use strict";
var kf = angular.module('kingaFrontend');
kf.controller('AdminGalleryCtrl', function ($scope, $timeout, $rootScope, kingaApi, FlashMessages) {


  $scope.deletePhoto = function(photo) {
    photo.project_id = $scope.project_id
    kingaApi.Photo.delete(photo)
    .success(function(response) {
      $scope.photos.splice( $scope.photos.indexOf(photo), 1 );
    }).error(function(body, status) {

    });
  };


  $scope.setFeatured = function(photo, isFeatured) {
    photo.project_id = $scope.project_id
    photo.isFeatured = isFeatured;
    kingaApi.Photo.setUpFeatured(photo)
    .success(function(response) {
    }).error(function(body, status) {
    });
  };

  $scope.setAvatar = function(photo, isAvatar) {
    photo.project_id = $scope.project_id
    photo.isAvatar = isAvatar;
    kingaApi.Photo.setUpFeatured(photo)
    .success(function(response) {
    }).error(function(body, status) {
    });
  };

});
