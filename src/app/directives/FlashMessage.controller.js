"use strict";
var kf = angular.module('kingaFrontend');
kf.controller('FlashMessageCtrl', function ($scope, $timeout, $rootScope, FlashMessages) {
  $scope.FlashMessages = FlashMessages;


  $scope.$watch('FlashMessages.messages', function (newVal, oldVal, scope) {
    if(newVal) {
      scope.messages = newVal;


    }
  });


  $scope.dismissMessage = function(index) {
    FlashMessages.dismiss(index);
  };
});
