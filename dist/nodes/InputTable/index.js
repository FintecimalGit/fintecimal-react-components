"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx3 = _interopRequireDefault(require("clsx"));

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

var HEADER_ERROR_MESSAGE = 'La cantidad de columnas no es la correcta, prueba con las siguientes: ';
var HEADER_ERROR_MESSAGE_2 = 'Las siguientes columnas no son correctas: ';

var InputTable = function InputTable(_ref) {
  var value = _ref.value,
      headers = _ref.headers,
      handleChange = _ref.handleChange;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      localHeaders = _useState2[0],
      setLocalHeaders = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      localValue = _useState4[0],
      setLocalValue = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      errorMessages = _useState6[0],
      setErrorMessages = _useState6[1];

  var HEADERS = (0, _react.useMemo)(function () {
    return localHeaders.map(function (option) {
      return {
        key: option.name,
        value: option.label
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

    if (localValue.length) {
      localValue.forEach(function (element) {
        var toObject = {};
        element.forEach(function (_ref2) {
          var name = _ref2.name,
              _value = _ref2.value;
          toObject = _objectSpread({}, toObject, _defineProperty({}, name, _value));
        });
        if (Object.keys(toObject).length) newValues.push(toObject);
      });
      return newValues;
    } else return newValues;
  }, [localValue, handleOnDropFile]);
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
    var newInformation = [].concat(_toConsumableArray(localValue), [generateData(dataField)]);
    handleChange(newInformation);
  };

  var DeleteRow = (0, _react.useCallback)(function (item, index) {
    var newInformation = _toConsumableArray(localValue);

    newInformation.splice(index, 1);
    handleChange(newInformation);
  }, [localValue, handleChange]);

  var includesHeaders = function includesHeaders(arr1, arr2) {
    return arr1.map(function (item) {
      return arr2.includes(item) ? null : item;
    }).filter(function (item) {
      return item;
    });
  };

  var formatDataFromCsv = (0, _react.useCallback)(function (data) {
    var isValid = true;
    var messages = [];
    var _data = [];
    var headersRow = [];
    var headersNames = headers.map(function (field) {
      return field.name;
    });
    data.forEach(function (row, index) {
      headersRow = Object.keys(row);
      _data = [].concat(_toConsumableArray(_data), [headersNames.map(function (key, _index) {
        if (row[key] === '') {
          isValid = false;
          messages = [].concat(_toConsumableArray(messages), ["La fila ".concat(index + 2, " de la columna \"").concat(key, "\" esta vac\xEDa")]);
        }

        return {
          name: key,
          value: row[key] || ''
        };
      })]);
    });
    var headersAreValid = includesHeaders(headersRow, headersNames);

    if (headersAreValid.length) {
      isValid = false;
      messages = ["".concat(HEADER_ERROR_MESSAGE_2, " ").concat(headersAreValid.join(', '))].concat(_toConsumableArray(messages));
    }

    if (headersRow.length !== headersNames.length) {
      isValid = false;
      messages = ["".concat(HEADER_ERROR_MESSAGE, " ").concat(headersNames.join(', '))].concat(_toConsumableArray(messages));
    }

    console.log(messages);
    return {
      isValid: isValid,
      data: _data,
      messages: messages
    };
  }, []);
  var handleOnDropFile = (0, _react.useCallback)(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        _data = _ref4[0],
        fileInfo = _ref4[1];

    var _formatDataFromCsv = formatDataFromCsv(_data),
        isValid = _formatDataFromCsv.isValid,
        data = _formatDataFromCsv.data,
        messages = _formatDataFromCsv.messages;

    if (isValid) {
      handleChange([].concat(_toConsumableArray(localValue), _toConsumableArray(data)));
      setErrorMessages([]);
    } else {
      setErrorMessages(messages);
    }
  }, [localValue, handleChange]);
  (0, _react.useEffect)(function () {
    if (headers.length) setLocalHeaders(headers);
    if (value.length) setLocalValue(value);else if (localValue.length) setLocalValue([]);
  }, [value, headers]);
  return _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_Fields.default, {
    fieldValues: FIELDS,
    addNewRow: addNewRow
  }), _react.default.createElement("div", {
    className: classes.csvActions
  }, _react.default.createElement(_CsvReader.default, {
    className: classes.input_loader,
    onFileLoaded: handleOnDropFile,
    parserOptions: csvOptions
  }), _react.default.createElement("div", {
    className: (0, _clsx3.default)(classes.errorContainer, _defineProperty({}, classes.errorContainerOn, Boolean(errorMessages.length)), _defineProperty({}, classes.errorContainerOff, !Boolean(errorMessages.length)))
  }, Boolean(errorMessages.length) && _react.default.createElement("div", null, errorMessages.map(function (message, index) {
    return _react.default.createElement("span", {
      key: index,
      className: classes.errorMessage
    }, "".concat(index + 1, " - ").concat(message));
  })))), _react.default.createElement("div", {
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
  value: _utils.defaultData,
  headers: _utils.defaultHeader,
  handleChange: function handleChange() {}
};
var _default = InputTable;
exports.default = _default;