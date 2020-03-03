"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _RejectActions = _interopRequireDefault(require("../RejectActions"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RejectDocuments = function RejectDocuments(_ref) {
  var title = _ref.title,
      rejected = _ref.rejected,
      onReject = _ref.onReject,
      url = _ref.url,
      rejectionOptions = _ref.rejectionOptions,
      rejectionData = _ref.rejectionData;
  var classes = (0, _style.default)();
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.titleContainer
  }, _react.default.createElement("div", {
    className: classes.titleLine
  }, _react.default.createElement(_Typography.default, {
    className: classes.title
  }, title)), _react.default.createElement("div", {
    className: classes.rejectAction
  }, _react.default.createElement(_RejectActions.default, {
    rejectionOptions: rejectionOptions,
    handlerReject: onReject(title),
    rejected: rejected,
    size: "small",
    rejectionData: rejectionData
  }))), url ? _react.default.createElement("iframe", {
    title: title,
    src: url,
    className: classes.file
  }) : "No existe documento");
};

RejectDocuments.propTypes = {
  title: _propTypes.default.string,
  onDrop: _propTypes.default.func,
  onReject: _propTypes.default.func,
  url: _propTypes.default.string,
  rejectionOptions: _propTypes.default.array,
  rejectionData: _propTypes.default.object
};
RejectDocuments.defaultProps = {
  title: '',
  onDrop: function onDrop() {},
  onReject: function onReject() {},
  url: '',
  rejectionOptions: [],
  rejectionData: {
    reason: '',
    comments: ''
  }
};
var _default = RejectDocuments;
exports.default = _default;