"use strict";

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ENTER_KEY = 13;

var Search = function Search(_ref) {
  var onEnter = _ref.onEnter,
      placeholder = _ref.placeholder,
      value = _ref.value,
      onChange = _ref.onChange;
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
    onChange: handleOnChange
  }));
};

Search.propTypes = _defineProperty({
  onEnter: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  value: _propTypes.default.string
}, "onEnter", _propTypes.default.func);
Search.defaultProps = {
  onEnter: function onEnter() {},
  placeholder: '',
  value: '',
  onChange: function onChange() {}
};
var _default = Search;
exports.default = _default;