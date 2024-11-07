"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

var InputMatriz = function InputMatriz(_ref) {
  var value = _ref.value,
      handleHeadersAndValues = _ref.handleHeadersAndValues,
      headers = _ref.headers,
      flows = _ref.flows,
      error = _ref.error,
      required = _ref.required,
      _ref$maxHeaders = _ref.maxHeaders,
      maxHeaders = _ref$maxHeaders === void 0 ? 5 : _ref$maxHeaders;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      localValue = _useState4[0],
      setLocalValue = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      localHeaders = _useState6[0],
      setLocalHeaders = _useState6[1];

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
        accRow = _objectSpread({}, accRow, _defineProperty({}, name, _value));
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

  var valueFormated = function valueFormated(value) {
    var productosAppliedView = value.productosAppliedView;
    if (!productosAppliedView) return _defaults.defaultNoBestOption;
    var hasBestOption = productosAppliedView.every(function (_ref2) {
      var bestOption = _ref2.bestOption;
      return bestOption;
    });
    if (!hasBestOption) return _defaults.defaultNoBestOption;
    var newValues = productosAppliedView.map(function (_ref3) {
      var flow = _ref3.flow,
          bestOption = _ref3.bestOption;
      var name = bestOption.name,
          cat = bestOption.cat,
          tasa = bestOption.tasa,
          mensualidad = bestOption.mensualidad;
      return [{
        name: 'products',
        value: name
      }, {
        name: 'cat',
        value: "".concat(cat.toString(), "%")
      }, {
        name: 'flow',
        value: (flows.find(function (_ref4) {
          var _id = _ref4._id;
          return _id === flow;
        }) || {}).name
      }, {
        name: 'tasa',
        value: "".concat(tasa.toString(), "%")
      }, {
        name: 'mensualidad',
        value: "".concat(mensualidad.toString())
      }];
    });
    return newValues;
  };

  (0, _react.useEffect)(function () {
    if (headers.length) setLocalHeaders(headers);

    if (Object.keys(value).length) {
      var newValue = valueFormated(value);
      setLocalValue(newValue);
    } else if (localValue.length) {
      setLocalValue([]);
    }
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
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement("div", {
    className: classes.tableContent
  }, _react.default.createElement(_AlertsTable.default, {
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

InputMatriz.propTypes = {
  value: _propTypes.default.array,
  flows: _propTypes.default.array,
  headers: _propTypes.default.array,
  handleHeadersAndValues: _propTypes.default.func,
  required: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
InputMatriz.defaultProps = {
  value: _defaults.defaultData,
  flows: _defaults.defaultFlows,
  headers: _defaults.defaultHeader,
  required: false,
  error: false,
  handleHeadersAndValues: function handleHeadersAndValues() {},
  disabled: false
};
var _default = InputMatriz;
exports.default = _default;