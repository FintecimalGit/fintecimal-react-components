"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Modal = _interopRequireDefault(require("@material-ui/core/Modal"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Close = _interopRequireDefault(require("@material-ui/icons/Close"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Modal = function Modal(_ref) {
  var isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      header = _ref.header,
      disableOnClose = _ref.disableOnClose,
      children = _ref.children;
  var classes = (0, _style.default)();
  return _react.default.createElement(_Modal.default, {
    "aria-labelledby": "modal-title",
    "aria-describedby": "modal-description",
    open: isOpen,
    onClose: onClose,
    disableEnforceFocus: true
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_Paper.default, {
    className: classes.paper
  }, _react.default.createElement("div", {
    className: classes.headerContainer
  }, _react.default.createElement(_Typography.default, {
    variant: "h6"
  }, header), _react.default.createElement(_IconButton.default, {
    onClick: onClose,
    className: classes.iconButton,
    disabled: disableOnClose
  }, _react.default.createElement(_Close.default, null))), _react.default.createElement("div", {
    className: classes.bodyContainer
  }, children))));
};

Modal.propTypes = {
  isOpen: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  header: _propTypes.default.string,
  disableOnClose: _propTypes.default.bool,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node, _propTypes.default.string])
};
Modal.defaultProps = {
  isOpen: false,
  onClose: function onClose() {},
  header: '',
  disableOnClose: false,
  children: ''
};

var _default = (0, _react.memo)(Modal);

exports.default = _default;