"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.FONT_WEIGHTS = exports.COLORS = exports.TYPES = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

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
      children = _ref.children;
  var classes = (0, _style.default)();
  var variant = type === TYPES.HEADER ? 'body1' : 'body2';
  return _react.default.createElement(_Typography.default, {
    variant: variant,
    color: color,
    className: (0, _classnames2.default)([classes[fontWeigth]], (_classnames = {}, _defineProperty(_classnames, classes.center, center), _defineProperty(_classnames, classes.disabled, disabled), _classnames))
  }, children);
};

Text.propTypes = {
  type: _propTypes.default.oneOf(Object.values(TYPES)),
  color: _propTypes.default.oneOf(Object.values(COLORS)),
  fontWeigth: _propTypes.default.oneOf(Object.values(FONT_WEIGHTS)),
  center: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node, _propTypes.default.string, _propTypes.default.number])
};
Text.defaultProps = {
  type: TYPES.PARAGRAPH,
  color: COLORS.INITIAL,
  fontWeigth: FONT_WEIGHTS.BOLD,
  center: false,
  disabled: false,
  children: ''
};

var _default = (0, _react.memo)(Text);

exports.default = _default;