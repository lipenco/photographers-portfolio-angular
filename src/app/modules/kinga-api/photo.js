"use strict";
var api = angular.module('kingaApi');

api.service('Photo', function(http) {
  var Photo = {};


  Photo.create = function(params) {
    console.log(params)
    return http.post('projects/'+ params.project_id + '/photos', params)
  }

  Photo.delete = function(params) {
    console.log("herere")
    return http.delete('photos/'+ params.id);
  }

  return Photo;
});
