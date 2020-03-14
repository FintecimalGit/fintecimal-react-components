"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CustomField = _interopRequireDefault(require("./CustomField"));

var _Button = _interopRequireDefault(require("../../Buttons/Button"));

var _utils = require("../utils");

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Fields = function Fields(_ref) {
  var fieldValues = _ref.fieldValues,
      addNewRow = _ref.addNewRow;
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
    setFields(fieldValues);
  }, [fieldValues]);
  (0, _react.useEffect)(function () {
    if (deleteInfo) {
      setFields((0, _utils.generateValueEmpty)(fields));
      setDeleteInfo(false);
    }
  }, [deleteInfo]);

  var handleOnChange = function handleOnChange(field, index, value) {
    var newFields = fields;
    newFields[index] = _objectSpread2({}, field, {
      value: value
    });
    setFields(newFields);
  };

  var onClickAccept = function onClickAccept() {
    if (areValidFields()) {
      addNewRow(fields);
      setDeleteInfo(true);
    }
  };

  var areValidFields = function areValidFields() {
    var isValid = !Boolean(fields.some(field.required && field.value === ''));
    return isValid;
  };

  if (Object.keys(fields).length === 0) return null;
  return _react.default.createElement(_react.Fragment, null, fields.map(function (field, index) {
    var id = field.id,
        name = field.name,
        label = field.label,
        type = field.type,
        value = field.value,
        _field$required = field.required,
        required = _field$required === void 0 ? false : _field$required;
    return _react.default.createElement("div", {
      className: classes.root,
      key: id
    }, _react.default.createElement(_CustomField.default, {
      key: id,
      type: type,
      label: label,
      name: name,
      value: value,
      required: required,
      handleChange: function handleChange(value) {
        return handleOnChange(field, index, value);
      }
    }));
  }), _react.default.createElement("div", {
    className: classes.button
  }, _react.default.createElement(_Button.default, {
    text: "Agregar",
    onClick: onClickAccept
  })));
};

Fields.propTypes = {
  fields: _propTypes.default.array,
  addNewRow: _propTypes.default.func
};
Fields.defaultProps = {
  fields: [],
  addNewRow: function addNewRow() {}
};
var _default = Fields;
exports.default = _default;