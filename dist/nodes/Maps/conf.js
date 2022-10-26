"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getGoogleMapData = function getGoogleMapData() {
  try {
    return {
      URL: {
        googleMaps: 'https://maps.googleapis.com/maps/api/js?key='
      },
      KEY: {
        googleKey: process && process.env && (process && process.env && process.env.MAP_KEY || undefined) ? process && process.env && process.env.MAP_KEY || undefined : 'AIzaSyA3C5AilsVhn6xNYDJ73B0eKJwBNFe2RNc'
      }
    };
  } catch (e) {
    return {
      URL: {
        googleMaps: 'https://maps.googleapis.com/maps/api/js?key='
      },
      KEY: {
        googleKey: 'AIzaSyA3C5AilsVhn6xNYDJ73B0eKJwBNFe2RNc'
      }
    };
  }
};

var _default = getGoogleMapData;
exports.default = _default;