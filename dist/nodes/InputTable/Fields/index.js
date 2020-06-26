"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    newFields[index] = _objectSpread({}, field, {
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
  return _react.default.createElement(_react.Fragment, null, fields.map(function (field, index) {
    var id = field.id,
        name = field.name,
        label = field.label,
        type = field.type,
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
      required: error
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