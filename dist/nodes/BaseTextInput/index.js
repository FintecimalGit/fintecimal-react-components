"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputStrings = require("../../InputStrings");

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

var _utils = require("../../commons/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      label = _ref.label,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      type = _ref.type,
      required = _ref.required,
      disabled = _ref.disabled,
      handleBlur = _ref.handleBlur,
      defaultValue = _ref.defaultValue,
      autoComplete = _ref.autoComplete;
  var config = {
    type: type,
    label: label,
    value: value,
    required: required,
    handleChange: handleChange,
    defaultValue: defaultValue
  };
  var errors = {
    error: error,
    errorMessage: errorMessage,
    errorMessages: (0, _InputStrings.generateErrorMessagesByLabel)(_InputStrings.number, label)
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    return true;
  };

  return _react.default.createElement(_InputWrapper.default, {
    autoComplete: autoComplete,
    config: config,
    errors: errors,
    isValid: isValid,
    disabled: disabled,
    onBlur: handleBlur
  });
};

TextInput.defaultProps = {
  label: _InputStrings.text.label,
  type: _InputStrings.text.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  autoComplete: 'off'
};
TextInput.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  handleBlur: _propTypes.default.func,
  autoComplete: _propTypes.default.string
};
var _default = TextInput;
exports.default = _default;