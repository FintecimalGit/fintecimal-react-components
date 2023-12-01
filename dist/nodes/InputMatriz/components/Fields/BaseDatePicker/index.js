"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _moment = _interopRequireDefault(require("moment"));
require("moment/locale/es");
var _pickers = require("@material-ui/pickers");
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));
var _moment2 = _interopRequireDefault(require("@date-io/moment"));
var _style = _interopRequireDefault(require("./style"));
var _classnames2 = _interopRequireDefault(require("classnames"));
var _utils = require("../../../../../commons/utils");
var _InputStrings = require("../../../../../InputStrings");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var BaseDatePicker = function BaseDatePicker(_ref) {
  var disableToolBar = _ref.disableToolBar,
    label = _ref.label,
    value = _ref.value,
    handleChange = _ref.handleChange,
    format = _ref.format,
    disabled = _ref.disabled,
    minDate = _ref.minDate,
    required = _ref.required,
    error = _ref.error;
  var classes = (0, _style.default)();
  var _useState = (0, _react.useState)((0, _moment.default)()),
    _useState2 = _slicedToArray(_useState, 2),
    date = _useState2[0],
    setDate = _useState2[1];
  var _useState3 = (0, _react.useState)(error),
    _useState4 = _slicedToArray(_useState3, 2),
    mError = _useState4[0],
    setMError = _useState4[1];
  var _useState5 = (0, _react.useState)(label),
    _useState6 = _slicedToArray(_useState5, 2),
    mLabel = _useState6[0],
    setMLabel = _useState6[1];

  /**
   *
   * @param {Date} _date
   */
  var handleDateChange = function handleDateChange(_date) {
    setDate(formatDate(_date));
    var formattedDate = format && _date ? (0, _moment.default)(_date).format(format) : _date;
    if (!formattedDate && required) {
      setMError(true);
    } else {
      setMError(false);
    }
    handleChange(formattedDate);
  };
  var mOnBlur = function mOnBlur() {
    if ((0, _utils.isEmpty)(date) && required) {
      setMError(true);
    } else {
      setMError(false);
    }
  };
  var IsClearDisable = function IsClearDisable(_ref2) {
    var isDisable = _ref2.isDisable;
    return isDisable ? null : /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      onClick: function onClick(e) {
        e.stopPropagation();
        handleDateChange(null);
      }
    }, /*#__PURE__*/_react.default.createElement(_Clear.default, null));
  };
  var formatDate = function formatDate(value) {
    if (!value) return null;
    var dateParsed = Date.parse(value);
    if (isNaN(dateParsed)) {
      return (0, _moment.default)(value, format);
    }
    return (0, _moment.default)(value);
  };
  (0, _react.useEffect)(function () {
    if (date !== value) {
      setDate(formatDate(value));
    }
  }, [value]);
  (0, _react.useEffect)(function () {
    var test = formatDate(value);
    setDate(test);
  }, []);
  (0, _react.useEffect)(function () {
    var messageError = (0, _InputStrings.generateErrorMessagesByLabel)(_InputStrings.text, label);
    if (error && !mError) {
      setMError(true);
      setMLabel(messageError.empty);
    } else if (mError) {
      setMLabel(messageError.empty);
    } else {
      setMLabel(label);
    }
  }, [error, mError]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.root
  }, /*#__PURE__*/_react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    locale: "es",
    utils: _moment2.default
  }, /*#__PURE__*/_react.default.createElement(_pickers.KeyboardDatePicker, {
    className: (0, _classnames2.default)(classes.datePicker, _defineProperty({}, classes.error, mError)),
    variant: "inline",
    inputVariant: "outlined",
    label: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, mLabel, required && /*#__PURE__*/_react.default.createElement("span", {
      className: classes.asterisk
    }, "*")),
    value: date,
    format: format,
    onChange: handleDateChange,
    disableToolbar: disableToolBar,
    disabled: disabled,
    minDate: minDate,
    onBlur: mOnBlur,
    InputProps: {
      endAdornment: /*#__PURE__*/_react.default.createElement(IsClearDisable, {
        isDisable: disabled
      })
    },
    InputAdornmentProps: {
      position: date ? "none" : "end"
    }
  })));
};
BaseDatePicker.propTypes = {
  label: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.string]),
  format: _propTypes.default.string,
  onDateChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  minDate: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.string]),
  disableToolBar: _propTypes.default.bool,
  required: _propTypes.default.bool,
  error: _propTypes.default.bool
};
BaseDatePicker.defaultProps = {
  label: '',
  disableToolBar: false,
  value: null,
  format: '',
  handleChange: function handleChange() {},
  disabled: false,
  minDate: (0, _moment.default)().subtract(100, 'years'),
  maxDate: (0, _moment.default)().subtract(10, 'years'),
  required: false,
  error: false
};
var _default = BaseDatePicker;
exports.default = _default;