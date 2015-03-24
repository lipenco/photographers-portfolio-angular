"use strict";
var api = angular.module('kingaApi');

api.service('Project', function(http) {
  var Project = {};

  Project.getAllProjects = function(params) {
    return http.get('projects');
  };

  Project.getFeaturedProjects = function(params) {
    return http.get('projects');
  };

  Project.delete = function(params) {
    $.ajax({
      type: "DELETE",
      url: Options.API_SERVER + 'projects/' + params.id ,
      headers: {
        Authorization:   localStorage.getItem('auth_token')
      },
      // data: {'email': 'magda@gmail.com', 'password': '12345678' },
      success: function (response) {
        console.log(response)

      },
      error: function(response){
        switch(response && response.code) {
          default:
            console.log("error", response )
          }
    }
  });
  }

  return Project;
});
