
'use strict';

angular.module('kingaFrontend')
  .controller('AddProjectCtrl', function ($scope, $http, kingaApi) {

    $scope.title = null
    $scope.thumbnail = null
    $scope.decription = null
    $scope.project_date = null
    $scope.projectExist = function() {
      return true;
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
        decription: $scope.decription,
        project_date : $scope.project_date
      }

      kingaApi.Project.create(params)
      .success(function(response) {
        // $state.go('editProject');
        $scope.project_id = response.id
        $scope.projectExist = false

      }).error(function(body, status) {

      });

    }






  });
