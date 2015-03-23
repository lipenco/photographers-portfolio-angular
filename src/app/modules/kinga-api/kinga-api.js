"use strict";
var api = angular.module('kingaApi', []);

api.service('kingaApi', function(http, User, Project) {
  var kingaApi = {};

  kingaApi.User = User;
  kingaApi.Project = Project;

  return kingaApi;
});
