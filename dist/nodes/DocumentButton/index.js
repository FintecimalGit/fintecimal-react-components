"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _DropZone = _interopRequireDefault(require("../../DropZone"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var DocumentButton = function DocumentButton(_ref) {
  var text = _ref.text,
      isCompleted = _ref.isCompleted,
      side = _ref.side,
      disabled = _ref.disabled,
      accept = _ref.accept,
      onDrop = _ref.onDrop,
      isIncorrect = _ref.isIncorrect;

  var handleOnDrop = function handleOnDrop(acceptedFiles, rejectedFiles) {
    onDrop(acceptedFiles, rejectedFiles, side);
  };

  return _react.default.createElement(_react.default.Fragment, null, !isCompleted && _react.default.createElement(_DropZone.default, {
    accept: accept,
    onDrop: handleOnDrop,
    disabled: disabled,
    isIncorrect: isIncorrect,
    text: text,
    isIneEditor: true
  }));
};

DocumentButton.propTypes = {
  text: _propTypes.default.string,
  isCompleted: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  isIncorrect: false,
  side: _propTypes.default.number
};
DocumentButton.defaultProps = {
  text: '',
  isCompleted: false,
  disabled: false,
  accept: '',
  onDrop: function onDrop() {},
  isIncorrect: false,
  side: 0
};

var _default = (0, _react.memo)(DocumentButton);

exports.default = _default;