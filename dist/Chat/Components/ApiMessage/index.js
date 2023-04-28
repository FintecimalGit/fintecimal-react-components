"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ApiMessage = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ApiMessage = function ApiMessage(_ref) {
  var message = _ref.message;
  var classes = (0, _style.default)();
  return _react.default.createElement("p", {
    className: classes.container
  }, message);
};

exports.ApiMessage = ApiMessage;
ApiMessage.propTypes = {
  message: _propTypes.default.string
};
ApiMessage.defaultProps = {
  message: ''
};