'use strict';

angular.module('kingaFrontend')
  .controller('LoginCtrl', function ($scope, kingaApi) {
    $scope.username   = null;
    $scope.password   = null;
    $scope.loginError = null;

    $scope.isAuthenticated = function() {
      if (localStorage.getItem('auth_token')) {
        return true
      } else {
        return false
      }
    }

    $scope.attemptLogin = function() {
      $scope.asyncLogin();
      return true;
    };

    $scope.asyncLogin = function() {
        $scope.loginError = null;

        if (!$scope.username) {
          $scope.loginError = "Username and password cannot be blank.";
          return;
        }

        $.ajax({
          type: "POST",
          url: 'http://api.michalska_api.dev/sessions',
          data: {'email': 'magda@gmail.com', 'password': '12345678' },
          success: function (response) {
            localStorage.setItem('auth_token', response.user.auth_token)
          },
          error: function(response){
            switch(response && response.code) {
              default:
                console.log("error", response )
              }
          }
        });

      };



  });
