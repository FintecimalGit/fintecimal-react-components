"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDropzone = require("react-dropzone");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _AddCircleOutline = _interopRequireDefault(require("@material-ui/icons/AddCircleOutline"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DropZone = function DropZone(_ref) {
  var multiple = _ref.multiple,
      accept = _ref.accept,
      onDrop = _ref.onDrop,
      disabled = _ref.disabled,
      isIncorrect = _ref.isIncorrect,
      text = _ref.text,
      isIneEditor = _ref.isIneEditor;
  var classes = (0, _style.default)();

  var _useDropzone = (0, _reactDropzone.useDropzone)({
    multiple: multiple,
    accept: accept,
    onDrop: onDrop
  }),
      getRootProps = _useDropzone.getRootProps,
      getInputProps = _useDropzone.getInputProps;

  var rootProps = getRootProps({
    className: classes.dropZone
  });
  var inputProps = getInputProps();
  return _react.default.createElement("div", {
    className: (0, _classnames2.default)(classes.dropZoneContainer, _defineProperty({}, classes.isIneEditor, isIneEditor))
  }, _react.default.createElement(_Paper.default, _extends({}, rootProps, {
    style: {
      border: isIncorrect ? '2px dashed #f44336' : '2px dashed #4C5C68'
    }
  }), _react.default.createElement("input", _extends({}, inputProps, {
    disabled: disabled
  })), _react.default.createElement("div", null, _react.default.createElement(_AddCircleOutline.default, null)), text ? text : _react.default.createElement(_Typography.default, {
    className: classes.typography
  }, "Arrastra o selecciona el (los)", _react.default.createElement("br", null), "documento(s) para agregar")));
};

DropZone.propTypes = {
  multiple: _propTypes.default.bool,
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  isIncorrect: _propTypes.default.bool,
  text: _propTypes.default.string,
  isIneEditor: _propTypes.default.bool
};
DropZone.defaultProps = {
  multiple: false,
  accept: '',
  onDrop: function onDrop() {},
  disabled: false,
  isIncorrect: false,
  text: '',
  isIneEditor: false
};
var _default = DropZone;
exports.default = _default;