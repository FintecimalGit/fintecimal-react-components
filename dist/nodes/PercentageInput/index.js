"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BaseInput = _interopRequireDefault(require("../BaseInput"));

var _utils = require("../../commons/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PercentageInput = function PercentageInput(props) {
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

  var formatPercentage = function formatPercentage(data) {
    return "".concat(data, "%");
  };

  var formatNumber = function formatNumber(data) {
    return data.replace(/[\,%]/g, '');
  };

  var deleting = function deleting(eventValue) {
    var deletingValue = eventValue;

    if (eventValue.length < mValue.length) {
      deletingValue = eventValue.slice(0, -1);
    }

    return formatNumber(deletingValue);
  };

  var mHandleChange = function mHandleChange(event) {
    var eventValue = event.target.value;
    var formattedNumber = deleting(eventValue);

    if (isValid(formattedNumber)) {
      setValue(formatPercentage(formattedNumber));
      handleChange(formatPercentage(formattedNumber));
      if (formattedNumber.length === 0) onClear();
    }
  };

  (0, _react.useEffect)(function () {
    if (!value) return;
    var formattedNumber = formatNumber(value);

    if (isValid(formattedNumber)) {
      setValue(formatPercentage(formattedNumber));
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

PercentageInput.defaultProps = {
  value: '',
  handleChange: function handleChange() {},
  required: false,
  disabled: false,
  error: false,
  errorMessage: '',
  autoComplete: 'off'
};
PercentageInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.string,
  handleChange: _propTypes.default.func,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  autoComplete: _propTypes.default.string
};
var _default = PercentageInput;
exports.default = _default;