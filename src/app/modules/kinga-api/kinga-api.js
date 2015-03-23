"use strict";
var api = angular.module('kingaApi', []);

console.log("hreere2")

api.service('kingaApi', function(http, User, Project) {
  var kingaApi = {};

  console.log("hreere2")

  kingaApi.User = User;
  kingaApi.Project = Project;

  return kingaApi;
});
