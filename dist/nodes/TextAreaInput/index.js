"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _core = require("@material-ui/core");
var _icons = require("@material-ui/icons");
var _LongPlaceHolder = _interopRequireDefault(require("../../LongPlaceHolder"));
var _LongError = _interopRequireDefault(require("../../LongError"));
var _utils = require("../../commons/utils");
var _style = _interopRequireDefault(require("./style"));
require("../../styles/BaseInput.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var TextAreaInput = function TextAreaInput(_ref) {
  var label = _ref.label,
    value = _ref.value,
    handleChange = _ref.handleChange,
    required = _ref.required,
    error = _ref.error,
    errorMessage = _ref.errorMessage,
    type = _ref.type,
    clear = _ref.clear,
    onBlur = _ref.onBlur,
    onClear = _ref.onClear,
    disabled = _ref.disabled;
  var classes = (0, _style.default)();
  var _useState = (0, _react.useState)(0),
    _useState2 = _slicedToArray(_useState, 2),
    labelWidth = _useState2[0],
    setLabelWidth = _useState2[1];
  var _useState3 = (0, _react.useState)(value),
    _useState4 = _slicedToArray(_useState3, 2),
    mValue = _useState4[0],
    setValue = _useState4[1];
  var labelRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    setLabelWidth(labelRef.current.offsetWidth);
  }, []);
  (0, _react.useEffect)(function () {
    setValue(value);
  }, [value]);
  var mHandleChange = function mHandleChange(event) {
    var eventValue = event.target.value;
    setValue(eventValue);
  };
  var mHandleBlur = function mHandleBlur() {
    handleChange(mValue);
    if (onBlur) onBlur();
  };
  var mOnClear = function mOnClear() {
    setValue('');
    handleChange('');
    onClear('');
  };
  var selectLabel = function selectLabel() {
    if (error) {
      if ((0, _utils.isTextLong)(errorMessage)) {
        if ((0, _utils.isTextLong)(label)) return _utils.defaultPlaceHolder;
        return label;
      }
      return errorMessage;
    } else {
      if ((0, _utils.isTextLong)(label)) return _utils.defaultPlaceHolder;
      return label;
    }
  };
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, (0, _utils.isTextLong)(label) && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_LongPlaceHolder.default, {
    text: label
  })), /*#__PURE__*/_react.default.createElement(_core.FormControl, {
    className: classes.form,
    required: required,
    error: error,
    variant: "outlined"
  }, /*#__PURE__*/_react.default.createElement(_core.InputLabel, {
    ref: labelRef,
    className: classes.label,
    htmlFor: "component-outlined",
    variant: "outlined",
    classes: {
      asterisk: classes.asterisk
    }
  }, selectLabel()), /*#__PURE__*/_react.default.createElement(_core.OutlinedInput, {
    id: "component-outlined",
    value: mValue,
    multiline: true,
    rows: "4",
    onChange: mHandleChange,
    labelWidth: labelWidth,
    onBlur: mHandleBlur,
    className: classes.input,
    endAdornment: clear && mValue && /*#__PURE__*/_react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, /*#__PURE__*/_react.default.createElement(_core.IconButton, {
      "aria-label": "clear input",
      onClick: mOnClear
    }, /*#__PURE__*/_react.default.createElement(_icons.Clear, {
      className: classes.icon
    }))),
    classes: {
      notchedOutline: classes.notchedOutline,
      focused: classes.focusNotchedOutline
    },
    type: type,
    disabled: disabled
  })), error && (0, _utils.isTextLong)(errorMessage) && /*#__PURE__*/_react.default.createElement(_LongError.default, {
    text: errorMessage
  }));
};
TextAreaInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  onClear: function onClear() {},
  disabled: false
};
TextAreaInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  required: _propTypes.default.bool,
  error: _propTypes.default.bool,
  type: _propTypes.default.string,
  clear: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  handleChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  onClear: _propTypes.default.func,
  disabled: _propTypes.default.bool
};
var _default = TextAreaInput;
exports.default = _default;