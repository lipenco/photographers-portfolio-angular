'use strict';

angular.module('kingaFrontend')
  .controller('showProjectCtrl', function ($scope, $state, $stateParams, $http, kingaApi) {

    if ($stateParams.title == true) {
      $scope.description = "Loading..."
      $scope.title = "...";
      if (window.frills) {
        window.frills.stop();
      };


      return kingaApi.Project.getProject($stateParams.id)
        .success(function (response) {
          $scope.photos = response.photos.filter(function(x) {
            return !x.isAvatar
          })
          $scope.description = response.description
          $scope.title = response.title
        })
        .error(function (response){
          switch(response && response.code) {
            default:
              console.log("error", response )
              // $scope.errors.usernameErrors.push('An error occurred.');
          }
        });


    } else {
      if (window.frills) {
        window.frills.stop();
      };
      $scope.description = $stateParams.description
      $scope.title = $stateParams.title
      $scope.photos = $stateParams.photos.filter(function(x) {
        return !x.isAvatar
      })
    };








  });
