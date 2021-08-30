"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _DescriptionOutlined = _interopRequireDefault(require("@material-ui/icons/DescriptionOutlined"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CardApp = function CardApp(_ref) {
  var title = _ref.title,
      count = _ref.count,
      onClick = _ref.onClick,
      Icon = _ref.Icon;
  var classes = (0, _style.default)();
  return _react.default.createElement(_core.Paper, {
    className: classes.paper,
    onClick: onClick
  }, _react.default.createElement(_core.Badge, {
    color: "secondary",
    badgeContent: count,
    classes: {
      badge: classes.badge
    },
    max: 999
  }, typeof Icon === 'string' ? _react.default.createElement("img", {
    src: Icon,
    className: classes.image
  }) : _react.default.createElement(Icon, {
    className: classes.icon
  })), _react.default.createElement("p", {
    className: classes.title
  }, title));
};

CardApp.defaultProps = {
  title: 'FORMAS',
  count: 23,
  onClick: function onClick() {},
  Icon: 'https://fintecimal-test.s3.amazonaws.com/fintecimal-img/stepconfigs-icons/verificacion-general.png'
};
CardApp.propTypes = {
  title: _propTypes.default.string,
  count: _propTypes.default.number,
  onClick: _propTypes.default.func,
  Icon: _propTypes.default.object || _propTypes.default.string
};
var _default = CardApp;
exports.default = _default;