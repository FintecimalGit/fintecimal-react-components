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

var NumberInput = function NumberInput(_ref) {
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
    handleChange: handleChange,
    format: _utils.textFormats.NUMBER
  };
  var errors = {
    error: error,
    errorMessage: errorMessage,
    errorMessages: (0, _InputStrings.generateErrorMessagesByLabel)(_InputStrings.number, label)
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    if (!(0, _utils.isNumber)(data)) return false;
    return true;
  };

  return _react.default.createElement(_InputWrapper.default, {
    config: config,
    errors: errors,
    isValid: isValid,
    disabled: disabled,
    onBlur: handleBlur
  });
};

NumberInput.defaultProps = {
  label: _InputStrings.number.label,
  type: _InputStrings.number.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false
};
NumberInput.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  handleBlur: _propTypes.default.func
};
var _default = NumberInput;
exports.default = _default;