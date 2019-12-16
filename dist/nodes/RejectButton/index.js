"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _classnames6 = _interopRequireDefault(require("classnames"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var RejectIcon = function RejectIcon(_ref) {
  var onClick = _ref.onClick,
      onClickMessage = _ref.onClickMessage,
      rejected = _ref.rejected,
      noteOpen = _ref.noteOpen,
      size = _ref.size;
  var classes = (0, _style.default)();

  var clickBadge = function clickBadge(event) {
    event.stopPropagation();
    onClickMessage(event);
  };

  var clickButton = function clickButton(event) {
    event.stopPropagation();
    if (!rejected) onClick(event);
  };
  /**
   * @returns {Boolean}
   */


  var sizeIsLarge = function sizeIsLarge() {
    return size === 'large';
  };
  /**
   * @returns {Boolean}
   */


  var sizeIsSmall = function sizeIsSmall() {
    return size === 'small';
  };

  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_core.Badge, {
    color: "default",
    overlap: "circle",
    badgeContent: _react.default.createElement(_icons.Chat, null),
    className: (0, _classnames6.default)(classes.badge, _defineProperty({}, classes.noteOpen, noteOpen)),
    invisible: !rejected,
    onClick: clickBadge
  }, _react.default.createElement(_core.Fab, {
    color: "secondary",
    "aria-label": "reject",
    className: (0, _classnames6.default)(classes.button, _defineProperty({}, classes.disabled, rejected), _defineProperty({}, classes.hover, !rejected), _defineProperty({}, classes.buttonLarge, sizeIsLarge()), _defineProperty({}, classes.buttonSmall, sizeIsSmall())),
    onClick: clickButton
  }, _react.default.createElement(_icons.ThumbDownRounded, {
    className: classes.icon
  }))));
};

RejectIcon.defaultProps = {
  rejected: true,
  noteOpen: true,
  size: 'large'
};
RejectIcon.propTypes = {
  rejected: _propTypes.default.bool,
  noteOpen: _propTypes.default.bool,
  onClick: _propTypes.default.func.isRequired,
  onClickMessage: _propTypes.default.func.isRequired,
  size: _propTypes.default.oneOf(['large', 'small'])
};
var _default = RejectIcon;
exports.default = _default;