"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _papaparse = _interopRequireDefault(require("papaparse"));

var utils = _interopRequireWildcard(require("../utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HEADER_ERROR_MESSAGE = 'La cantidad de columnas no es la correcta ya que es diferente a la informacion con la que cuenta la tabla, prueba con las siguientes: ';
var HEADER_ERROR_MESSAGE_2 = 'Las siguientes columnas no son correctas: ';

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
  var readFile = (0, _react.useCallback)(function (event) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();

      var _refE$current$files = _toArray(refE.current.files),
          _refE$current$files$ = _refE$current$files[0],
          file = _refE$current$files$ === void 0 ? null : _refE$current$files$,
          rest = _refE$current$files.slice(1);

      if (file) {
        reader.onload = function (_event) {
          var csvData = _papaparse.default.parse(reader.result, _objectSpread({}, parserOptions, {
            error: onError,
            encoding: fileEncoding
          }));

          resolve(csvData.data);
          refE.current.value = null;
        };

        reader.readAsText(file, fileEncoding);
      }
    });
  }, []);

  var formatDataFromCsv = function formatDataFromCsv(data) {
    var isValid = true;
    var messages = [];
    var _data = [];
    var headersCSV = headers;
    var headersNames = headers.map(function (_ref2) {
      var _ref2$name = _ref2.name,
          name = _ref2$name === void 0 ? '' : _ref2$name;
      return name;
    });
    var documentHeaders = utils.getHeadersFromCSV(data);

    if (localValue.length > 1) {
      var headersAreValid = utils.includesHeaders(documentHeaders, headersNames);

      if (headersAreValid.length) {
        isValid = false;
        messages = ["".concat(HEADER_ERROR_MESSAGE_2, " ").concat(headersAreValid.join(', '))].concat(_toConsumableArray(messages));
      }

      if (documentHeaders.length !== headersNames.length) {
        isValid = false;
        messages = ["".concat(HEADER_ERROR_MESSAGE, " ").concat(headersNames.join(', '))].concat(_toConsumableArray(messages));
      }
    } else {
      headersCSV = utils.createHeadersFromCSV(documentHeaders);
    }

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
  accept: '.csv, text/csv',
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