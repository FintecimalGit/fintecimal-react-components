"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/es");

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _icons = require("@material-ui/icons");

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var RejectionNote = (0, _react.forwardRef)(function (_ref, ref) {
  var onClose = _ref.onClose,
      name = _ref.name,
      image = _ref.image,
      date = _ref.date,
      reason = _ref.reason,
      comments = _ref.comments,
      showUndo = _ref.showUndo,
      onUndoRejection = _ref.onUndoRejection;
  var classes = (0, _style.default)();
  /**
   *
   * @param {String} string
   * @returns {String}
   */

  var avatarLetter = function avatarLetter(string) {
    return string.charAt(0).toUpperCase();
  };
  /**
   *
   * @param {Date|String} _date
   * @returns {String}
   */


  var formatDate = function formatDate(_date) {
    return (0, _moment.default)(_date).format('LT, MMM, DD - YYYY').replace('-', 'del');
  };

  return _react.default.createElement(_Card.default, {
    className: classes.card,
    ref: ref
  }, _react.default.createElement(_CardHeader.default, {
    className: classes.cardHeader,
    avatar: image ? _react.default.createElement(_Avatar.default, {
      alt: name,
      src: image
    }) : _react.default.createElement(_Avatar.default, {
      "aria-label": "recipe",
      className: classes.avatar
    }, _react.default.createElement("span", null, avatarLetter(name))),
    action: _react.default.createElement(_IconButton.default, {
      className: classes.iconButton,
      "aria-label": "settings",
      onClick: onClose
    }, _react.default.createElement(_Close.default, {
      className: classes.closeIcon
    })),
    title: name,
    subheader: formatDate(date)
  }), _react.default.createElement(_CardContent.default, {
    className: classes.cardContent
  }, _react.default.createElement(_Typography.default, {
    variant: "body1",
    component: "div"
  }, _react.default.createElement("div", null, "Motivo de rechazo:"), _react.default.createElement("div", null, reason)), comments && _react.default.createElement(_Typography.default, {
    variant: "body1",
    component: "div"
  }, _react.default.createElement("div", null, "Comentarios: "), _react.default.createElement("div", null, comments)), showUndo && _react.default.createElement("div", {
    className: classes.rejectBody
  }, _react.default.createElement("div", {
    className: classes.rejectIcon
  }, _react.default.createElement(_icons.ThumbDownRounded, null)), _react.default.createElement("div", {
    className: classes.rejectText
  }, "Se rechaz\xF3 el elemento."), _react.default.createElement(_Button.default, {
    className: classes.undoButton,
    color: "primary",
    size: "small",
    onClick: function onClick() {
      return onUndoRejection();
    }
  }, "Deshacer"))));
});
RejectionNote.propTypes = {
  onClose: _propTypes.default.func,
  name: _propTypes.default.string,
  image: _propTypes.default.string,
  date: _propTypes.default.instanceOf(Date),
  reason: _propTypes.default.string,
  comments: _propTypes.default.string,
  showUndo: _propTypes.default.bool,
  onUndoRejection: _propTypes.default.func
};
RejectionNote.defaultProps = {
  onClose: function onClose() {},
  name: '',
  image: '',
  date: new Date(),
  reason: '',
  comments: '',
  showUndo: false,
  onUndoRejection: function onUndoRejection() {}
};
var _default = RejectionNote;
exports.default = _default;