'use strict';

angular.module('kingaFrontend')
  .controller('FeaturedCtrl', function ($scope, kingaApi) {
    $scope.photos = [
      {
        url: "./assets/images/1.jpg"
      },
      {
        url: "./assets/images/3.jpg"
      },
      {
        url: "./assets/images/4.jpg"
      },
      {
        url: "./assets/images/5.jpg"
      },
      {
        url: "./assets/images/6.jpg"
      },
    ]

    setTimeout(function(){
        $(".rslides").responsiveSlides();
    }, 500)
    $scope.loader = true;

    kingaApi.Photo.getFeaturedPhotos()
      .success(function (response) {
        $scope.photos = response
        $scope.loader = false;
        setTimeout(function(){
            $(".rslides").responsiveSlides();
        })
      })
      .error(function (response){
        switch(response && response.code) {
          default:
            console.log("error", response )
            // $scope.errors.usernameErrors.push('An error occurred.');
        }
      });



  });
