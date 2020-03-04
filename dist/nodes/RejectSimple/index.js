"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _RejectionButtons = _interopRequireDefault(require("../RejectionButtons"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RejectSimple = function RejectSimple(_ref) {
  var field = _ref.field,
      rejected = _ref.rejected,
      onReject = _ref.onReject,
      rejectionOptions = _ref.rejectionOptions,
      rejectionData = _ref.rejectionData,
      onAccept = _ref.onAccept;
  var classes = (0, _style.default)();
  var title = field.label;

  var handlerReject = function handlerReject(data) {
    onReject(data);
  };

  var handlerAccept = function handlerAccept() {
    onAccept();
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.titleContainer
  }, _react.default.createElement("div", {
    className: classes.titleLine
  }, _react.default.createElement(_Typography.default, {
    className: classes.title
  }, title)), _react.default.createElement("div", {
    className: classes.rejectAction
  }, _react.default.createElement(_RejectionButtons.default, {
    rejectionOptions: rejectionOptions,
    handlerReject: handlerReject,
    rejected: rejected,
    rejectionData: rejectionData,
    onAccept: handlerAccept
  }))));
};

RejectSimple.propTypes = {
  field: _propTypes.default.object.isRequired,
  onReject: _propTypes.default.func.isRequired,
  onAccept: _propTypes.default.func.isRequired,
  rejectionOptions: _propTypes.default.array.isRequired,
  rejectionData: _propTypes.default.object
};
RejectSimple.defaultProps = {
  field: {
    label: 'Falta definir field'
  },
  onReject: function onReject() {},
  onAccept: function onAccept() {},
  rejectionOptions: [],
  rejectionData: {
    reason: '',
    comments: ''
  }
};
var _default = RejectSimple;
exports.default = _default;