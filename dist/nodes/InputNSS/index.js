"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.InputNss = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

var _utils = require("../../commons/utils");

var _InputStrings = require("../../InputStrings");

var _validator = require("./validator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputNss = function InputNss(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      label = _ref.label,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      type = _ref.type,
      required = _ref.required,
      disabled = _ref.disabled,
      autoComplete = _ref.autoComplete;
  var config = {
    type: type,
    label: label,
    value: value,
    format: _utils.textFormats.NUMBER,
    required: required,
    handleChange: handleChange
  };
  var errors = {
    error: error,
    errorMessage: errorMessage,
    errorMessages: _InputStrings.nss.errorMessages
  };
  return _react.default.createElement(_InputWrapper.default, {
    autoComplete: autoComplete,
    config: config,
    disabled: disabled,
    errors: errors,
    isValid: (0, _validator.isValidNss)(value)
  });
};

exports.InputNss = InputNss;
InputNss.defaultProps = {
  label: _InputStrings.nss.label,
  type: _InputStrings.nss.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  autoComplete: 'off'
};
InputNss.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  autoComplete: _propTypes.default.string
};