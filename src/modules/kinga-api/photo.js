"use strict";
var api = angular.module('kingaApi');

api.service('Photo', function(http) {
  var Photo = {};


  Photo.create = function(params) {
    return http.post('projects/'+ params.project_id + '/photos', params)
  };

  Photo.delete = function(params) {
    return http.delete('projects/'+ params.project_id + '/photos/' + params.id);
  };

  Photo.setUpFeatured = function(params) {
    return http.update('photos/' + params.id, params);
  };

  Photo.removeFeatured = function(params) {
    return http.update('projects/'+ params.project_id + '/photos/' + params.id, params );
  };

  Photo.getFeaturedPhotos = function() {
    return http.get('photos/', {filter: {where: {isFeatured: true}}});
  };


  Photo.getPhotos = function(params) {
    return http.get('projects/'+ params + '/photos');

  };

  return Photo;

});
