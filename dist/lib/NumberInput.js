"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputStrings = require("./InputStrings");

var _InputWrapper = _interopRequireDefault(require("./InputWrapper"));

var _utils = require("../commons/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberInput = function NumberInput(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      label = _ref.label,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      type = _ref.type,
      required = _ref.required;
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
    errorMessages: _InputStrings.number.errorMessages
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    if (!(0, _utils.isNumber)(data)) return false;
    return true;
  };

  return _react.default.createElement(_InputWrapper.default, {
    config: config,
    errors: errors,
    isValid: isValid
  });
};

NumberInput.defaultProps = {
  label: _InputStrings.number.label,
  type: _InputStrings.number.type,
  error: false,
  errorMessage: '',
  required: false
};
NumberInput.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool
};
var _default = NumberInput;
exports.default = _default;