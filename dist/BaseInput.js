"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("../styles/BaseInput.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseInput = function BaseInput(_ref) {
  var label = _ref.label,
      type = _ref.type,
      value = _ref.value,
      required = _ref.required,
      error = _ref.error,
      errorMessage = _ref.errorMessage;
  return _react.default.createElement("div", {
    className: "group"
  }, _react.default.createElement("input", {
    type: type,
    required: required,
    value: value
  }), _react.default.createElement("span", {
    className: "highlight"
  }), _react.default.createElement("span", {
    className: "bar"
  }), _react.default.createElement("label", null, label));
};

BaseInput.defaultPropTypes = {
  required: false,
  error: false,
  errorMessage: '',
  type: 'text',
  value: ''
};
BaseInput.propTypes = {
  required: _propTypes.default.bool,
  type: _propTypes.default.string,
  label: _propTypes.default.string.isRequired,
  error: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = BaseInput;
exports.default = _default;