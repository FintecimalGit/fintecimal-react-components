"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Warning = _interopRequireDefault(require("@material-ui/icons/Warning"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DeleteDialog = function DeleteDialog(_ref) {
  var onCancel = _ref.onCancel,
      onDelete = _ref.onDelete,
      onDeleteAll = _ref.onDeleteAll,
      title = _ref.title,
      showModal = _ref.showModal;
  var classes = (0, _style.default)();
  return _react.default.createElement(_Dialog.default, {
    open: showModal,
    onClose: function onClose() {
      return setShowModal(false);
    },
    "aria-labelledby": "alert-dialog-title",
    "aria-describedby": "alert-dialog-description",
    classes: {
      root: classes.dialogContainer
    }
  }, _react.default.createElement(_DialogTitle.default, {
    id: "responsive-dialog-title"
  }, title), _react.default.createElement("div", {
    className: classes.iconContainer
  }, _react.default.createElement(_Warning.default, {
    className: classes.icon
  })), _react.default.createElement(_DialogActions.default, null, _react.default.createElement(_Button.default, {
    onClick: onDelete,
    color: "primary"
  }, "Eliminar"), _react.default.createElement(_Button.default, {
    onClick: onDeleteAll,
    color: "primary"
  }, "Eliminar todos"), _react.default.createElement(_Button.default, {
    onClick: onCancel,
    color: "primary"
  }, "Cancelar")));
};

DeleteDialog.propTypes = {
  onCancel: _propTypes.default.func.isRequired,
  onDelete: _propTypes.default.func.isRequired,
  onDeleteAll: _propTypes.default.func.isRequired,
  title: _propTypes.default.string.isRequired,
  showModal: _propTypes.default.bool.isRequired
};
var _default = DeleteDialog;
exports.default = _default;