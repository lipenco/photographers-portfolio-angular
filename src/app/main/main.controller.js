'use strict';

angular.module('kingaFrontend')
  .controller('MainCtrl', function ($scope, kingaApi) {

    kingaApi.Project.getAllProjects()
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
