"use strict";
var api = angular.module('kingaApi');

api.service('http', function($http) {
  var http = {};



  http.post = function(path, data) {
    return $http.post(Options.API_SERVER + path, data);
  };

  http.get = function(path, data) {
    return $http({
      url: Options.API_SERVER + path,
      method: "GET",
      params: data
    });
  };

  http.delete = function(path, data) {
    return $http.delete(Options.API_SERVER + path, data);
  };

  http.update = function(path, data) {
    return $http.put(Options.API_SERVER + path, data);
  };

  return http;
});
