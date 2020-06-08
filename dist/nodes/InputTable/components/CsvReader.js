"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _papaparse = _interopRequireDefault(require("papaparse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      disabled = _ref$disabled === void 0 ? false : _ref$disabled;
  var refE = (0, _react.useRef)();
  var readFile = (0, _react.useCallback)(function (event) {
    return new Promise(function (resolve, reject) {
      var reader = new FileReader();

      var _refE$current$files = _toArray(refE.current.files),
          _refE$current$files$ = _refE$current$files[0],
          file = _refE$current$files$ === void 0 ? null : _refE$current$files$,
          rest = _refE$current$files.slice(1);

      if (file) {
        var fileInfo = {
          name: file.name,
          size: file.size,
          type: file.type
        };

        reader.onload = function (_event) {
          var csvData = _papaparse.default.parse(reader.result, _objectSpread2({}, parserOptions, {
            error: onError,
            encoding: fileEncoding
          }));

          resolve([csvData.data, fileInfo]);
          refE.current.value = null;
        };

        reader.readAsText(file, fileEncoding);
      }
    });
  }, []);
  var handleChangeFile = (0, _react.useCallback)(
  /*#__PURE__*/
  _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee() {
    var result;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return readFile();

          case 2:
            result = _context.sent;
            onFileLoaded(result);

          case 4:
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
  disabled: _propTypes.default.bool
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
  disabled: false
};
var _default = CSVReader;
exports.default = _default;