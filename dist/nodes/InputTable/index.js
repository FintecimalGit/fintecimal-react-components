"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _lodash = _interopRequireDefault(require("lodash"));

var _clsx = _interopRequireDefault(require("clsx"));

var _Table = _interopRequireDefault(require("../../Table"));

var _CsvReader = _interopRequireDefault(require("./components/CsvReader"));

var _Fields = _interopRequireDefault(require("./components/Fields"));

var _defaults = require("./defaults");

var _InputStrings = require("../../InputStrings");

var utils = _interopRequireWildcard(require("./utils"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InputTable = function InputTable(_ref) {
  var value = _ref.value,
      headers = _ref.headers,
      handleHeadersAndValues = _ref.handleHeadersAndValues,
      error = _ref.error,
      required = _ref.required;
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

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      edit = _useState10[0],
      setEdit = _useState10[1];

  var _useState11 = (0, _react.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      editPosition = _useState12[0],
      setEditPosition = _useState12[1];

  var HEADERS = (0, _react.useMemo)(function () {
    return localHeaders.map(function (option) {
      return {
        key: option.name,
        value: option.label
      };
    });
  }, [localHeaders]);
  var csvOptions = (0, _react.useMemo)(function () {
    return {
      header: true,
      dynamicTyping: false,
      skipEmptyLines: true,
      transformHeader: function transformHeader(header) {
        return header.replace(/\W/g, '_');
      }
    };
  }, []);
  var VALUES = (0, _react.useMemo)(function () {
    if (!localValue.length) return [];
    return localValue.reduce(function (acc, element) {
      var row = element.reduce(function (accRow, column) {
        var name = column.name,
            _value = column.value;
        accRow = _objectSpread(_objectSpread({}, accRow), {}, {
          [name]: _value
        });
        return accRow;
      }, {});
      if (utils.ObjectNotEmpty(row)) acc.push(row);
      return acc;
    }, []);
  }, [localValue]);
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
    if (edit) {
      var newInfo = _lodash.default.cloneDeep(localValue);

      newInfo[editPosition] = generateData(dataField);
      handleHeadersAndValues({
        headers,
        values: newInfo
      });
      setEdit(false);
      setEditPosition(0);
    } else {
      var newInformation = [].concat(_toConsumableArray(localValue), [generateData(dataField)]);
      handleHeadersAndValues({
        headers,
        values: newInformation
      });
    }
  };

  var deleteRow = function deleteRow(item, index) {
    var newInformation = _toConsumableArray(localValue);

    newInformation.splice(index, 1);
    handleHeadersAndValues({
      headers,
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
      headers,
      values: []
    });
  };

  var handleOnDropFile = function handleOnDropFile(result) {
    var isValid = result.isValid,
        data = result.data,
        headersCSV = result.headersCSV,
        messages = result.messages;

    if (isValid) {
      handleHeadersAndValues({
        headers: headersCSV,
        values: [].concat(_toConsumableArray(localValue), _toConsumableArray(data))
      });
      setErrorMessages([]);
    } else {
      setErrorMessages(messages);
    }
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
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classes.content
  }, /*#__PURE__*/_react.default.createElement(_Fields.default, {
    fieldValues: fields,
    addNewRow: addNewRow,
    edit: edit
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.csvActions
  }, /*#__PURE__*/_react.default.createElement(_CsvReader.default, {
    className: classes.input_loader,
    onFileLoaded: handleOnDropFile,
    parserOptions: csvOptions,
    headers: headers,
    localValue: localValue
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: (0, _clsx.default)(classes.errorContainer, {
      [classes.errorContainerOn]: Boolean(errorMessages.length)
    }, {
      [classes.errorContainerOff]: !errorMessages.length
    })
  }, Boolean(errorMessages.length) && /*#__PURE__*/_react.default.createElement("div", null, errorMessages.map(function (message, index) {
    return /*#__PURE__*/_react.default.createElement("span", {
      key: index,
      className: classes.errorMessage
    }, "".concat(index + 1, " - ").concat(message));
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.tableContent
  }, /*#__PURE__*/_react.default.createElement(_Table.default, {
    headers: HEADERS,
    items: VALUES,
    deleteRow: true,
    onDeleteRow: deleteRow,
    edit: true,
    onEdit: editRow,
    cleanTable: true,
    handleCleanTable: handleCleanTable
  })));
};

InputTable.propTypes = {
  value: _propTypes.default.array,
  headers: _propTypes.default.array,
  handleHeadersAndValues: _propTypes.default.func,
  required: _propTypes.default.bool,
  error: _propTypes.default.bool
};
InputTable.defaultProps = {
  value: _defaults.defaultData,
  headers: _defaults.defaultHeader,
  required: false,
  error: false,
  handleHeadersAndValues: function handleHeadersAndValues() {}
};
var _default = InputTable;
exports.default = _default;