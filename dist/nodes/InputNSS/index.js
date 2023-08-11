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

  var luhn = function luhn(nssValue) {
    var suma = 0;
    var par = false;

    for (var i = nssValue.length - 1; i >= 0; i--) {
      var digito = parseInt(nssValue.charAt(i), 10);

      if (par) {
        if ((digito *= 2) > 9) {
          digito -= 9;
        }
      }

      par = !par;
      suma += digito;
    }

    return suma % 10 == 0;
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    var regE = /^(\d{2})(\d{2})(\d{2})\d{5}$/;
    var size = data.length;
    var valid = data.match(regE);
    if (!valid) return false;
    var subDeleg = parseInt(valid[1], [10]);
    var year = new Date().getFullYear() % 100;
    var yearAlta = parseInt(valid[2], [10]);
    var yearNac = parseInt(valid[3], [10]);

    if (subDeleg != 97) {
      if (yearAlta <= year) yearAlta += 100;
      if (yearNac <= year) yearNac += 100;
      if (yearNac > yearAlta) return false;
    }

    return luhn(data);
  };

  return _react.default.createElement(_InputWrapper.default, {
    autoComplete: autoComplete,
    config: config,
    disabled: disabled,
    errors: errors,
    isValid: isValid
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