"use strict";
var api = angular.module('kingaApi');

api.service('Project', function(http) {
  var Project = {};

  Project.getAllProjects = function(params) {
    return http.get('projects', {filter: {include: "photos"}});
  };

  Project.getPublishedProjects = function() {
    return http.get('projects', {
      filter: {
        include: "photos",
        where: {isPublished: true}
      }});
  }


  Project.getProject = function(params) {
    return http.get('projects/' + params, {filter: {include: "photos"}});
  };

  Project.create = function(params) {
    return http.post('projects', params)
  }

  Project.update= function(params) {
    return http.update('projects/' + params.id, params)
  }

  Project.delete = function(params) {
    return http.delete('projects/'+ params.id);
  }

  return Project;
});
