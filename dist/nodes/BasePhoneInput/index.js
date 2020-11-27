"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SpecialInput = _interopRequireDefault(require("../SpecialInput"));

var _InputStrings = require("../../InputStrings");

var _utils = require("../../commons/utils");

var _IconText = _interopRequireDefault(require("../IconText"));

var _mexicoflag = _interopRequireDefault(require("../../assets/mexicoflag.png"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var CellPhoneInput = function CellPhoneInput(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      label = _ref.label,
      type = _ref.type,
      required = _ref.required,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      disabled = _ref.disabled,
      handleBlur = _ref.handleBlur,
      maxLength = _ref.maxLength;
  var errorMessages = _InputStrings.cellphone.errorMessages;

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

  var _useState7 = (0, _react.useState)(_utils.status.NORMAL),
      _useState8 = _slicedToArray(_useState7, 2),
      mStatus = _useState8[0],
      setStatus = _useState8[1];

  var _useState9 = (0, _react.useState)(''),
      _useState10 = _slicedToArray(_useState9, 2),
      mAdornment = _useState10[0],
      setAdornment = _useState10[1];

  var addParenthesis = function addParenthesis(number) {
    number = formatValue(number);

    if (number.length > 2) {
      var fNumber = "(".concat(number.substr(0, 2), ")").concat(number.substr(2, number.length - 1));
      return fNumber;
    }

    return number;
  };

  var mHandleChange = function mHandleChange(event) {
    var value = event.target.value,
        target = event.target;
    if (isValid(value)) target.setCustomValidity('');else target.setCustomValidity(errorMessage || errorMessages.validation);
    var formattedNumber = addParenthesis(value);
    setValue(formattedNumber);
    handleChange(formatValue(value));
  };

  var onClear = function onClear() {
    setValue('');
    handleChange('');
  };

  var isValid = function isValid(data) {
    if ((0, _utils.isEmpty)(data) && !required) return true;
    return (0, _utils.validateRegex)(data, /\(?([0-9]{2})\)([0-9]{8})$/);
  };

  var onFocus = function onFocus() {
    setStatus(_utils.status.FOCUS);
    setAdornment('+52');
  };

  var onBlur = function onBlur() {
    setStatus(_utils.status.NORMAL);
    setAdornment('');
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
      handleBlur();
    }
  };

  var formatValue = function formatValue(rValue) {
    if (rValue) return rValue.replace(/[{()}]/g, '');
    return '';
  };

  (0, _react.useEffect)(function () {
    var newMvalue = addParenthesis(formatValue(value));
    setValue(newMvalue);

    if (!newMvalue || isValid(newMvalue)) {
      setError(false);
      setErrorMessage('');
    } else {
      setError(true);
      setErrorMessage(errorMessages.validation);
    }
  }, [value]);
  (0, _react.useEffect)(function () {
    setError(error);

    if (!error) {
      return;
    }

    setErrorMessage(errorMessages.empty);
  }, [error]);
  return _react.default.createElement(_SpecialInput.default, {
    value: mValue,
    handleChange: mHandleChange,
    label: label,
    type: type,
    onBlur: onBlur,
    error: mError,
    errorMessage: mErrorMessage,
    required: required,
    onClear: onClear,
    onFocus: onFocus,
    startAdornment: mAdornment,
    disabled: disabled,
    maxLength: maxLength
  }, _react.default.createElement(_IconText.default, {
    inputStatus: mError ? _utils.status.ERROR : mStatus,
    imgSrc: _mexicoflag.default,
    text: "MXN"
  }));
};

CellPhoneInput.defaultProps = {
  label: _InputStrings.cellphone.label,
  type: _InputStrings.cellphone.type,
  error: false,
  errorMessage: '',
  required: false,
  disabled: false,
  handleBlur: function handleBlur() {}
};
CellPhoneInput.propTypes = {
  label: _propTypes.default.string,
  type: _propTypes.default.string,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  handleBlur: _propTypes.default.func
};
var _default = CellPhoneInput;
exports.default = _default;