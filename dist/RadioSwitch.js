"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/RadioSwitch.css");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ITEMS_SIZE = 2;
var GRAY = '#F2F2F2';
var GRAY_LIGHT = '#989898';
var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    content: {
      backgroundColor: GRAY
    },
    wrapperChecked: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    wrapperUnchecked: {
      backgroundColor: GRAY,
      color: GRAY_LIGHT
    },
    bgTransparent: {
      backgroundColor: 'transparent'
    }
  };
});

var RadioSwitch = function RadioSwitch(props) {
  var _useState = (0, _react.useState)(props.selected),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var onClick = function onClick(value) {
    var handleChange = props.handleChange;
    setSelected(value);
    handleChange(value);
  };

  var isOne = function isOne() {
    var exist = false;
    options.forEach(function (option) {
      if (option.key === "" && option.value === "") exist = true;
    });
    return exist;
  };

  (0, _react.useEffect)(function () {
    setSelected(props.selected);
  }, [props.selected]);
  var options = props.options,
      checkedColor = props.checkedColor,
      uncheckedColor = props.uncheckedColor;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: "radio-switch-content ".concat(classes.content, " ").concat(isOne() ? classes.bgTransparent : "")
  }, options.map(function (item) {
    var key = item.key,
        value = item.value;
    var checked = key === selected;
    return _react.default.createElement("label", {
      key: key,
      htmlFor: key,
      className: "\n              radio-switch-wrapper \n              ".concat(checked ? 'radio-switch-wrapper-checked' : '', "\n              ").concat(checked ? classes.wrapperChecked : classes.wrapperUnchecked, "\n              ").concat(key === "" && value === "" ? classes.bgTransparent : "", "\n              ")
    }, _react.default.createElement("span", {
      className: "radio-switch"
    }, _react.default.createElement("input", {
      id: key,
      type: "radio",
      className: "radio-switch-input",
      checked: checked,
      value: key,
      onChange: function onChange(ev) {
        return onClick(ev.target.value);
      }
    })), _react.default.createElement("span", {
      className: "radio-switch"
    }, value));
  }));
};

RadioSwitch.defaultProps = {
  options: [],
  selected: '',
  handleChange: function handleChange() {}
};
RadioSwitch.propTypes = {
  options: function options(props, propName) {
    var propLength = props[propName].length;

    if (propLength !== ITEMS_SIZE && propLength > 0) {
      return new Error("Invalid array length ".concat(propLength, " (the length must be ").concat(ITEMS_SIZE, ")"));
    }
  },
  selected: _propTypes.default.string,
  handleChange: _propTypes.default.func
};
var _default = RadioSwitch;
exports.default = _default;