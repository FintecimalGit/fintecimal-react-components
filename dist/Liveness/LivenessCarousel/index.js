"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _style = _interopRequireDefault(require("./style"));

var _clsx3 = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Signer = function Signer(_ref) {
  var id = _ref.id,
      label = _ref.label,
      status = _ref.status,
      score = _ref.score;
  console.log(score);
  var classes = (0, _style.default)();
  return _react.default.createElement(_core.Box, {
    id: id,
    className: classes.signer
  }, _react.default.createElement(_core.Typography, {
    className: classes.label,
    component: "span"
  }, label), _react.default.createElement(_core.Typography, {
    className: (0, _clsx3.default)(classes.status, _defineProperty({}, classes.completed, status === 'Firmado')),
    component: "span"
  }, status), _react.default.createElement(_core.Typography, {
    className: (0, _clsx3.default)(classes.score, _defineProperty({}, classes.completed, status === 'Firmado')),
    component: "span"
  }, score ? "Score ".concat(score, "%") : ''));
};

var LivenessCarousel = function LivenessCarousel(_ref2) {
  var signers = _ref2.signers;
  var classes = (0, _style.default)();
  return _react.default.createElement(_core.Box, {
    className: classes.container
  }, signers.map(function (_ref3, index) {
    var _id = _ref3._id,
        status = _ref3.status,
        label = _ref3.label,
        score = _ref3.score;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Signer, {
      key: _id,
      id: _id,
      status: status,
      label: label,
      score: score
    }), index + 1 !== signers.length ? _react.default.createElement(_core.Divider, {
      className: classes.divider,
      orientation: "vertical",
      flexItem: true
    }) : '');
  }));
};

var _default = LivenessCarousel;
exports.default = _default;