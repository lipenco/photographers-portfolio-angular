
'use strict';

angular.module('kingaFrontend')
  .controller('EditCtrl', function ($scope, $http, kingaApi) {

    $scope.delete = function(project) {
      kingaApi.Project.delete(project)
      .success(function (response) {
        $scope.projects.splice( $scope.projects.indexOf(project), 1 );
      });
    }

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
