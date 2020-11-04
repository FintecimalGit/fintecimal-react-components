"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getServer = exports.keys = void 0;
var keys = {
  develop: {
    name: 'Develop',
    baseURL: 'http://localhost:1337'
  },
  staging: {
    name: 'Staging',
    baseURL: 'https://fintecimal-test.herokuapp.com'
  },
  production: {
    name: 'Production',
    baseURL: 'https://glacial-sands-15177.herokuapp.com'
  }
};
exports.keys = keys;

var getServer = function getServer() {
  var hostName = window.location.hostname;

  switch (hostName) {
    case 'fintecimal-test.herokuapp.com':
      return keys.staging;

    case 'fintecimal-test-geos.herokuapp.com':
      return keys.stagingGeos;

    case 'glacial-sands-15177.herokuapp.com':
    case 'www.fintecimal.com':
      return keys.production;

    default:
      return keys.develop;
  }
};

exports.getServer = getServer;