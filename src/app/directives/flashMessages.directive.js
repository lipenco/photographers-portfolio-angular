"use strict";
var kf = angular.module('kingaFrontend');

kf.directive('flashMessages', function() {
  return {
    restrict: 'E',
    templateUrl: 'app/directives/flash-message-container.html',
    controller: 'FlashMessageCtrl'
  };
});
