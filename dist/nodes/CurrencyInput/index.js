"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _BaseInput = _interopRequireDefault(require("../BaseInput"));
var _utils = require("../../commons/utils");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
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
      if (formattedNumber.length === 0) onClear();
    }
  };
  var saveInput = function saveInput() {
    return handleChange(mValue);
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
  return /*#__PURE__*/_react.default.createElement(_BaseInput.default, {
    autoComplete: autoComplete,
    label: label,
    value: mValue,
    handleChange: mHandleChange,
    onBlur: saveInput,
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