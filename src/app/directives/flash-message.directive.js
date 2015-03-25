"use strict";
var kf = angular.module('kingaFrontend');

kf.directive('FlashMessages', function() {
  return {
    restrict: 'E',
    templateUrl: 'directives/flash-message-container.html',
    controller: 'FlashMessageCtrl'
  };
});
