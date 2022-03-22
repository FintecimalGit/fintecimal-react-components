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
      Icon = _ref.Icon,
      IconNotification = _ref.IconNotification,
      onClickNotification = _ref.onClickNotification,
      showNotification = _ref.showNotification;
  var classes = (0, _style.default)();
  var notification;

  if (showNotification) {
    notification = typeof IconNotification === 'string' ? _react.default.createElement(_core.IconButton, {
      onClick: function onClick() {
        onClickNotification();
      },
      className: classes.buttonNotification
    }, _react.default.createElement("img", {
      src: IconNotification,
      className: classes.iconNotification
    })) : _react.default.createElement(IconNotification, {
      className: classes.iconNotification
    });
  }

  return _react.default.createElement(_core.Paper, {
    className: classes.paper,
    onClick: onClick
  }, notification, _react.default.createElement(_core.Badge, {
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
  Icon: _DescriptionOutlined.default,
  IconNotification: '',
  onClickNotification: function onClickNotification() {},
  showNotification: false
};
CardApp.propTypes = {
  title: _propTypes.default.string,
  count: _propTypes.default.number,
  onClick: _propTypes.default.func,
  Icon: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  IconNotification: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
  onClickNotification: _propTypes.default.func,
  showNotification: _propTypes.default.bool
};
var _default = CardApp;
exports.default = _default;