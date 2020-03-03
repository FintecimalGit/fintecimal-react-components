"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      onClear = _ref.onClear;
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

  var mHandleChange = function mHandleChange(event) {
    var eventValue = event.target.value;
    setValue(eventValue);
    handleChange(eventValue);
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

  return _react.default.createElement("div", {
    className: classes.root
  }, (0, _utils.isTextLong)(label) && _react.default.createElement("div", null, _react.default.createElement(_LongPlaceHolder.default, {
    text: label
  })), _react.default.createElement(_core.FormControl, {
    className: classes.form,
    required: required,
    error: error,
    variant: "outlined"
  }, _react.default.createElement(_core.InputLabel, {
    ref: labelRef,
    className: classes.label,
    htmlFor: "component-outlined",
    variant: "outlined",
    classes: {
      asterisk: classes.asterisk
    }
  }, selectLabel()), _react.default.createElement(_core.OutlinedInput, {
    id: "component-outlined",
    value: mValue,
    multiline: true,
    rows: "4",
    onChange: mHandleChange,
    labelWidth: labelWidth,
    onBlur: onBlur,
    className: classes.input,
    endAdornment: clear && mValue && _react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, _react.default.createElement(_core.IconButton, {
      "aria-label": "clear input",
      onClick: mOnClear
    }, _react.default.createElement(_icons.Clear, {
      className: classes.icon
    }))),
    classes: {
      notchedOutline: classes.notchedOutline,
      focused: classes.focusNotchedOutline
    },
    type: type
  })), error && (0, _utils.isTextLong)(errorMessage) && _react.default.createElement(_LongError.default, {
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
  onClear: function onClear() {}
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
  onClear: _propTypes.default.func
};
var _default = TextAreaInput;
exports.default = _default;