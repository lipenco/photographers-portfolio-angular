"use strict";
var api = angular.module('kingaApi');
console.log("hreere3")
api.service('User', function(http) {
  var User = {};

  console.log("hreere3")

  User.delete = function(params) {
    return http.post('/user/delete', {username: params.username, updateToken: params.updateToken});
  };

  return User;
});
