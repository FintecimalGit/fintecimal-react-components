"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _utils = require("../../utils");

var _useStyles = _interopRequireDefault(require("./useStyles"));

var _CustomField = _interopRequireDefault(require("../CustomField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Fields = function Fields(_ref) {
  var fieldValues = _ref.fieldValues,
      addNewRow = _ref.addNewRow,
      handleOnChangeField = _ref.handleOnChangeField,
      setFieldsEmpty = _ref.setFieldsEmpty,
      edit = _ref.edit;
  var classes = (0, _useStyles.default)();

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

  var areValidFields = function areValidFields() {
    var isValid = true;
    fields.map(function (field) {
      if (field.required && field.value === '') {
        isValid = false;
        field.error = true;
      }
    });
    if (!isValid) setFields(_toConsumableArray(fields));
    return isValid;
  };

  var onClickAccept = function onClickAccept() {
    if (areValidFields()) {
      addNewRow(fields);
      setDeleteInfo(true);
    }
  };

  if (Object.keys(fields).length === 0) return null;
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Box, {
    className: classes.fieldsContainer
  }, fields.map(function (field, index) {
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
    return _react.default.createElement("div", {
      className: classes.root,
      key: id
    }, _react.default.createElement(_CustomField.default, {
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
  })), _react.default.createElement(_core.Box, {
    className: classes.buttonContainer
  }, _react.default.createElement(_core.Button, {
    className: classes.button,
    onClick: onClickAccept,
    variant: "outlined"
  }, edit ? 'Editar' : 'Agregar')));
};

Fields.propTypes = {
  fieldValues: _propTypes.default.arrayOf(_propTypes.default.string),
  addNewRow: _propTypes.default.func,
  edit: _propTypes.default.bool,
  handleOnChangeField: _propTypes.default.func,
  setFieldsEmpty: _propTypes.default.func
};
Fields.defaultProps = {
  addNewRow: function addNewRow() {},
  edit: false,
  fieldValues: [],
  handleOnChangeField: function handleOnChangeField() {},
  setFieldsEmpty: function setFieldsEmpty() {}
};
var _default = Fields;
exports.default = _default;