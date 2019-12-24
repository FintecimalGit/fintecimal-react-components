"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _recompose = require("recompose");

var _reactGoogleMaps = require("react-google-maps");

var _conf = _interopRequireDefault(require("./conf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_POSITION = {
  lat: 0,
  lng: 0
};
var DEFAULT_CONFIG = {
  gestureHandling: 'greedy',
  draggable: true,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: true
};
var Maps = (0, _recompose.compose)((0, _recompose.withProps)({
  googleMapURL: "".concat(_conf.default.URL.googleMaps).concat(_conf.default.KEY.googleKey, "&v=3&libraries=geometry,drawing,places"),
  loadingElement: _react.default.createElement("div", {
    style: {
      width: '100%',
      height: '171px'
    }
  }),
  containerElement: _react.default.createElement("div", {
    style: {
      width: '100%',
      height: '171px'
    }
  }),
  mapElement: _react.default.createElement("div", {
    style: {
      width: '100%',
      height: '171px'
    }
  })
}), _reactGoogleMaps.withScriptjs, _reactGoogleMaps.withGoogleMap)(function (props) {
  var position = props.position,
      zoom = props.zoom,
      configuration = props.configuration;
  return _react.default.createElement(_reactGoogleMaps.GoogleMap, {
    defaultZoom: zoom,
    center: position,
    options: configuration
  }, _react.default.createElement(_reactGoogleMaps.Marker, {
    position: position,
    icon: "https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/map-marker.png",
    getLabel: true,
    center: true
  }));
});
Maps.propTypes = {
  position: _propTypes.default.shape({
    lat: _propTypes.default.number,
    lng: _propTypes.default.number
  }),
  zoom: _propTypes.default.number,
  configuration: _propTypes.default.object
};
Maps.defaultProps = {
  position: DEFAULT_POSITION,
  zoom: 16,
  configuration: DEFAULT_CONFIG
};
var _default = Maps;
exports.default = _default;