"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HeaderCard = _interopRequireDefault(require("../../HeaderCard"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var LivenessVideo = function LivenessVideo(_ref) {
  var title = _ref.title,
      video = _ref.video;
  var clasess = (0, _style.default)();
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("div", {
    className: clasess.videoContainer
  }, _react.default.createElement("video", {
    controls: true,
    src: video,
    className: clasess.video
  })));
};

LivenessVideo.propTypes = {
  title: _propTypes.default.string,
  video: _propTypes.default.string,
  onReject: _propTypes.default.func,
  rejectionOptions: _propTypes.default.array,
  rejectionData: _propTypes.default.shape({
    name: _propTypes.default.string,
    image: _propTypes.default.string,
    date: _propTypes.default.instanceOf(Date),
    reason: _propTypes.default.string,
    comments: _propTypes.default.string
  })
};
LivenessVideo.defaultProps = {
  title: '',
  video: '',
  onReject: function onReject() {},
  rejectionOptions: [],
  rejectionData: {
    name: '',
    image: '',
    date: new Date(),
    reason: '',
    comments: ''
  },
  rejected: false
};
var _default = LivenessVideo;
exports.default = _default;