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

var _icons = require("@material-ui/icons");

var _style = _interopRequireDefault(require("./style"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      disabled = _ref.disabled,
      id = _ref.id,
      clear = _ref.clear;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      currentValue = _useState2[0],
      setCurrentValue = _useState2[1];

  var _useState3 = (0, _react.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showSearch = _useState4[0],
      setShowSearch = _useState4[1];

  var onKeyup = function onKeyup(event) {
    var keyCode = event.keyCode;

    if (keyCode === ENTER_KEY) {
      onEnter(event);
      setShowSearch(false);
    }
  };

  var onClearChange = function onClearChange(event) {
    var newTarget = _objectSpread({}, event.target, {
      value: ''
    });

    setShowSearch(true);
    setCurrentValue('');
    onChange(_objectSpread({}, event, {
      target: newTarget
    }));
    onEnter(_objectSpread({}, event, {
      target: newTarget
    }));
  };

  var onSearch = function onSearch(event) {
    event.currentTarget.value = currentValue;
    onEnter(event);
    setShowSearch(false);
  };

  var handleOnChange = function handleOnChange(event) {
    var value = event.target.value;
    setCurrentValue(value);
    onChange(event);
    setShowSearch(true);
  };

  var selectAdorment = function selectAdorment() {
    if (!showSearch && clear && value && !disabled) {
      return _react.default.createElement(_core.InputAdornment, {
        position: "end"
      }, _react.default.createElement(_core.IconButton, {
        "aria-label": "clear input",
        className: classes.iconButton,
        onClick: onClearChange,
        tabIndex: "-1"
      }, _react.default.createElement(_icons.Clear
      /*className={classes.icon}*/
      , null)));
    }

    return _react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, _react.default.createElement(_core.IconButton, {
      id: id,
      "aria-label": "Search",
      className: classes.iconButton,
      onClick: onSearch
    }, _react.default.createElement(_Search.default, {
      className: classes.icon
    })));
  };

  (0, _react.useEffect)(function () {
    setCurrentValue(value);
  }, [value]);
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.root, classes.border)
  }, _react.default.createElement(_core.InputBase, {
    id: id,
    onKeyUp: onKeyup,
    placeholder: placeholder,
    classes: {
      root: classes.inputContainer,
      input: classes.input
    },
    inputProps: {
      'aria-label': 'search'
    },
    endAdornment: selectAdorment(),
    value: currentValue,
    onChange: handleOnChange,
    disabled: disabled
  }));
};

Search.propTypes = {
  onEnter: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  clear: _propTypes.default.bool
};
Search.defaultProps = {
  onEnter: function onEnter() {},
  placeholder: '',
  value: '',
  onChange: function onChange() {},
  disabled: false,
  clear: false
};
var _default = Search;
exports.default = _default;