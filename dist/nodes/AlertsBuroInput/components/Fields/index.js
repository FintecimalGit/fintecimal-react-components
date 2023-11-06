"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _CustomField = _interopRequireDefault(require("../CustomField"));
var _Button = _interopRequireDefault(require("../../../Buttons/Button"));
var _utils = require("../../utils");
var _style = _interopRequireDefault(require("./style"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var Fields = function Fields(_ref) {
  var fieldValues = _ref.fieldValues,
    addNewRow = _ref.addNewRow,
    handleOnChangeField = _ref.handleOnChangeField,
    setFieldsEmpty = _ref.setFieldsEmpty,
    edit = _ref.edit,
    disabled = _ref.disabled;
  var classes = (0, _style.default)();
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    fields = _useState2[0],
    setFields = _useState2[1];
  var _useState3 = (0, _react.useState)(false),
    _useState4 = _slicedToArray(_useState3, 2),
    deleteInfo = _useState4[0],
    setDeleteInfo = _useState4[1];
  (0, _react.useEffect)(function () {
    var fieldsUnhide = fieldValues.filter(function (_ref2) {
      var _ref2$hide = _ref2.hide,
        hide = _ref2$hide === void 0 ? false : _ref2$hide;
      return !hide;
    });
    setFields(fieldsUnhide);
  }, [fieldValues]);
  (0, _react.useEffect)(function () {
    if (deleteInfo) {
      setFields((0, _utils.generateValueEmpty)(fields));
      setFieldsEmpty((0, _utils.generateValueEmpty)(fieldValues));
      setDeleteInfo(false);
    }
  }, [deleteInfo]);
  var handleOnChange = function handleOnChange(field, index, value) {
    handleOnChangeField(field, index, value);
  };
  var onClickAccept = function onClickAccept() {
    if (areValidFields()) {
      addNewRow(fields);
      setDeleteInfo(true);
    }
  };
  var areValidFields = function areValidFields() {
    var isValid = true;
    fields.map(function (field) {
      if (field.required && field.value === '') {
        isValid = false;
        field['error'] = true;
      }
    });
    if (!isValid) setFields(_toConsumableArray(fields));
    return isValid;
  };
  if (Object.keys(fields).length === 0) return null;
  return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, fields.map(function (field, index) {
    var id = field.id,
      name = field.name,
      label = field.label,
      type = field.type,
      options = field.options,
      format = field.format,
      value = field.value,
      _field$error = field.error,
      error = _field$error === void 0 ? false : _field$error,
      _field$errorMessage = field.errorMessage,
      errorMessage = _field$errorMessage === void 0 ? '' : _field$errorMessage;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: classes.root,
      key: id
    }, /*#__PURE__*/_react.default.createElement(_CustomField.default, {
      key: id,
      type: type,
      label: label,
      name: name,
      value: value,
      handleChange: function handleChange(value) {
        return handleOnChange(field, index, value);
      },
      error: error,
      errorMessage: errorMessage,
      required: error,
      format: format,
      options: options
    }));
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.button
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    disabled: disabled,
    text: edit ? 'Editar' : 'Agregar',
    onClick: onClickAccept
  })));
};
Fields.propTypes = {
  fields: _propTypes.default.array,
  addNewRow: _propTypes.default.func,
  edit: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
Fields.defaultProps = {
  fields: [],
  addNewRow: function addNewRow() {},
  edit: false,
  disabled: false
};
var _default = Fields;
exports.default = _default;