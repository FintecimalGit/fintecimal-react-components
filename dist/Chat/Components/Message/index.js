"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Message = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

var _ApiMessage = require("../ApiMessage");

var _UserMessage = require("../UserMessage");

var _messages = require("../../constants/messages");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Message = function Message(_ref) {
  var message = _ref.message,
      type = _ref.type;
  var classes = (0, _style.default)();
  return _react.default.createElement(_react.default.Fragment, null, type === _messages.API_MESSAGE ? _react.default.createElement(_ApiMessage.ApiMessage, {
    message: message
  }) : _react.default.createElement(_UserMessage.UserMessage, {
    message: message
  }));
};

exports.Message = Message;
Message.propTypes = {
  message: _propTypes.default.string,
  type: _propTypes.default.string
};
Message.defaultProps = {
  message: '',
  type: 'API_MESSAGE'
};