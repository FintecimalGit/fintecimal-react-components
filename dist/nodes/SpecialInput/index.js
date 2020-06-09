"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _LongPlaceHolder = _interopRequireDefault(require("../../LongPlaceHolder"));

var _LongError = _interopRequireDefault(require("../../LongError"));

var _utils = require("../../commons/utils");

var _style = _interopRequireDefault(require("./style"));

require("../../styles/BaseInput.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SpecialInput = function SpecialInput(_ref) {
  var _React$createElement;

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
      children = _ref.children,
      onFocus = _ref.onFocus,
      startAdornment = _ref.startAdornment,
      disabled = _ref.disabled;
  var classes = (0, _style.default)();

  var _React$useState = _react.default.useState(0),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      labelWidth = _React$useState2[0],
      setLabelWidth = _React$useState2[1];

  var labelRef = _react.default.useRef(null);

  _react.default.useEffect(function () {
    setLabelWidth(labelRef.current.offsetWidth);
  }, [label, errorMessage]);

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
  })), _react.default.createElement("div", {
    className: classes.inputBox
  }, _react.default.createElement("div", {
    className: classes.icon
  }, children), _react.default.createElement(_core.FormControl, {
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
  }, selectLabel()), _react.default.createElement(_core.OutlinedInput, (_React$createElement = {
    id: "component-outlined",
    className: classes.input,
    value: value,
    onChange: handleChange,
    onBlur: onBlur,
    labelWidth: labelWidth
  }, _defineProperty(_React$createElement, "onBlur", onBlur), _defineProperty(_React$createElement, "onFocus", onFocus), _defineProperty(_React$createElement, "startAdornment", startAdornment && _react.default.createElement(_core.InputAdornment, {
    position: "start",
    className: classes.adornment
  }, startAdornment)), _defineProperty(_React$createElement, "endAdornment", value && clear && !disabled && _react.default.createElement(_core.InputAdornment, {
    position: "end"
  }, _react.default.createElement(_core.IconButton, {
    "aria-label": "clear input",
    onClick: onClear,
    tabIndex: "-1"
  }, _react.default.createElement(_icons.Clear, {
    className: classes.close
  })))), _defineProperty(_React$createElement, "classes", {
    notchedOutline: classes.notchedOutline,
    focused: classes.focusNotchedOutline
  }), _defineProperty(_React$createElement, "type", type), _defineProperty(_React$createElement, "disabled", disabled), _React$createElement)))), error && (0, _utils.isTextLong)(errorMessage) && _react.default.createElement(_LongError.default, {
    text: errorMessage
  }));
};

SpecialInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  disabled: false
};
SpecialInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  required: _propTypes.default.bool,
  error: _propTypes.default.bool,
  type: _propTypes.default.string,
  clear: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  handleChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  startAdornment: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
var _default = SpecialInput;
exports.default = _default;