"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _Chat = _interopRequireDefault(require("../Chat"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ButtonChat = function ButtonChat(_ref) {
  var textLimit = _ref.textLimit;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      showChat = _useState2[0],
      setShowChat = _useState2[1];

  var classes = (0, _style.default)();

  var closeChat = function closeChat() {
    setShowChat(false);
  };

  var openChat = function openChat() {
    setShowChat(true);
  };

  return _react.default.createElement("div", {
    className: classes.test
  }, _react.default.createElement("div", {
    className: classes.container
  }, showChat ? _react.default.createElement(_IconButton.default, {
    className: classes.iconButton,
    onClick: closeChat
  }, _react.default.createElement(_Delete.default, null)) : _react.default.createElement(_IconButton.default, {
    className: classes.iconButton,
    onClick: openChat
  }, _react.default.createElement(_Edit.default, null)), _react.default.createElement(_Chat.default, {
    textLimit: textLimit
  })));
};

ButtonChat.propTypes = {
  textLimit: _propTypes.default.number
};
ButtonChat.defaultProps = {
  textLimit: 10
};
var _default = ButtonChat;
exports.default = _default;