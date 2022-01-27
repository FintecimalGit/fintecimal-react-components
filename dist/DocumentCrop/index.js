"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Header = _interopRequireDefault(require("./Header"));

var _ImageEditor = _interopRequireDefault(require("./ImageEditor"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DocumentCrop = function DocumentCrop(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onCrop = _ref.onCrop,
      onBack = _ref.onBack;
  var classes = (0, _style.default)();
  return _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    className: classes.containerAbsolute
  }, _react.default.createElement("div", {
    className: classes.header
  }, _react.default.createElement(_Header.default, {
    title: "Ayudanos a recortar tu foto",
    description: label,
    onBack: onBack
  })), _react.default.createElement("div", {
    className: classes.documentContainer
  }, _react.default.createElement(_ImageEditor.default, {
    file: value,
    onCrop: onCrop
  }))));
};

DocumentCrop.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(Blob)]).isRequired,
  onCrop: _propTypes.default.func.isRequired,
  onBack: _propTypes.default.func.isRequired
};

var _default = (0, _react.memo)(DocumentCrop);

exports.default = _default;