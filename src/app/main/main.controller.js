'use strict';

angular.module('kingaFrontend')
  .controller('MainCtrl', function ($scope,  $stateParams, kingaApi) {

    $scope.findAvatar = function(project) {
      return project.photos.find(function(x) {
          return (x.isAvatar === true)}).url;
    }

    $scope.toggledCategory = $stateParams.cat || '';

    $scope.select = function(cat) {
      return $stateParams.cat = cat
    }

    $scope.projects = [];

    kingaApi.Project.getPublishedProjects()
      .success(function (response) {
        $scope.projects = response
        setTimeout(function(){
          if (!window.frills ) {
            console.log("iniy")
            window.frills = F$({
                element: $('.projectThumbnail'),
            });
          } else {
            frills.restart()
          }
          var layzr = new Layzr({});
        });
      })
      .error(function (response){
        switch(response && response.code) {
          default:
            console.log("error", response )
            // $scope.errors.usernameErrors.push('An error occurred.');
        }
      });



  });
