"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _MenuItem = _interopRequireDefault(require("@material-ui/core/MenuItem"));

var _Select = _interopRequireDefault(require("@material-ui/core/Select"));

var _FormControl = _interopRequireDefault(require("@material-ui/core/FormControl"));

var _KeyboardArrowDown = _interopRequireDefault(require("@material-ui/icons/KeyboardArrowDown"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    content: {
      position: 'relative',
      width: '100%'
    },
    placeholder: {
      position: 'absolute',
      top: 'calc(50% - 12px)',
      color: theme.palette.text.primary
    },
    placeholderHidden: {
      display: 'none'
    },
    paper: {
      maxHeight: '180px !important'
    }
  };
});

var SelectBasic = function SelectBasic(props) {
  var _useState = (0, _react.useState)(props.selected),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = (0, _react.useState)(!props.selected),
      _useState4 = _slicedToArray(_useState3, 2),
      showLabel = _useState4[0],
      setShowLabel = _useState4[1];

  var handleChange = function handleChange(event) {
    var onChange = props.onChange;
    setSelected(event.target.value);
    onChange(event.target.value);
    setShowLabel(false);
  };

  (0, _react.useEffect)(function () {
    setSelected(props.selected);
    setShowLabel(!props.selected);
  }, [props.selected]);
  var options = props.options,
      placeholder = props.placeholder,
      _onClose = props.onClose;
  var _onOpen = props.onOpen;
  var classes = useStyles();
  return _react.default.createElement("div", null, _react.default.createElement(_FormControl.default, {
    className: classes.content
  }, _react.default.createElement("div", {
    className: showLabel ? classes.placeholder : classes.placeholderHidden
  }, placeholder), _react.default.createElement(_Select.default, {
    value: selected,
    onChange: handleChange,
    onClose: function onClose() {
      setShowLabel(!selected);

      _onClose();
    },
    onOpen: function onOpen() {
      return _onOpen();
    },
    MenuProps: {
      classes: {
        paper: classes.paper
      }
    },
    IconComponent: _KeyboardArrowDown.default
  }, options.map(function (option, index) {
    var value = option.value,
        name = option.name;
    return _react.default.createElement(_MenuItem.default, {
      key: index,
      value: value
    }, name);
  }))));
};

SelectBasic.defaultProps = {
  placeholder: '',
  options: [],
  selected: '',
  onClose: function onClose() {},
  onOpen: function onOpen() {},
  onChange: function onChange() {}
};
SelectBasic.propTypes = {
  options: _propTypes.default.array,
  selected: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  onClose: _propTypes.default.func,
  onOpen: _propTypes.default.func,
  onChange: _propTypes.default.func
};
var _default = SelectBasic;
exports.default = _default;