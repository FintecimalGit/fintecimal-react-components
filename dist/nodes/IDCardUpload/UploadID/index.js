"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DropZone = _interopRequireDefault(require("../../../DropZone"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UploadID = function UploadID(_ref) {
  var multiple = _ref.multiple,
      accept = _ref.accept,
      onDrop = _ref.onDrop,
      className = _ref.className,
      label = _ref.label;
  var classes = (0, _style.default)();
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.parent, className)
  }, _react.default.createElement("span", {
    className: classes.label
  }, label), _react.default.createElement(_DropZone.default, {
    multiple: multiple,
    accept: accept,
    onDrop: onDrop
  }));
};

UploadID.defaultProps = {
  label: 'Frente',
  className: '',
  multiple: false,
  accept: '',
  onDrop: function onDrop() {}
};
UploadID.propTypes = {
  label: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  className: _propTypes.default.string
};
var _default = UploadID;
exports.default = _default;