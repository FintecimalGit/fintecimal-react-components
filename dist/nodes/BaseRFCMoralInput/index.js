"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

var _InputStrings = require("../../InputStrings");

var _utils = require("../../commons/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RFCMoralInput = function RFCMoralInput(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      label = _ref.label,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      type = _ref.type,
      required = _ref.required,
      handleBlur = _ref.handleBlur,
      disabled = _ref.disabled,
      autoComplete = _ref.autoComplete;
  var config = {
    type: type,
    label: label,
    value: value,
    format: _utils.textFormats.UPPER,
    required: required,
    handleChange: handleChange
  };
  var errors = {
    error: error,
    errorMessage: errorMessage,
    errorMessages: _InputStrings.rfc.errorMessages
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    var size = data.length;

    if (size >= 10 && size <= 12) {
      return (0, _utils.validateRegex)(data, /[A-Z]{3}[0-9][0-9][0-1][0-9][0-3][0-9][A-Z0-9]{3}/);
    }

    return false;
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

RFCMoralInput.defaultProps = {
  label: _InputStrings.rfc.label,
  type: _InputStrings.rfc.type,
  error: false,
  errorMessage: '',
  required: false,
  handleBlur: function handleBlur() {},
  disabled: false,
  autoComplete: 'off'
};
RFCMoralInput.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool,
  handleBlur: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  autoComplete: _propTypes.default.string
};
var _default = RFCMoralInput;
exports.default = _default;