"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BaseInput = _interopRequireDefault(require("../BaseInput"));

var _utils = require("../../commons/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CurrencyInput = function CurrencyInput(props) {
  var value = props.value,
      handleChange = props.handleChange,
      label = props.label,
      required = props.required,
      error = props.error,
      errorMessage = props.errorMessage,
      disabled = props.disabled,
      autoComplete = props.autoComplete;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      mValue = _useState2[0],
      setValue = _useState2[1];

  var onClear = function onClear() {
    setValue('');
    handleChange('');
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    return (0, _utils.isEmpty)(data) || (0, _utils.isNumber)(data) && (0, _utils.validateRegex)(data, /^\d+\.?(\d{1,2})?$/);
  };

  var formatMoney = function formatMoney(data) {
    return "$".concat(data.replace(/\d(?=(\d{3})+(\.\d+)?$)/g, '$&,'));
  };

  var formatNumber = function formatNumber(data) {
    return data.replace(/[\,$]/g, '');
  };

  var mHandleChange = function mHandleChange(event) {
    var eventValue = event.target.value;
    var formattedNumber = formatNumber(eventValue);

    if (isValid(formattedNumber)) {
      setValue(formatMoney(formattedNumber));
      handleChange(formatMoney(formattedNumber));
      if (formattedNumber.length === 0) onClear();
    }
  };

  (0, _react.useEffect)(function () {
    if (!value) {
      setValue('');
      return;
    }

    var formattedNumber = formatNumber(value);

    if (isValid(formattedNumber)) {
      setValue(formatMoney(formattedNumber));
    }
  }, [value]);
  return _react.default.createElement(_BaseInput.default, {
    autoComplete: autoComplete,
    label: label,
    value: mValue,
    handleChange: mHandleChange,
    required: required,
    disabled: disabled,
    error: error,
    onClear: onClear,
    errorMessage: errorMessage
  });
};

CurrencyInput.defaultProps = {
  value: '',
  handleChange: function handleChange() {},
  required: false,
  disabled: false,
  error: false,
  errorMessage: '',
  autoComplete: 'off'
};
CurrencyInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  handleChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  autoComplete: _propTypes.default.string
};
var _default = CurrencyInput;
exports.default = _default;