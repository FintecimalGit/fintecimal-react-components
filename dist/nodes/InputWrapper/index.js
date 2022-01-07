"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _utils = require("../../commons/utils");

var _BaseInput = _interopRequireDefault(require("../BaseInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InputWrapper = function InputWrapper(_ref) {
  var config = _ref.config,
      errors = _ref.errors,
      isValid = _ref.isValid,
      disabled = _ref.disabled,
      onBlur = _ref.onBlur,
      autoComplete = _ref.autoComplete;
  var value = config.value,
      handleChange = config.handleChange,
      label = config.label,
      type = config.type,
      required = config.required,
      format = config.format,
      defaultValue = config.defaultValue;
  var maxLength = config.maxLength;
  var error = errors.error,
      errorMessage = errors.errorMessage,
      errorMessages = errors.errorMessages;

  var _useState = (0, _react.useState)(error),
      _useState2 = _slicedToArray(_useState, 2),
      mError = _useState2[0],
      setError = _useState2[1];

  var _useState3 = (0, _react.useState)(errorMessage),
      _useState4 = _slicedToArray(_useState3, 2),
      mErrorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var _useState5 = (0, _react.useState)(value),
      _useState6 = _slicedToArray(_useState5, 2),
      mValue = _useState6[0],
      setValue = _useState6[1];

  var mHandleChange = function mHandleChange(event) {
    var target = event.target,
        value = event.target.value;

    if (format) {
      var formattedText = (0, _utils.formatText)(value, format);
      if (isValid(formattedText)) target.setCustomValidity('');else target.setCustomValidity(errorMessage || errorMessages.validation);
      setValue(formattedText); //handleChange(formattedText);
    } else {
      setValue(value); //handleChange(value);
    }
  };

  var onClear = function onClear() {
    setValue('');
    handleChange('');
  };

  var mOnBlur = function mOnBlur() {
    var validation = errorMessages.validation,
        empty = errorMessages.empty;

    if ((0, _utils.isEmpty)(mValue) && required) {
      setError(true);
      setErrorMessage(empty);
    } else if (!isValid(mValue)) {
      setError(true);
      setErrorMessage(validation);
    } else {
      setError(false);
      setErrorMessage('');
      onBlur();
      handleChange(mValue);
    }

    onBlur();
  };

  (0, _react.useEffect)(function () {
    if (defaultValue && !value) {
      setValue(defaultValue);
      handleChange(defaultValue);
    }
  }, []);
  (0, _react.useEffect)(function () {
    if (mValue !== value) {
      var newMvalue = format ? (0, _utils.formatText)(value, format) : value;
      setValue(newMvalue);

      if (!newMvalue || isValid(newMvalue)) {
        setError(false);
        setErrorMessage('');
      } else {
        setError(true);
        setErrorMessage(errorMessages.validation);
      }
    }
  }, [value]);
  (0, _react.useEffect)(function () {
    setError(error);

    if (error) {
      setErrorMessage(errorMessages.empty);
    }
  }, [error]);
  return _react.default.createElement(_BaseInput.default, {
    autoComplete: autoComplete,
    value: mValue,
    handleChange: mHandleChange,
    label: label,
    type: type,
    onBlur: mOnBlur,
    error: mError,
    errorMessage: mErrorMessage,
    required: required,
    onClear: onClear,
    disabled: disabled,
    maxLength: maxLength
  });
};

InputWrapper.propTypes = {
  config: _propTypes.default.object.isRequired,
  errors: _propTypes.default.object.isRequired,
  isValid: _propTypes.default.func.isRequired,
  autoComplete: _propTypes.default.string
};
InputWrapper.defaultProps = {
  onBlur: function onBlur() {},
  autoComplete: 'off'
};
var _default = InputWrapper;
exports.default = _default;