'use strict';

angular.module('kingaFrontend')
  .controller('FeaturedCtrl', function ($scope, kingaApi) {

    kingaApi.Project.getFeaturedProjects()
      .success(
      function (response) {
        $scope.projects = response.projects
      })
      .error(
      function (response){
        switch(response && response.code) {
          default:
            console.log("error", response )
            // $scope.errors.usernameErrors.push('An error occurred.');
        }
      });

  });
