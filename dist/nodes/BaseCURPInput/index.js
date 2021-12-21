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

var CURP_LENGTH = 18;

var CURPInput = function CURPInput(_ref) {
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
    format: _utils.textFormats.UPPER,
    required: required,
    handleChange: handleChange
  };
  var errors = {
    error: error,
    errorMessage: errorMessage,
    errorMessages: _InputStrings.curp.errorMessages
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    var size = data.length;

    if (size === CURP_LENGTH) {
      return (0, _utils.validateRegex)(data, /[A-Z]{4}[0-9]{2}[0-1][0-9][0-3][0-9][A-Z0-9]{8}/);
    } else {
      return false;
    }
  };

  return _react.default.createElement(_InputWrapper.default, {
    autoComplete: autoComplete,
    config: config,
    errors: errors,
    disabled: disabled,
    isValid: isValid
  });
};

CURPInput.defaultProps = {
  label: _InputStrings.curp.label,
  type: _InputStrings.curp.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  autoComplete: 'off'
};
CURPInput.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  autoComplete: _propTypes.default.string
};
var _default = CURPInput;
exports.default = _default;