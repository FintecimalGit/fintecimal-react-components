"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/es");

var _Popover = _interopRequireDefault(require("@material-ui/core/Popover"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _CardContent = _interopRequireDefault(require("@material-ui/core/CardContent"));

var _Avatar = _interopRequireDefault(require("@material-ui/core/Avatar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RejectionNote = function RejectionNote(_ref) {
  var onClose = _ref.onClose,
      name = _ref.name,
      image = _ref.image,
      date = _ref.date,
      reason = _ref.reason,
      comments = _ref.comments;
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
    className: classes.card
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
  }, _react.default.createElement("div", null, "Comentarios: "), _react.default.createElement("div", null, comments))));
};

RejectionNote.propTypes = {
  onClose: _propTypes.default.func,
  name: _propTypes.default.string,
  image: _propTypes.default.string,
  date: _propTypes.default.instanceOf(Date),
  reason: _propTypes.default.string,
  comments: _propTypes.default.string
};
RejectionNote.defaultProps = {
  onClose: function onClose() {},
  name: '',
  image: '',
  date: new Date(),
  reason: '',
  comments: ''
};
var _default = RejectionNote;
exports.default = _default;