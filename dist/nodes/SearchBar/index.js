"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _style = _interopRequireDefault(require("./style"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ENTER_KEY = 13;

var Search = function Search(_ref) {
  var onEnter = _ref.onEnter,
      placeholder = _ref.placeholder,
      value = _ref.value,
      onChange = _ref.onChange,
      disabled = _ref.disabled;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];

  var onKeyup = function onKeyup(event) {
    var keyCode = event.keyCode;
    if (keyCode === ENTER_KEY) onEnter(event);
  };

  var handleOnChange = function handleOnChange(event) {
    var value = event.target.value;
    setCurrentValue(value);
    onChange(event);
  };

  (0, _react.useEffect)(function () {
    setCurrentValue(value);
  }, [value]);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.root, classes.border)
  }, _react.default.createElement(_core.InputBase, {
    onKeyUp: onKeyup,
    placeholder: placeholder,
    classes: {
      root: classes.inputContainer,
      input: classes.input
    },
    inputProps: {
      'aria-label': 'search'
    },
    endAdornment: _react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, _react.default.createElement(_Search.default, {
      className: classes.icon
    })),
    value: currentValue,
    onChange: handleOnChange,
    disabled: disabled
  }));
};

Search.propTypes = {
  onEnter: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
Search.defaultProps = {
  onEnter: function onEnter() {},
  placeholder: '',
  value: '',
  onChange: function onChange() {},
  disabled: false
};
var _default = Search;
exports.default = _default;