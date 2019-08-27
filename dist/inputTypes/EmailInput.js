"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BaseInput = _interopRequireDefault(require("../BaseInput"));

var _InputStrings = require("./InputStrings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailInput = function EmailInput(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      label = _ref.label;
  console.log(_InputStrings.email);
  var defaultLabel = _InputStrings.email.label,
      type = _InputStrings.email.type,
      errorMessages = _InputStrings.email.errorMessages;
  return _react.default.createElement(_BaseInput.default, {
    value: value,
    handleChange: handleChange,
    label: label || defaultLabel,
    type: type
  });
};

EmailInput.propTypes = {};
var _default = EmailInput;
exports.default = _default;