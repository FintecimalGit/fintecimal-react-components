"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _lodash = _interopRequireDefault(require("lodash"));
var _defaults = require("./defaults");
var _InputStrings = require("../../InputStrings");
var utils = _interopRequireWildcard(require("./utils"));
var _style = _interopRequireDefault(require("./style"));
var _AlertsTable = _interopRequireDefault(require("../../AlertsTable"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var AlertsBuroInput = function AlertsBuroInput(_ref) {
  var value = _ref.value,
    disabled = _ref.disabled,
    headers = _ref.headers,
    handleHeadersAndValues = _ref.handleHeadersAndValues,
    error = _ref.error,
    required = _ref.required,
    _ref$maxHeaders = _ref.maxHeaders,
    maxHeaders = _ref$maxHeaders === void 0 ? 4 : _ref$maxHeaders;
  var classes = (0, _style.default)();
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    fields = _useState2[0],
    setFields = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    localHeaders = _useState4[0],
    setLocalHeaders = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    localValue = _useState6[0],
    setLocalValue = _useState6[1];
  var _useState7 = (0, _react.useState)([]),
    _useState8 = _slicedToArray(_useState7, 2),
    errorMessages = _useState8[0],
    setErrorMessages = _useState8[1];
  var HEADERS = (0, _react.useMemo)(function () {
    return localHeaders.map(function (option) {
      return {
        key: option.name,
        value: option.label
      };
    });
  }, [localHeaders]);
  var VALUES = (0, _react.useMemo)(function () {
    if (!localValue.length) return [];
    return localValue.reduce(function (acc, element) {
      var row = element.reduce(function (accRow, column) {
        var name = column.name,
          _value = column.value;
        accRow = _objectSpread(_objectSpread({}, accRow), {}, _defineProperty({}, name, _value));
        return accRow;
      }, {});
      if (utils.ObjectNotEmpty(row)) acc.push(row);
      return acc;
    }, []);
  }, [localValue]);
  var deleteRow = function deleteRow(item, index) {
    var newInformation = _toConsumableArray(localValue);
    newInformation.splice(index, 1);
    handleHeadersAndValues({
      headers: headers,
      values: newInformation
    });
  };
  var editRow = function editRow(_value, index) {
    var newFields = utils.generateFieldsWithValue(fields, _value);
    setFields(newFields);
    setEdit(true);
    setEditPosition(index);
  };
  var handleCleanTable = function handleCleanTable() {
    handleHeadersAndValues({
      headers: headers,
      values: []
    });
  };
  var closeMessageError = function closeMessageError() {
    setTimeout(function () {
      setErrorMessages([]);
    }, 10000);
  };
  (0, _react.useEffect)(function () {
    if (headers.length) setLocalHeaders(headers);
    if (value.length) setLocalValue(value);else if (localValue.length) setLocalValue([]);
  }, [value, headers]);
  (0, _react.useEffect)(function () {
    setFields(utils.generateValueEmpty(localHeaders));
  }, [localHeaders]);
  (0, _react.useEffect)(function () {
    if (errorMessages.length) closeMessageError();
  }, [errorMessages]);
  (0, _react.useEffect)(function () {
    if (error && required) {
      setErrorMessages([_InputStrings.table.errorMessages.empty]);
    }
  }, [error, required]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.tableContent
  }, /*#__PURE__*/_react.default.createElement(_AlertsTable.default, {
    headers: HEADERS,
    items: VALUES,
    deleteRow: true,
    onDeleteRow: deleteRow,
    edit: true,
    onEdit: editRow,
    cleanTable: true,
    handleCleanTable: handleCleanTable,
    maxHeaders: maxHeaders,
    disabled: true
  }))));
};
AlertsBuroInput.propTypes = {
  value: _propTypes.default.array,
  headers: _propTypes.default.array,
  handleHeadersAndValues: _propTypes.default.func,
  required: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
AlertsBuroInput.defaultProps = {
  value: _defaults.defaultDataSigner,
  headers: _defaults.defaultHeaderSigner,
  required: false,
  error: false,
  handleHeadersAndValues: function handleHeadersAndValues() {},
  disabled: false
};
var _default = AlertsBuroInput;
exports.default = _default;