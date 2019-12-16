"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FAB = function FAB(props) {
  var className = props.className,
      children = props.children,
      size = props.size;
  var onClick = props.onClick;
  var classes = (0, _style.default)();
  return _react.default.createElement(_IconButton.default, {
    className: (0, _classnames.default)(classes.button, className),
    size: size,
    onClick: onClick
  }, children);
};

FAB.propTypes = {
  className: _propTypes.default.string,
  children: _propTypes.default.node.isRequired,
  size: _propTypes.default.string,
  onClick: _propTypes.default.func
};
FAB.defaultProps = {
  className: '',
  size: 'small',
  onClick: function onClick() {}
};
var _default = FAB;
exports.default = _default;