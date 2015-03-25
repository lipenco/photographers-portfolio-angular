'use strict';

angular.module('kingaFrontend')
  .controller('LoginCtrl', function ($scope, $http,  $state, kingaApi) {
    $scope.username   = null;
    $scope.password   = null;
    $scope.loginError = null;

    if (localStorage.getItem('auth_token')) {
      $state.go('editProject', {

      });
    }

    $scope.isAuthenticated = function() {
      if (localStorage.getItem('auth_token')) {
        return true
      } else {
        return false
      }
    }

    $scope.attemptLogin = function() {
      console.log("attempt login")
      $scope.asyncLogin();
      return true;
    };

    $scope.asyncLogin = function() {
        $scope.loginError = null;

        if (!$scope.username) {
          $scope.loginError = "Username and password cannot be blank.";
          return;
        }
        var params = {
          email: 'magda@gmail.com',
          password: '12345678'
        }
        kingaApi.User.getToken(params)
        .success(function(response) {
          localStorage.setItem('auth_token', response.user.auth_token)
          $state.go('edit', {

          });
        }).error(function(body, status) {

        });



      };



  });
