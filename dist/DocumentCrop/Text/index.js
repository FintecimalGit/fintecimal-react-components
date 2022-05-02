"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TYPES = exports.FONT_WEIGHTS = exports.COLORS = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TYPES = {
  HEADER: 'header',
  PARAGRAPH: 'paragraph'
};
exports.TYPES = TYPES;
var COLORS = {
  INITIAL: 'initial',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ERROR: 'error'
};
exports.COLORS = COLORS;
var FONT_WEIGHTS = {
  LIGHTER: 'lighter',
  NORMAL: 'normal',
  BOLD: 'bold'
};
exports.FONT_WEIGHTS = FONT_WEIGHTS;

var Text = function Text(_ref) {
  var _classnames;

  var type = _ref.type,
      color = _ref.color,
      fontWeigth = _ref.fontWeigth,
      center = _ref.center,
      disabled = _ref.disabled,
      children = _ref.children,
      inline = _ref.inline;
  var classes = (0, _style.default)();
  var variant = type === TYPES.HEADER ? 'body1' : 'body2';
  var inlineProps = true ? {
    display: 'inline'
  } : {};
  return /*#__PURE__*/_react.default.createElement(_Typography.default, _extends({}, inlineProps, {
    variant: variant,
    color: color,
    className: (0, _classnames2.default)([classes[fontWeigth]], (_classnames = {}, _defineProperty(_classnames, classes.center, center), _defineProperty(_classnames, classes.disabled, disabled), _classnames))
  }), children);
};

Text.propTypes = {
  inline: _propTypes.default.bool,
  type: _propTypes.default.oneOf(Object.values(TYPES)),
  color: _propTypes.default.oneOf(Object.values(COLORS)),
  fontWeigth: _propTypes.default.oneOf(Object.values(FONT_WEIGHTS)),
  center: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node, _propTypes.default.string, _propTypes.default.number])
};
Text.defaultProps = {
  inline: false,
  type: TYPES.PARAGRAPH,
  color: COLORS.INITIAL,
  fontWeigth: FONT_WEIGHTS.BOLD,
  center: false,
  disabled: false,
  children: ''
};

var _default = /*#__PURE__*/(0, _react.memo)(Text);

exports.default = _default;