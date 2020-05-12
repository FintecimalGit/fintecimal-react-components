"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Fields = _interopRequireDefault(require("./Fields"));

var _Table = _interopRequireDefault(require("../../Table"));

var _CsvReader = _interopRequireDefault(require("./components/CsvReader"));

var _utils = require("./utils");

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

var InputTable = function InputTable(_ref) {
  var value = _ref.value,
      headers = _ref.headers,
      handleChange = _ref.handleChange;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      localHeaders = _useState2[0],
      setLocalHeaders = _useState2[1];

  var HEADERS = (0, _react.useMemo)(function () {
    return localHeaders.map(function (opt) {
      return {
        key: opt.name,
        value: opt.label
      };
    });
  }, [localHeaders]);
  var FIELDS = (0, _react.useMemo)(function () {
    return (0, _utils.generateValueEmpty)(localHeaders);
  }, [localHeaders]);
  var csvOptions = (0, _react.useMemo)(function () {
    return {
      header: true,
      dynamicTyping: false,
      skipEmptyLines: true,
      transformHeader: function transformHeader(header) {
        return header.replace(/\W/g, "_");
      }
    };
  }, []);
  var VALUES = (0, _react.useMemo)(function () {
    var newValues = [];

    if (value.length) {
      value.forEach(function (element) {
        var toObject = {};
        element.forEach(function (_ref2) {
          var name = _ref2.name,
              value = _ref2.value;
          toObject = _objectSpread({}, toObject, _defineProperty({}, name, value));
        });
        if (Object.keys(toObject).length) newValues.push(toObject);
      });
      return newValues;
    }

    return [];
  }, [value]);
  var generateData = (0, _react.useCallback)(function (data) {
    return data.map(function (field) {
      return {
        name: field.name,
        label: field.label,
        value: field.value
      };
    });
  }, []);

  var addNewRow = function addNewRow(dataField) {
    var newInformation = [].concat(_toConsumableArray(value), [generateData(dataField)]);
    handleChange(newInformation);
  };

  var DeleteRow = (0, _react.useCallback)(function (item, index) {
    var newInformation = _toConsumableArray(value);

    newInformation.splice(index, 1);
    handleChange(newInformation);
  }, [value]);
  var formatDataFromCsv = (0, _react.useCallback)(function (data) {
    var isValid = true;
    var _data = [];
    var headersNames = headers.map(function (field) {
      return field.name;
    });
    data.forEach(function (row) {
      var headersRow = Object.keys(row);
      if (headersRow.length !== headersNames.length) isValid = false;
      _data = [].concat(_toConsumableArray(_data), [headersNames.map(function (key) {
        if (!row[key]) isValid = false;
        return {
          name: key,
          value: row[key] || ''
        };
      })]);
    });
    return {
      isValid: isValid,
      data: _data
    };
  }, []);
  var handleOnDropFile = (0, _react.useCallback)(function (_data, fileInfo) {
    var _formatDataFromCsv = formatDataFromCsv(_data),
        isValid = _formatDataFromCsv.isValid,
        data = _formatDataFromCsv.data;

    if (isValid) {
      handleChange([].concat(_toConsumableArray(value), _toConsumableArray(data)));
    }
  }, [value, handleChange]);
  (0, _react.useEffect)(function () {
    if (headers.length) setLocalHeaders(headers);
  }, [headers]);
  return _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_Fields.default, {
    fieldValues: FIELDS,
    addNewRow: addNewRow
  }), _react.default.createElement(_CsvReader.default, {
    className: classes.input_loader,
    onFileLoaded: handleOnDropFile,
    parserOptions: csvOptions
  }), _react.default.createElement("div", {
    className: classes.tableContent
  }, _react.default.createElement(_Table.default, {
    headers: HEADERS,
    items: VALUES,
    deleteRow: true,
    onDeleteRow: DeleteRow
  })));
};

InputTable.propTypes = {
  value: _propTypes.default.array,
  headers: _propTypes.default.array,
  handleChange: _propTypes.default.func
};
InputTable.defaultProps = {
  value: [],
  // defaultData,
  headers: [],
  // defaultHeader,
  handleChange: function handleChange() {}
};
var _default = InputTable;
exports.default = _default;