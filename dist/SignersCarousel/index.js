"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _style = _interopRequireDefault(require("./style"));

var _clsx2 = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Signer = function Signer(_ref) {
  var id = _ref.id,
      label = _ref.label,
      status = _ref.status;
  var classes = (0, _style.default)();
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    id: id,
    className: classes.signer
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.label,
    component: "span"
  }, label), /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: (0, _clsx2.default)(classes.status, _defineProperty({}, classes.completed, status === 'Firmado')),
    component: "span"
  }, status));
};

var SignersCarousel = function SignersCarousel(_ref2) {
  var signers = _ref2.signers;
  var classes = (0, _style.default)();
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.container
  }, signers.map(function (_ref3, index) {
    var _id = _ref3._id,
        status = _ref3.status,
        label = _ref3.label;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Signer, {
      key: _id,
      id: _id,
      status: status,
      label: label
    }), index + 1 !== signers.length ? /*#__PURE__*/_react.default.createElement(_core.Divider, {
      className: classes.divider,
      orientation: "vertical",
      flexItem: true
    }) : '');
  }));
};

var _default = SignersCarousel;
exports.default = _default;