"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _papaparse = _interopRequireDefault(require("papaparse"));

var _xlsx = _interopRequireDefault(require("xlsx"));

var utils = _interopRequireWildcard(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HEADER_ERROR_MESSAGE = 'La cantidad de columnas no es la correcta ya que es diferente a la informacion con la que cuenta la tabla, prueba con las siguientes: ';
var HEADER_ERROR_MESSAGE_2 = 'Las siguientes columnas no son correctas: ';
var HEADER_ERROR_MESSAGE_3 = 'La siguientes columnas son requeridas que existan y su nombre sea: ';

var CSVReader = ({
  accept,
  className,
  inputClass,
  fileEncoding,
  inputId,
  label,
  onError,
  onFileLoaded,
  parserOptions,
  disabled = false,
  headers,
  localValue
}) => {
  var refE = (0, _react.useRef)();

  var readExcel = file => new Promise((resolve, reject) => {
    var reader = new FileReader();

    reader.onload = _event => {
      var data = _event.target.result;

      var workbook = _xlsx.default.read(data, {
        type: 'binary'
      });

      workbook.SheetNames.forEach(sheetName => {
        var XL_row_object = _xlsx.default.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);

        resolve(XL_row_object);
        refE.current.value = null;
      });
    };

    reader.onerror = ex => {
      reject(ex);
    };

    reader.readAsBinaryString(file);
  });

  var readCSV = file => new Promise((resolve, reject) => {
    var reader = new FileReader();

    reader.onload = _event => {
      var csvData = _papaparse.default.parse(reader.result, _objectSpread(_objectSpread({}, parserOptions), {}, {
        error: onError,
        encoding: fileEncoding
      }));

      resolve(csvData.data);
      refE.current.value = null;
    };

    reader.readAsText(file, fileEncoding);
  });

  var readFile = (0, _react.useCallback)(event => new Promise((resolve, reject) => {
    var _refE$current$files = _toArray(refE.current.files),
        _refE$current$files$ = _refE$current$files[0],
        file = _refE$current$files$ === void 0 ? null : _refE$current$files$,
        rest = _refE$current$files.slice(1);

    if (file) {
      var extension = utils.getExtensionFile(file);

      if (extension.toLowerCase() === 'csv') {
        resolve(readCSV(file));
      } else {
        resolve(readExcel(file));
      }
    }
  }), []);

  var validateRequiredColumns = (documentHeaders, headersColumns) => {
    var columns = [];
    var message = [];
    var isInvalid = headersColumns.reduce((acc, header) => {
      var name = header.name,
          required = header.required;

      if (required && !documentHeaders.includes(name)) {
        acc = true;
        columns.push(name);
      }

      return acc;
    }, false);

    if (isInvalid) {
      message.push("".concat(HEADER_ERROR_MESSAGE_3, " ").concat(columns.join(', ')));
    }

    return {
      isInvalid,
      message
    };
  };

  var validateColumnsWithData = documentHeaders => {
    var isInvalid = false;
    var messages = [];
    if (!localValue.length) return {
      isInvalid,
      messages
    };
    var headersNames = headers.map(({
      name = ''
    }) => name);
    var headersAreValid = utils.includesHeaders(documentHeaders, headersNames);

    if (headersAreValid.length) {
      isInvalid = true;
      messages = ["".concat(HEADER_ERROR_MESSAGE_2, " ").concat(headersAreValid.join(', ')), ...messages];
    }

    if (documentHeaders.length !== headersNames.length) {
      isInvalid = true;
      messages = ["".concat(HEADER_ERROR_MESSAGE, " ").concat(headersNames.join(', ')), ...messages];
    }

    return {
      isInvalid,
      messages
    };
  };

  var formatDataFromCsv = data => {
    var isValid = true;
    var messages = [];
    var _data = [];
    var headersCSV = headers;
    var documentHeaders = utils.getHeadersFromCSV(data);
    var headersColumns = headers.map(({
      name = '',
      required = false
    }) => ({
      name,
      required
    }));
    var statusRequiredColumns = validateRequiredColumns(documentHeaders, headersColumns);
    var statusColumnWithData = validateColumnsWithData(documentHeaders);

    if (statusRequiredColumns.isInvalid || statusColumnWithData.isInvalid) {
      isValid = false;
      messages = statusRequiredColumns.isInvalid ? statusRequiredColumns.message : statusColumnWithData.messages;
    } else headersCSV = utils.createHeadersFromCSV(documentHeaders, headersColumns);

    _data = utils.createItemsFromCSV(data, documentHeaders);
    return {
      isValid,
      data: _data,
      headersCSV,
      messages
    };
  };

  var handleChangeFile = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var result, _formatDataFromCsv, isValid, data, headersCSV, messages;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readFile();

          case 2:
            result = _context.sent;
            _formatDataFromCsv = formatDataFromCsv(result), isValid = _formatDataFromCsv.isValid, data = _formatDataFromCsv.data, headersCSV = _formatDataFromCsv.headersCSV, messages = _formatDataFromCsv.messages;
            onFileLoaded({
              isValid,
              data,
              headersCSV,
              messages
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [readFile, onFileLoaded]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: className
  }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
    htmlFor: inputId
  }, label), /*#__PURE__*/_react.default.createElement("input", {
    ref: refE,
    className: inputClass,
    type: "file",
    id: inputId,
    accept: accept,
    onChange: handleChangeFile,
    disabled: disabled
  })));
};

CSVReader.propTypes = {
  accept: _propTypes.default.string,
  className: _propTypes.default.string,
  inputClass: _propTypes.default.string,
  fileEncoding: _propTypes.default.string,
  inputId: _propTypes.default.string,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  onError: _propTypes.default.func,
  onFileLoaded: _propTypes.default.func.isRequired,
  parserOptions: _propTypes.default.object,
  disabled: _propTypes.default.bool,
  headers: _propTypes.default.array,
  localValue: _propTypes.default.array
};
CSVReader.defaultProps = {
  accept: '.csv, text/csv, .xlsx',
  className: '',
  inputClass: '',
  fileEncoding: 'UTF-8',
  inputId: 'csv_input',
  label: 'Cargar archivo',
  onError: () => {},
  parserOptions: {},
  disabled: false,
  headers: [],
  localValue: []
};
var _default = CSVReader;
exports.default = _default;