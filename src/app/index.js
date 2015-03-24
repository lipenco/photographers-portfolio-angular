'use strict';

angular.module('kingaFrontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router',  'kingaApi'])
  .config(function ($httpProvider, $stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/featured/featured.html',
        controller: 'FeaturedCtrl'
      })
      .state('projects', {
        url: '/projects',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl'
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl'
      })
      .state('editProject', {
        url: '/edit_project',
        templateUrl: 'app/edit_project/edit_project.html',
        controller: 'EditCtrl'
      });


    $urlRouterProvider.otherwise('/');

    $httpProvider.defaults.headers.common.Authorization = localStorage.getItem('auth_token');
  })
;
