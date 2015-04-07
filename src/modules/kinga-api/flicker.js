"use strict";
var api = angular.module('kingaApi');


api.service('Flicker', function(http, $http) {
  var Flicker = {};

  Flicker.getPhotosFromPhotoset = function(project_id, photoset_id) {
    return http.get('flickr/' + project_id +'/'+ photoset_id);
  };

  return Flicker;
});
