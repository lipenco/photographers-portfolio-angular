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
    console.log("herere")
    return http.delete('projects/'+ params.id);
  }

  return Project;
});
