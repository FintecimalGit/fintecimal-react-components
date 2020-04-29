"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputStrings = require("../../InputStrings");

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailInput = function EmailInput(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      label = _ref.label,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      type = _ref.type,
      required = _ref.required,
      disabled = _ref.disabled,
      handleBlur = _ref.handleBlur;
  var config = {
    type: type,
    label: label,
    value: value,
    required: required,
    handleChange: handleChange
  };
  var errors = {
    error: error,
    errorMessage: errorMessage,
    errorMessages: _InputStrings.email.errorMessages
  };

  var isValid = function isValid(data) {
    if (!data) return true;
    var reg = /\S+@\S+\.\S+/;
    return reg.test(data);
  };

  return _react.default.createElement(_InputWrapper.default, {
    config: config,
    errors: errors,
    isValid: isValid,
    disabled: disabled,
    onBlur: handleBlur
  });
};

EmailInput.defaultProps = {
  label: _InputStrings.email.label,
  type: _InputStrings.email.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false
};
EmailInput.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  handleBlur: _propTypes.default.func
};
var _default = EmailInput;
exports.default = _default;