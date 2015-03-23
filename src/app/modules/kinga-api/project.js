"use strict";
var api = angular.module('kingaApi');

api.service('Project', function(http) {
  var Project = {};

  Project.getAllProjects = function(params) {
    return http.get('/projects');
  };

  Project.getFeaturedProjects = function(params) {
    return http.get('/projects');
  };

  return Project;
});
