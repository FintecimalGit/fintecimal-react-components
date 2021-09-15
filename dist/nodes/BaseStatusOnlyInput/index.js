"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BaseInput = _interopRequireDefault(require("../BaseInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BaseStatusOnlyInput = function BaseStatusOnlyInput(_ref) {
  var label = _ref.label,
      statusOnly = _ref.statusOnly,
      status = _ref.status;
  return _react.default.createElement(_BaseInput.default, {
    handleChange: function handleChange() {},
    label: label,
    disabled: true,
    statusOnly: statusOnly,
    status: status
  });
};

BaseStatusOnlyInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  statusOnly: _propTypes.default.bool.isRequired,
  status: _propTypes.default.string.isRequired
};
var _default = BaseStatusOnlyInput;
exports.default = _default;