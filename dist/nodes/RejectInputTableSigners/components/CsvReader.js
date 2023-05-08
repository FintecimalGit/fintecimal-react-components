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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HEADER_ERROR_MESSAGE = 'El formato actual de columnas es diferente al que se intenga cargar, prueba con las siguientes columnas: ';
var HEADER_ERROR_MESSAGE_2 = 'Las siguientes columnas no son correctas: ';
var HEADER_ERROR_MESSAGE_3 = 'La siguientes columnas son obligatorias que existan: ';
var HEADER_INVALID = 'El documento que intenga cargar, no tiene definido en la primera fila, el nombre de las columnas.';

var CSVReader = function CSVReader(_ref) {
  var accept = _ref.accept,
      className = _ref.className,
      inputClass = _ref.inputClass,
      fileEncoding = _ref.fileEncoding,
      inputId = _ref.inputId,
      label = _ref.label,
      onError = _ref.onError,
      onFileLoaded = _ref.onFileLoaded,
      parserOptions = _ref.parserOptions,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      headers = _ref.headers,
      localValue = _ref.localValue;
  var refE = (0, _react.useRef)();

  var readExcel = function readExcel(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();

      reader.onload = function (_event) {
        var data = _event.target.result;

        var workbook = _xlsx.default.read(data, {
          type: 'binary',
          locale: 'es_ES' // Doesn't work

        });

        workbook.SheetNames.forEach(function (sheetName) {
          var XLRowObject = _xlsx.default.utils.sheet_to_json(workbook.Sheets[sheetName], {
            raw: false
          });

          var formattedData = utils.formatDateColumnsToSpanish(XLRowObject);
          resolve(formattedData);
          refE.current.value = null;
        });
      };

      reader.onerror = function (ex) {
        reject(ex);
      };

      reader.readAsBinaryString(file);
    });
  };

  var readCSV = function readCSV(file) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();

      reader.onload = function (_event) {
        var csvData = _papaparse.default.parse(reader.result, _objectSpread2({}, parserOptions, {
          error: onError,
          encoding: fileEncoding
        }));

        resolve(csvData.data);
        refE.current.value = null;
      };

      reader.readAsText(file, fileEncoding);
    });
  };

  var readFile = (0, _react.useCallback)(function (event) {
    return new Promise(function (resolve, reject) {
      var _refE$current$files = _toArray(refE.current.files),
          _refE$current$files$ = _refE$current$files[0],
          file = _refE$current$files$ === void 0 ? null : _refE$current$files$,
          rest = _refE$current$files.slice(1);

      if (file) {
        var extension = utils.getExtensionFile(file);
        if (extension.toLowerCase() === 'csv') resolve(readCSV(file));else resolve(readExcel(file));
      }
    });
  }, []);

  var validateRequiredColumns = function validateRequiredColumns(documentHeaders, headersColumns) {
    var columns = [];
    var message = [];
    var isInvalid = headersColumns.reduce(function (acc, header) {
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
      isInvalid: isInvalid,
      message: message
    };
  };

  var validateColumnsWithData = function validateColumnsWithData(documentHeaders) {
    var isInvalid = false;
    var message = [];
    if (!localValue.length) return {
      isInvalid: isInvalid,
      message: message
    };
    var headersNames = headers.map(function (_ref2) {
      var _ref2$name = _ref2.name,
          name = _ref2$name === void 0 ? '' : _ref2$name;
      return name;
    });
    var headersAreValid = utils.includesHeaders(documentHeaders, headersNames);

    if (headersAreValid.length) {
      isInvalid = true;
      message = ["".concat(HEADER_ERROR_MESSAGE_2, " ").concat(headersAreValid.join(', '))].concat(_toConsumableArray(message));
    }

    if (documentHeaders.length !== headersNames.length) {
      isInvalid = true;
      message = ["".concat(HEADER_ERROR_MESSAGE, " ").concat(headersNames.join(', '))].concat(_toConsumableArray(message));
    }

    return {
      isInvalid: isInvalid,
      message: message
    };
  };

  var validateHeaders = function validateHeaders(data) {
    if (data.length === 0) return {
      isInvalid: true,
      message: []
    };
    var headerStatus = Object.keys(data[0]).reduce(function (acc, key) {
      if (key.includes('EMPTY')) acc = true;
      return acc;
    }, false);
    return {
      isInvalid: headerStatus,
      message: headerStatus ? HEADER_INVALID : ''
    };
  };

  var getMessageErrors = function getMessageErrors() {
    var validations = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    return validations.reduce(function (acc, validation) {
      var isInvalid = validation.isInvalid,
          message = validation.message;
      if (isInvalid) acc.push(message);
      return acc;
    }, []);
  };

  var formatDataFromCsv = function formatDataFromCsv(data) {
    var isValid = true;
    var messages = [];
    var _data = [];
    var headersCSV = headers;
    var documentHeaders = utils.getHeadersFromCSV(data);
    var headersColumns = headers.map(function (_ref3) {
      var _ref3$name = _ref3.name,
          name = _ref3$name === void 0 ? '' : _ref3$name,
          _ref3$required = _ref3.required,
          required = _ref3$required === void 0 ? false : _ref3$required;
      return {
        name: name,
        required: required
      };
    });
    var statusHeaders = validateHeaders(data);
    var statusRequiredColumns = validateRequiredColumns(documentHeaders, headersColumns);
    var statusColumnWithData = validateColumnsWithData(documentHeaders);

    if (statusHeaders.isInvalid || statusRequiredColumns.isInvalid || statusColumnWithData.isInvalid) {
      isValid = false; // eslint-disable-next-line max-len

      messages = getMessageErrors([statusHeaders, statusColumnWithData, statusRequiredColumns]);
    } else headersCSV = utils.createHeadersFromCSV(documentHeaders, headersColumns);

    _data = utils.createItemsFromCSV(data, documentHeaders);
    return {
      isValid: isValid,
      data: _data,
      headersCSV: headersCSV,
      messages: messages
    };
  };

  var handleChangeFile = (0, _react.useCallback)(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
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
              isValid: isValid,
              data: data,
              headersCSV: headersCSV,
              messages: messages
            });

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), [readFile, onFileLoaded]);
  return _react.default.createElement("div", {
    className: className
  }, _react.default.createElement("div", null, _react.default.createElement("label", {
    htmlFor: inputId
  }, label), _react.default.createElement("input", {
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
  onError: function onError() {},
  parserOptions: {},
  disabled: false,
  headers: [],
  localValue: []
};
var _default = CSVReader;
exports.default = _default;