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
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
        var csvData = _papaparse.default.parse(reader.result, _objectSpread(_objectSpread({}, parserOptions), {}, {
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
      isValid = false;
      // eslint-disable-next-line max-len
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
  var handleChangeFile = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var result, _formatDataFromCsv, isValid, data, headersCSV, messages;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
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
  onError: function onError() {},
  parserOptions: {},
  disabled: false,
  headers: [],
  localValue: []
};
var _default = CSVReader;
exports.default = _default;