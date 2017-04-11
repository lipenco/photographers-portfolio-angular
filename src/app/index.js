'use strict';

"use strict";!function(){angular.module("dcbImgFallback",[]).directive("fallbackSrc",["imageService",function(A){return{restrict:"A",link:function(M,g,I){var i=I.fallbackSrc?A.setMissing(I.fallbackSrc):A.getMissing(),D=function(){var M=I.fallbackSrc?A.setMissing(I.fallbackSrc):A.getMissing();g[0].src!==M&&(g[0].src=M)};g[0].src===A.getLoading()&&(g[0].src=i),g.on("error",D),M.$on("$destroy",function(){g.off("error",D)})}}}]).directive("loadingSrc",["$interpolate","imageService",function(A,M){var g=function(g,I,i){I[0].src=i.loadingSrc?M.setLoading(i.loadingSrc):M.getLoading();var D=new Image;D.src=A(i.imgSrc)(g),D.onload=function(){D.onload=null,I[0].src!==D.src&&(I[0].src=D.src)}};return{restrict:"A",compile:function(A,M){return M.imgSrc=M.ngSrc,delete M.ngSrc,g}}}]).factory("imageService",function(){var A="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDAwIDEwMDAiPjxkZWZzPjxyYWRpYWxHcmFkaWVudCBpZD0icmFkaWFsLWdyYWRpZW50IiBjeD0iNTAwIiBjeT0iNTAwIiByPSI1MDAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9IiNkZmRmZGYiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM5OTkiLz48L3JhZGlhbEdyYWRpZW50PjwvZGVmcz48cmVjdCBmaWxsPSJ1cmwoI3JhZGlhbC1ncmFkaWVudCkiIHdpZHRoPSIxMDAwIiBoZWlnaHQ9IjEwMDAiLz48cGF0aCBmaWxsPSIjZmZmIiBkPSJNNjAxIDQxNGwwIDBWNTg2bDAgMEgzOTlsMCAwVjQxNGwwIDBINjAxWm0wLTE0SDM5OUExNCAxNCAwIDAgMCAzODUgNDE0djE3M2ExNCAxNCAwIDAgMCAxNCAxNEg2MDFBMTQgMTQgMCAwIDAgNjE1IDU4NlY0MTRhMTQgMTQgMCAwIDAtMTQtMTRoMFpNNTc",M=A+"1IDUwMmE3NyA3NyAwIDAgMC0yNC01NCA3NiA3NiAwIDAgMC0yNS0xNiA3NSA3NSAwIDAgMC01NyAxQTc0IDc0IDAgMCAwIDQzMCA0NzQgNzMgNzMgMCAwIDAgNDMxIDUzMGE3MiA3MiAwIDAgMCAzOSAzOCA3MCA3MCAwIDAgMCA1NC0xIDY5IDY5IDAgMCAwIDM3LTM4IDY4IDY4IDAgMCAwIDQtMTZsMSAwYTEwIDEwIDAgMCAwIDEwLTEwYzAgMCAwLTEgMC0xaDBabS0xNSAyNmE2NyA2NyAwIDAgMS0zNyAzNSA2NiA2NiAwIDAgMS01MC0xIDY0IDY0IDAgMCAxLTM0LTM1QTYzIDYzIDAgMCAxIDQ0MCA0NzkgNjIgNjIgMCAwIDEgNDU0IDQ1OSA2MiA2MiAwIDAgMSA0NzQgNDQ2YTYxIDYxIDAgMCAxIDIzLTQgNjAgNjAgMCAwIDEgNDIgMTlBNTkgNTkgMCAwIDEgNTUyIDQ4MGE1OCA1OCAwIDAgMSA0IDIyaDBjMCAwIDAgMSAwIDFhMTAgMTAgMCAwIDAgOSAxMCA2NyA2NyAwIDAgMS01IDE1aDBaIi8+PC9zdmc+",g=A+"yIDQ1MGEyMiAyMiAwIDEgMS0yMi0yMkEyMiAyMiAwIDAgMSA1NzIgNDUwWk01ODYgNTcySDQxNFY1NDNsNTAtODYgNTggNzJoMTRsNTAtNDN2ODZaIi8+PC9zdmc+";return{getLoading:function(){return M},getMissing:function(){return g},setLoading:function(A){return M=A},setMissing:function(A){return g=A}}})}();

var kingaFrontend = angular.module('kingaFrontend', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router',  'kingaApi', 'datePicker', 'angularFileUpload', 'dcbImgFallback'])
kingaFrontend.config(function ($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/featured/featured.html',
        controller: 'FeaturedCtrl',
        authenticate: false
      })
      .state('projects', {
        url: '/projects?cat',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl',
        authenticate: false
      })
      .state('contact', {
        url: '/contact',
        templateUrl: 'app/contact/contact.html',
        controller: 'ContactCtrl',
        authenticate: false
      })
      .state('admin', {
        url: '/admin',
        templateUrl: 'app/login/login.html',
        controller: 'LoginCtrl',
        authenticate: false
      })
      .state('editProject', {
        url: '/edit_project',
        templateUrl: 'app/edit_project/edit_project.html',
        controller: 'EditCtrl',
        authenticate: true
      })
      .state('addNewProject', {
        url: '/add_project?id',
        templateUrl: 'app/add_project/add_project.html',
        controller: 'AddProjectCtrl',
        authenticate: true,
        params: {
          'title': true,
          'id': true,
          'description' :true,
          'category': true,
          'thumbnail': true,
          'project_date': true,
          'photos' :true,
          'photoset_id':true,
          'flickr_name': true
        }
      })
      .state('showProject',  {
        url: '/project?id',
        templateUrl: 'app/show_project/show_project.html',
        controller: 'showProjectCtrl',
        authenticate: false,
        params: {
          'title': true,
          'id': true,
          'category': true,
          'description' :true,
          'project_date': true,
          'photos' :true,
          'flickr_name':true
        }
      });




    $urlRouterProvider.otherwise('/');
    $httpProvider.defaults.headers.common.Authorization = localStorage.getItem('auth_token');
});


kingaFrontend.run(function($rootScope, $state){


  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if(toState.authenticate && !localStorage.getItem('auth_token')) {
        $state.go('admin');
    }
  });



});
