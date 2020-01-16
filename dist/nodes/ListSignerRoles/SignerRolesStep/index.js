"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CheckCircle = _interopRequireDefault(require("@material-ui/icons/CheckCircle"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SignerRolesStep = function SignerRolesStep(_ref) {
  var index = _ref.index,
      step = _ref.step;
  var classes = (0, _style.default)();

  var getClassFromStatus = function getClassFromStatus(complete) {
    return complete ? classes.labelComplete : classes.label;
  };

  var label = step.label,
      complete = step.complete;
  return _react.default.createElement("div", {
    key: index,
    className: classes.content
  }, _react.default.createElement("p", {
    className: getClassFromStatus(complete)
  }, label), complete && _react.default.createElement(_CheckCircle.default, {
    className: classes.icon
  }));
};

SignerRolesStep.propTypes = {
  index: _propTypes.default.number,
  step: _propTypes.default.object
};
SignerRolesStep.defaultProps = {
  index: 0,
  step: {}
};
var _default = SignerRolesStep;
exports.default = _default;