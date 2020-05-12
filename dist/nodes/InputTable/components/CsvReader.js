"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _papaparse = _interopRequireDefault(require("papaparse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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
  var handleChangeFile = (0, _react.useCallback)(function (event) {
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
        var csvData = _papaparse.default.parse(reader.result, _objectSpread({}, parserOptions, {
          error: onError,
          encoding: fileEncoding
        }));

        onFileLoaded(csvData.data, fileInfo);
        refE.current.value = null;
      };

      reader.readAsText(file, fileEncoding);
    }
  }, []);
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