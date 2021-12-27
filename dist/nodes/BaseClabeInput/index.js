"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _InputStrings = require("../../InputStrings");

var _InputWrapper = _interopRequireDefault(require("../InputWrapper"));

var _clabehelper = require("../../commons/clabehelper");

var _utils = require("../../commons/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLABE_LENGTH = 18;

var CLABEInput = function CLABEInput(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      label = _ref.label,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      type = _ref.type,
      required = _ref.required,
      disabled = _ref.disabled,
      handleBlur = _ref.handleBlur,
      maxLength = _ref.maxLength,
      autoComplete = _ref.autoComplete;
  var config = {
    type: type,
    label: label,
    value: value,
    required: required,
    handleChange: handleChange,
    maxLength: maxLength
  };
  var errors = {
    error: error,
    errorMessage: errorMessage,
    errorMessages: _InputStrings.clabe.errorMessages
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    var size = data.length;

    if (size === CLABE_LENGTH) {
      return (0, _clabehelper.validateClabe)(data);
    } else {
      return false;
    }
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

CLABEInput.defaultProps = {
  label: _InputStrings.clabe.label,
  type: _InputStrings.clabe.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  autoComplete: 'off'
};
CLABEInput.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  handleBlur: _propTypes.default.func,
  autoComplete: _propTypes.default.string
};
var _default = CLABEInput;
exports.default = _default;