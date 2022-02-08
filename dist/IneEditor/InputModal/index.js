"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Modal = _interopRequireDefault(require("../../Modal"));

var _FileThumbnail = _interopRequireDefault(require("../../FileThumbnail"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InputModal = function InputModal(_ref) {
  var header = _ref.header,
      isOpen = _ref.isOpen,
      onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      onSubmit = _ref.onSubmit,
      values = _ref.values;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var cleanFieldValues = function cleanFieldValues() {
    setSelected(0);
  };

  var handleOnClick = function handleOnClick(index) {
    return function (file) {
      setSelected(index);
    };
  };

  var closeModal = function closeModal() {
    cleanFieldValues();
    onClose();
  };

  var cancelModal = function cancelModal() {
    closeModal();
    onCancel();
  };

  var handleOnSubmit = function handleOnSubmit() {
    closeModal();
    onSubmit(selected);
  };

  return _react.default.createElement(_Modal.default, {
    header: header,
    isOpen: isOpen,
    onClose: cancelModal
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement("div", {
    className: classes.form
  }, _react.default.createElement("div", {
    className: classes.formInputContainer
  }, _react.default.createElement(_Grid.default, {
    container: true,
    spacing: 3
  }, values.slice(0, 2).map(function (value, index) {
    return _react.default.createElement(_Grid.default, {
      key: index,
      item: true,
      sm: 6
    }, _react.default.createElement(_FileThumbnail.default, {
      file: value,
      onClick: handleOnClick(index),
      selected: selected === index
    }));
  }))), _react.default.createElement("div", {
    className: classes.actionContainer
  }, _react.default.createElement(_Button.default, {
    color: "default",
    variant: "outlined",
    onClick: cancelModal
  }, "Cancelar"), _react.default.createElement(_Button.default, {
    color: "primary",
    variant: "contained",
    type: "submit",
    onClick: handleOnSubmit
  }, "Guardar")))));
};

InputModal.propTypes = {
  header: _propTypes.default.string,
  isOpen: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  onCancel: _propTypes.default.func,
  onSubmit: _propTypes.default.func,
  values: _propTypes.default.array
};
InputModal.defaultProps = {
  header: '',
  isOpen: false,
  onClose: function onClose() {},
  onCancel: function onCancel() {},
  onSubmit: function onSubmit() {},
  values: []
};

var _default = (0, _react.memo)(InputModal);

exports.default = _default;