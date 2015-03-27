"use strict";
var api = angular.module('kingaApi');

api.service('Photo', function(http) {
  var Photo = {};


  Photo.create = function(params) {
    return http.post('projects/'+ params.project_id + '/photos', params)
  };

  Photo.delete = function(params) {
    console.log(params)
    return http.delete('projects/'+ params.project_id + '/photos/' + params.id);
  };

  Photo.getPhotos = function(params) {
    return http.get('projects/'+ params + '/photos');

  };

  return Photo;

});
