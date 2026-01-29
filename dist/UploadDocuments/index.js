"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));
var _arrayMove = require("array-move");
var _DropZone = _interopRequireDefault(require("../DropZone"));
var _FilePreview = _interopRequireDefault(require("../FilePreview"));
var _FileFinder = _interopRequireDefault(require("../FileFinder"));
var _DeleteDialog = _interopRequireDefault(require("./DeleteDialog"));
var _IneEditor = _interopRequireDefault(require("../IneEditor"));
var _style = _interopRequireDefault(require("./style"));
var _fetchWithRetry = require("./utils/fetchWithRetry");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw new Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator.return && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw new Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, catch: function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var _require = require('uuid'),
  uuidv4 = _require.v4;
var REVERSE = 'Reverse';
var FRONT = "Front";
var REVERSA = 'Reverso';
var FRONTAL = "Frontal";
var UploadDocuments = function UploadDocuments(_ref) {
  var title = _ref.title,
    multiple = _ref.multiple,
    accept = _ref.accept,
    onDrop = _ref.onDrop,
    onDelete = _ref.onDelete,
    onDeleteAll = _ref.onDeleteAll,
    onDownloadFile = _ref.onDownloadFile,
    onMove = _ref.onMove,
    useDeleteDialog = _ref.useDeleteDialog,
    placeholder = _ref.placeholder,
    url = _ref.url,
    disabled = _ref.disabled,
    required = _ref.required,
    useEditorIne = _ref.useEditorIne,
    fileConvertion = _ref.fileConvertion,
    verify = _ref.verify;
  var classes = (0, _style.default)();
  var _useState = (0, _react.useState)(null),
    _useState2 = _slicedToArray(_useState, 2),
    file = _useState2[0],
    setFile = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    files = _useState4[0],
    setFiles = _useState4[1];
  var _useState5 = (0, _react.useState)(0),
    _useState6 = _slicedToArray(_useState5, 2),
    currentFile = _useState6[0],
    setCurrentFile = _useState6[1];
  var _useState7 = (0, _react.useState)(''),
    _useState8 = _slicedToArray(_useState7, 2),
    search = _useState8[0],
    setSearch = _useState8[1];
  var _useState9 = (0, _react.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    showModal = _useState10[0],
    setShowModal = _useState10[1];
  var _useState11 = (0, _react.useState)('1'),
    _useState12 = _slicedToArray(_useState11, 2),
    flipId = _useState12[0],
    setFlipId = _useState12[1];
  var _useState13 = (0, _react.useState)([]),
    _useState14 = _slicedToArray(_useState13, 2),
    filesOrder = _useState14[0],
    setFilesOrder = _useState14[1];
  var _useState15 = (0, _react.useState)(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isLoadingDocuments = _useState16[0],
    setIsLoadingDocuments = _useState16[1];
  var _useState17 = (0, _react.useState)({}),
    _useState18 = _slicedToArray(_useState17, 2),
    loadingStates = _useState18[0],
    setLoadingStates = _useState18[1];
  var _useState19 = (0, _react.useState)([]),
    _useState20 = _slicedToArray(_useState19, 2),
    failedUrls = _useState20[0],
    setFailedUrls = _useState20[1];
  var userSelectedFileRef = (0, _react.useRef)(null);
  var lastUserSelectionRef = (0, _react.useRef)(null);
  var titleRef = (0, _react.useRef)(null);
  var filteredFiles = (0, _react.useMemo)(function () {
    var searchLower = search.toLowerCase();
    return files.map(function (file) {
      var fileNameLower = file ? file.name.toLowerCase() : '';
      if (fileNameLower.includes(searchLower) || searchLower === '') return file;
      return null;
    }).filter(function (file) {
      return file !== null && file !== '';
    });
  }, [files, search]);

  /**
   * @returns {Array}
   */
  var deleteFile = function deleteFile(_files) {
    var remainPostion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var newFiles = _toConsumableArray(_files);
    var index = newFiles.findIndex(function (_file) {
      return _file === file;
    });
    if (index !== -1 && remainPostion) newFiles[index] = '';else if (index !== -1) newFiles.splice(index, 1);
    return {
      newFiles: newFiles,
      index: index
    };
  };

  /**
   *
   * @param {Array} acceptedFiles 
   */
  var handleOnDrop = function handleOnDrop(acceptedFiles, rejectedFiles) {
    setFiles(acceptedFiles);
    setSearch('');
    onDrop(acceptedFiles, rejectedFiles);
  };
  var handleOnAdd = function handleOnAdd(acceptedFiles, rejectedFiles) {
    //  setFiles([...acceptedFiles, ...files]);
    setFiles([].concat(_toConsumableArray(files), _toConsumableArray(acceptedFiles)));
    setSearch('');
    onDrop(acceptedFiles, rejectedFiles);
  };
  var handleOnDropByIndex = function handleOnDropByIndex(acceptedFiles, rejectedFiles, index) {
    var newFilesOrder = _toConsumableArray(filesOrder);
    if (acceptedFiles.length) newFilesOrder[index] = acceptedFiles[0];
    var prefix = index ? REVERSE : FRONT;
    setFiles([].concat(_toConsumableArray(acceptedFiles), _toConsumableArray(files)));
    setFilesOrder(newFilesOrder);
    onDrop(acceptedFiles, rejectedFiles, prefix);
  };
  var handleOnDelete = function handleOnDelete() {
    if (useEditorIne) {
      var _deleteFile = deleteFile(filesOrder, true),
        newFilesOrder = _deleteFile.newFiles;
      setFilesOrder(newFilesOrder);
    }
    var _deleteFile2 = deleteFile(files),
      newFiles = _deleteFile2.newFiles,
      index = _deleteFile2.index;
    onDelete(newFiles, file, index);
    setFiles(newFiles);
    setShowModal(false);
  };
  var moveCard = function moveCard(oldIndex, newIndex) {
    setFlipId(function (oldFlip) {
      return uuidv4();
    });
    setFiles(function (oldFiles) {
      return (0, _arrayMove.arrayMoveImmutable)(oldFiles, oldIndex, newIndex);
    });
    onMove(oldIndex, newIndex);
  };
  var handleOnDeleteAll = function handleOnDeleteAll() {
    onDeleteAll();
    setFilesOrder(['', '']);
    setFiles([]);
    setShowModal(false);
  };
  var getFileKey = function getFileKey(f) {
    if (!f) return null;
    if (f instanceof File) {
      return "file_".concat(f.name, "_").concat(f.size, "_").concat(f.lastModified);
    }
    if (f.url) {
      return "url_".concat(f.url);
    }
    if (f.index !== undefined) {
      return "index_".concat(f.index);
    }
    return null;
  };
  var handleOnClick = function handleOnClick(index, file) {
    if (!file) return;
    var actualFile = file;
    if (file.isLoading || file.error) {
      var realFileInFiles = files.find(function (f, idx) {
        if (!f || f.isLoading || f.error) return false;
        if (f instanceof File && file.name && f.name === file.name) {
          return true;
        }
        return false;
      });
      if (realFileInFiles) {
        actualFile = realFileInFiles;
      }
    }
    var filteredIndex = filteredFiles.findIndex(function (f, idx) {
      if (!f) return false;
      if (f === actualFile) return true;
      if (f === file) return true;
      var fKey = getFileKey(f);
      var actualKey = getFileKey(actualFile);
      var fileKey = getFileKey(file);
      if (fKey && actualKey && fKey === actualKey) return true;
      if (fKey && fileKey && fKey === fileKey) return true;
      if (f instanceof File && actualFile instanceof File && f.name === actualFile.name && f.size === actualFile.size) {
        return true;
      }
      return false;
    });
    userSelectedFileRef.current = actualFile;
    lastUserSelectionRef.current = actualFile;
    setFile(actualFile);
    setCurrentFile(filteredIndex >= 0 ? filteredIndex : index);
    setTimeout(function () {
      if (userSelectedFileRef.current === actualFile) {
        userSelectedFileRef.current = null;
      }
    }, 2000);
    titleRef.current.scrollIntoView();
  };

  /**
   *
   * @param {String} text
   */
  var handleOnSearch = function handleOnSearch(text) {
    setSearch(text);
  };
  var sortFiles = function sortFiles(arrayFiles) {
    return arrayFiles.map(function (_file) {
      var _file$name = _file.name,
        name = _file$name === void 0 ? '' : _file$name;
      if (name.includes(REVERSA)) {
        return {
          position: 2,
          _file: _file
        };
      } else if (name.includes(FRONTAL)) {
        return {
          position: 0,
          _file: _file
        };
      }
      return {
        position: 1,
        _file: _file
      };
    }).sort(function (a, b) {
      if (a.position > b.position) return 1;
      if (a.position < b.position) return -1;
      return 0;
    }).map(function (_ref2) {
      var _file = _ref2._file;
      return _file;
    });
  };
  var fillFiles = function fillFiles(arrayFiles) {
    if (!arrayFiles.length) return ['', ''];
    if (arrayFiles.length === 1) return [].concat(_toConsumableArray(arrayFiles), ['']);
    return arrayFiles;
  };
  var constructFiles = function constructFiles(arrayFiles) {
    var newFiles = fillFiles(arrayFiles);
    return sortFiles(newFiles);
  };
  var getTitle = function getTitle(_url, title) {
    if (_url.includes(REVERSE)) return REVERSA;
    if (_url.includes(FRONT)) return FRONTAL;
    return title;
  };
  var createLoadingPlaceholder = function createLoadingPlaceholder(url, index) {
    var _title = useEditorIne ? getTitle(url, title) : title;
    return {
      name: _title,
      url: url,
      isLoading: true,
      index: index,
      size: 0,
      type: 'application/octet-stream',
      lastModified: Date.now()
    };
  };
  var loadDocumentSequentially = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(url, index) {
      var isRetry,
        response,
        data,
        metadata,
        _title,
        _file2,
        _args = arguments;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            isRetry = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;
            if (url) {
              _context.next = 3;
              break;
            }
            return _context.abrupt("return", null);
          case 3:
            setLoadingStates(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, index, {
                loading: true,
                error: false
              }));
            });
            _context.prev = 4;
            _context.next = 7;
            return (0, _fetchWithRetry.fetchWithRetry)(url, {
              maxRetries: isRetry ? 1 : 2,
              timeout: 180000,
              sequential: isRetry
            });
          case 7:
            response = _context.sent;
            _context.next = 10;
            return response.blob();
          case 10:
            data = _context.sent;
            metadata = {
              type: data.type || response.headers.get('content-type') || 'application/octet-stream'
            };
            _title = useEditorIne ? getTitle(url, title) : title;
            _file2 = new File([data], _title, metadata);
            setLoadingStates(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, index, {
                loading: false,
                error: false
              }));
            });
            return _context.abrupt("return", _file2);
          case 18:
            _context.prev = 18;
            _context.t0 = _context["catch"](4);
            console.error("Error al cargar documento ".concat(index + 1, " (").concat(url, "):"), _context.t0);
            setLoadingStates(function (prev) {
              return _objectSpread(_objectSpread({}, prev), {}, _defineProperty({}, index, {
                loading: false,
                error: true,
                errorMessage: _context.t0.message
              }));
            });
            return _context.abrupt("return", {
              name: useEditorIne ? getTitle(url, title) : title,
              url: url,
              error: true,
              errorMessage: _context.t0.message,
              index: index
            });
          case 23:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 18]]);
    }));
    return function loadDocumentSequentially(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();
  var generateFilesToURL = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(arrayUrl) {
      var isRetry,
        placeholders,
        firstPlaceholder,
        retryPlaceholders,
        _loadedFiles,
        _loop,
        i,
        _validFiles,
        newSortFiles,
        loadPromises,
        loadedFiles,
        validFiles,
        _newSortFiles,
        firstValidFile,
        _args4 = arguments;
      return _regeneratorRuntime().wrap(function _callee3$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            isRetry = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;
            if (!(!arrayUrl || !Array.isArray(arrayUrl) || arrayUrl.length === 0)) {
              _context4.next = 4;
              break;
            }
            setIsLoadingDocuments(false);
            return _context4.abrupt("return");
          case 4:
            if (!isRetry) {
              setLoadingStates({});
              setFailedUrls([]);
            }
            setIsLoadingDocuments(true);
            placeholders = arrayUrl.map(function (url, index) {
              return url ? createLoadingPlaceholder(url, index) : null;
            }).filter(function (p) {
              return p !== null;
            });
            if (placeholders.length > 0 && !isRetry) {
              setFiles(placeholders);
              firstPlaceholder = placeholders[0];
              if (firstPlaceholder) {
                setFile(firstPlaceholder);
              }
            }
            if (!isRetry) {
              _context4.next = 25;
              break;
            }
            retryPlaceholders = arrayUrl.map(function (url, index) {
              if (!url) return null;
              var existingFile = files.find(function (f) {
                return f && f.error && f.url === url;
              });
              if (existingFile) {
                return createLoadingPlaceholder(url, existingFile.index || index);
              }
              return createLoadingPlaceholder(url, index);
            }).filter(function (p) {
              return p !== null;
            });
            if (retryPlaceholders.length > 0) {
              setFiles(function (prevFiles) {
                var newFiles = _toConsumableArray(prevFiles);
                retryPlaceholders.forEach(function (placeholder) {
                  var fileIndex = newFiles.findIndex(function (f) {
                    return f && f.error && f.url === placeholder.url;
                  });
                  if (fileIndex >= 0) {
                    newFiles[fileIndex] = placeholder;
                  }
                });
                return newFiles.filter(function (f) {
                  return f !== null;
                });
              });
              if (retryPlaceholders[0]) {
                setFile(retryPlaceholders[0]);
              }
            }
            _loadedFiles = [];
            _loop = /*#__PURE__*/_regeneratorRuntime().mark(function _loop() {
              var url, existingFile, index, file, _firstValidFile;
              return _regeneratorRuntime().wrap(function _loop$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    url = arrayUrl[i];
                    if (url) {
                      _context2.next = 4;
                      break;
                    }
                    _loadedFiles.push(null);
                    return _context2.abrupt("return", 1);
                  case 4:
                    existingFile = files.find(function (f) {
                      return f && f.error && f.url === url;
                    });
                    index = existingFile ? existingFile.index !== undefined ? existingFile.index : i : i;
                    _context2.next = 8;
                    return loadDocumentSequentially(url, index, true);
                  case 8:
                    file = _context2.sent;
                    _loadedFiles.push(file);
                    if (file && !file.error) {
                      setFiles(function (prevFiles) {
                        var newFiles = _toConsumableArray(prevFiles);
                        var fileIndex = newFiles.findIndex(function (f) {
                          return f && (f.index === index || f.error && f.url === url || f.isLoading && f.url === url);
                        });
                        if (fileIndex >= 0) {
                          newFiles[fileIndex] = file;
                        } else {
                          newFiles.push(file);
                        }
                        return newFiles.filter(function (f) {
                          return f !== null;
                        });
                      });
                      _firstValidFile = file;
                      if (_firstValidFile && !_firstValidFile.isLoading) {
                        setFile(_firstValidFile);
                      }
                    } else if (file && file.error) {
                      setFiles(function (prevFiles) {
                        var newFiles = _toConsumableArray(prevFiles);
                        var fileIndex = newFiles.findIndex(function (f) {
                          return f && (f.index === index || f.error && f.url === url || f.isLoading && f.url === url);
                        });
                        if (fileIndex >= 0) {
                          newFiles[fileIndex] = file;
                        }
                        return newFiles.filter(function (f) {
                          return f !== null;
                        });
                      });
                    }
                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }, _loop);
            });
            i = 0;
          case 14:
            if (!(i < arrayUrl.length)) {
              _context4.next = 21;
              break;
            }
            return _context4.delegateYield(_loop(), "t0", 16);
          case 16:
            if (!_context4.t0) {
              _context4.next = 18;
              break;
            }
            return _context4.abrupt("continue", 18);
          case 18:
            i++;
            _context4.next = 14;
            break;
          case 21:
            _validFiles = _loadedFiles.filter(function (f) {
              return f !== null;
            });
            if (useEditorIne && _validFiles.length > 0) {
              newSortFiles = constructFiles(_validFiles);
              setFilesOrder(newSortFiles);
            }
            setIsLoadingDocuments(false);
            return _context4.abrupt("return");
          case 25:
            loadPromises = arrayUrl.map( /*#__PURE__*/function () {
              var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(url, index) {
                var _file3, errorFile;
                return _regeneratorRuntime().wrap(function _callee2$(_context3) {
                  while (1) switch (_context3.prev = _context3.next) {
                    case 0:
                      if (url) {
                        _context3.next = 2;
                        break;
                      }
                      return _context3.abrupt("return", null);
                    case 2:
                      _context3.prev = 2;
                      _context3.next = 5;
                      return loadDocumentSequentially(url, index, false);
                    case 5:
                      _file3 = _context3.sent;
                      if (_file3 && !_file3.error) {
                        setFiles(function (prevFiles) {
                          var newFiles = _toConsumableArray(prevFiles);
                          var fileIndex = newFiles.findIndex(function (f) {
                            return f && f.isLoading && f.index === index;
                          });
                          if (fileIndex >= 0) {
                            newFiles[fileIndex] = _file3;
                          } else {
                            newFiles.push(_file3);
                          }
                          var firstValidFile = newFiles.find(function (f) {
                            return !f.error && !f.isLoading;
                          });
                          if (firstValidFile && !firstValidFile.isLoading) {
                            setFile(firstValidFile);
                          }
                          return newFiles.filter(function (f) {
                            return f !== null;
                          });
                        });
                      } else if (_file3 && _file3.error) {
                        setFailedUrls(function (prev) {
                          return [].concat(_toConsumableArray(prev), [{
                            url: url,
                            index: index
                          }]);
                        });
                        setFiles(function (prevFiles) {
                          var newFiles = _toConsumableArray(prevFiles);
                          var fileIndex = newFiles.findIndex(function (f) {
                            return f && f.isLoading && f.index === index;
                          });
                          if (fileIndex >= 0) {
                            newFiles[fileIndex] = _file3;
                          }
                          return newFiles.filter(function (f) {
                            return f !== null;
                          });
                        });
                      }
                      return _context3.abrupt("return", _file3);
                    case 10:
                      _context3.prev = 10;
                      _context3.t0 = _context3["catch"](2);
                      console.error("Error al cargar documento ".concat(index + 1, ":"), _context3.t0);
                      errorFile = {
                        name: useEditorIne ? getTitle(url, title) : title,
                        url: url,
                        error: true,
                        errorMessage: _context3.t0.message,
                        index: index
                      };
                      setFailedUrls(function (prev) {
                        return [].concat(_toConsumableArray(prev), [{
                          url: url,
                          index: index
                        }]);
                      });
                      return _context3.abrupt("return", errorFile);
                    case 16:
                    case "end":
                      return _context3.stop();
                  }
                }, _callee2, null, [[2, 10]]);
              }));
              return function (_x4, _x5) {
                return _ref5.apply(this, arguments);
              };
            }());
            _context4.next = 28;
            return Promise.all(loadPromises);
          case 28:
            loadedFiles = _context4.sent;
            validFiles = loadedFiles.filter(function (f) {
              return f !== null;
            });
            if (useEditorIne && validFiles.length > 0) {
              _newSortFiles = constructFiles(validFiles);
              setFilesOrder(_newSortFiles);
            }
            setFiles(validFiles);
            firstValidFile = validFiles.find(function (f) {
              return !f.error && !f.isLoading;
            });
            if (firstValidFile && !firstValidFile.isLoading) {
              setFile(firstValidFile);
            } else if (validFiles.length > 0) {
              setFile(validFiles[0]);
            }
            setIsLoadingDocuments(false);
          case 35:
          case "end":
            return _context4.stop();
        }
      }, _callee3);
    }));
    return function generateFilesToURL(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var retryFailedDocuments = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
      var specificFile,
        urlsToRetry,
        currentFailedUrls,
        retryUrl,
        retryIndex,
        retryPlaceholders,
        updatedFilesAfterPlaceholders,
        currentFileKey,
        retryFileKey,
        retryUrlKey,
        placeholderIndex,
        _loop2,
        i,
        _args6 = arguments;
      return _regeneratorRuntime().wrap(function _callee4$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            specificFile = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : null;
            urlsToRetry = [];
            currentFailedUrls = [];
            if (!(specificFile && specificFile.error && (specificFile.url || url))) {
              _context6.next = 9;
              break;
            }
            retryUrl = specificFile.url || url;
            retryIndex = specificFile.index !== undefined ? specificFile.index : files.findIndex(function (f) {
              return f === specificFile;
            });
            currentFailedUrls = [{
              url: retryUrl,
              index: retryIndex >= 0 ? retryIndex : 0
            }];
            _context6.next = 14;
            break;
          case 9:
            if (!(failedUrls.length > 0)) {
              _context6.next = 13;
              break;
            }
            currentFailedUrls = _toConsumableArray(failedUrls);
            _context6.next = 14;
            break;
          case 13:
            return _context6.abrupt("return");
          case 14:
            setFailedUrls([]);
            setIsLoadingDocuments(true);
            retryPlaceholders = currentFailedUrls.map(function (_ref7) {
              var url = _ref7.url,
                index = _ref7.index;
              return createLoadingPlaceholder(url, index);
            });
            updatedFilesAfterPlaceholders = [];
            setFiles(function (prevFiles) {
              var newFiles = _toConsumableArray(prevFiles);
              retryPlaceholders.forEach(function (placeholder) {
                var fileIndex = newFiles.findIndex(function (f) {
                  return f && f.error && f.url === placeholder.url;
                });
                if (fileIndex >= 0) {
                  newFiles[fileIndex] = placeholder;
                }
              });
              updatedFilesAfterPlaceholders = newFiles.filter(function (f) {
                return f !== null;
              });
              return updatedFilesAfterPlaceholders;
            });
            if (specificFile && retryPlaceholders[0]) {
              currentFileKey = getFileKey(file);
              retryFileKey = getFileKey(specificFile);
              retryUrlKey = "url_".concat(retryPlaceholders[0].url);
              if (currentFileKey === retryFileKey || currentFileKey === retryUrlKey || !currentFileKey) {
                setFile(retryPlaceholders[0]);
                placeholderIndex = updatedFilesAfterPlaceholders.findIndex(function (f) {
                  return f && f.url === retryPlaceholders[0].url;
                });
                if (placeholderIndex >= 0) {
                  setCurrentFile(placeholderIndex);
                }
                userSelectedFileRef.current = null;
                lastUserSelectionRef.current = null;
              }
            }
            _loop2 = /*#__PURE__*/_regeneratorRuntime().mark(function _loop2() {
              var _currentFailedUrls$i, url, index, file;
              return _regeneratorRuntime().wrap(function _loop2$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    _currentFailedUrls$i = currentFailedUrls[i], url = _currentFailedUrls$i.url, index = _currentFailedUrls$i.index;
                    _context5.next = 3;
                    return loadDocumentSequentially(url, index, true);
                  case 3:
                    file = _context5.sent;
                    if (file && !file.error) {
                      setFiles(function (prevFiles) {
                        var newFiles = _toConsumableArray(prevFiles);
                        var fileIndex = newFiles.findIndex(function (f) {
                          return f && (f.index === index || f.error && f.url === url || f.isLoading && f.url === url);
                        });
                        if (fileIndex >= 0) {
                          newFiles[fileIndex] = file;
                        } else {
                          newFiles.push(file);
                        }
                        var updatedFiles = newFiles.filter(function (f) {
                          return f !== null;
                        });
                        var firstValidFile = file;
                        if (firstValidFile && !firstValidFile.isLoading) {
                          var foundIndex = updatedFiles.findIndex(function (f) {
                            return f && (f.error && f.url === url || f.isLoading && f.url === url || f === firstValidFile);
                          });
                          if (foundIndex >= 0) {
                            var _retryFileKey = getFileKey(firstValidFile);
                            var _retryUrlKey = "url_".concat(url);
                            var currentFileInState = file;
                            var _currentFileKey = currentFileInState ? getFileKey(currentFileInState) : null;
                            if (_currentFileKey === _retryFileKey || _currentFileKey === _retryUrlKey) {
                              setCurrentFile(foundIndex);
                              setFile(firstValidFile);
                            } else if (!userSelectedFileRef.current && !lastUserSelectionRef.current) {
                              var prevFileInState = prevFiles.find(function (f) {
                                return f && !f.error && !f.isLoading && (f.url === url || f.isLoading && f.url === url);
                              }) || prevFiles[0];
                              var prevFileKey = prevFileInState ? getFileKey(prevFileInState) : null;
                              if (!prevFileKey || prevFileKey === _retryFileKey || prevFileKey === _retryUrlKey) {
                                setCurrentFile(foundIndex);
                                setFile(firstValidFile);
                              }
                            }
                          }
                        }
                        return updatedFiles;
                      });
                    } else if (file && file.error) {
                      setFiles(function (prevFiles) {
                        var newFiles = _toConsumableArray(prevFiles);
                        var fileIndex = newFiles.findIndex(function (f) {
                          return f && (f.index === index || f.error && f.url === url || f.isLoading && f.url === url);
                        });
                        if (fileIndex >= 0) {
                          newFiles[fileIndex] = file;
                        }
                        return newFiles.filter(function (f) {
                          return f !== null;
                        });
                      });
                      setFailedUrls(function (prev) {
                        return [].concat(_toConsumableArray(prev), [{
                          url: url,
                          index: index
                        }]);
                      });
                    }
                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _loop2);
            });
            i = 0;
          case 22:
            if (!(i < currentFailedUrls.length)) {
              _context6.next = 27;
              break;
            }
            return _context6.delegateYield(_loop2(), "t0", 24);
          case 24:
            i++;
            _context6.next = 22;
            break;
          case 27:
            setIsLoadingDocuments(false);
          case 28:
          case "end":
            return _context6.stop();
        }
      }, _callee4);
    }));
    return function retryFailedDocuments() {
      return _ref6.apply(this, arguments);
    };
  }();
  var checkFiles = function checkFiles() {
    return files.filter(function (_file) {
      return _file !== '';
    }).length < 2;
  };
  var getTheDocument = function getTheDocument() {
    if (useEditorIne && checkFiles()) return /*#__PURE__*/_react.default.createElement(_IneEditor.default, {
      title: title,
      accept: accept,
      onChange: handleOnDropByIndex,
      values: filesOrder,
      disabled: disabled,
      handleOnDelete: useDeleteDialog ? function () {
        return setShowModal(true);
      } : handleOnDelete,
      fileConvertion: fileConvertion
    });else if (file) {
      var isThisFileLoading = file.isLoading || file.index !== undefined && loadingStates[file.index] && loadingStates[file.index].loading;
      var fileIsLoading = isThisFileLoading;
      var fileHasError = file.error || file.index !== undefined && loadingStates[file.index] && loadingStates[file.index].error;
      var shouldUseUrlDocument = !(file instanceof File) && (file.url || url);
      var urlDocumentValue = shouldUseUrlDocument ? file.url || url : undefined;
      var fileKey = getFileKey(file);
      return /*#__PURE__*/_react.default.createElement(_FilePreview.default, {
        key: fileKey || "file_".concat(Date.now()),
        onDownloadFile: onDownloadFile,
        file: file,
        onDelete: useDeleteDialog ? function () {
          return setShowModal(true);
        } : handleOnDelete,
        disabled: disabled,
        urlDocument: urlDocumentValue,
        multiple: multiple,
        accept: accept,
        verify: verify,
        onDrop: handleOnAdd,
        isLoading: fileIsLoading,
        hasError: fileHasError,
        errorMessage: file.errorMessage || file.index !== undefined && loadingStates[file.index] && loadingStates[file.index].errorMessage,
        onRetry: fileHasError && (file.url || url) ? function () {
          return retryFailedDocuments(file);
        } : undefined
      });
    } else if (isLoadingDocuments) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          flexDirection: 'column',
          gap: '10px'
        }
      }, /*#__PURE__*/_react.default.createElement("div", null, "Cargando documentos..."), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: '12px',
          color: '#bbb'
        }
      }, "Por favor espera"));
    } else return /*#__PURE__*/_react.default.createElement(_DropZone.default, {
      multiple: multiple,
      accept: accept,
      onDrop: handleOnDrop,
      disabled: disabled
    });
  };
  (0, _react.useEffect)(function () {
    if (!userSelectedFileRef.current) {
      if (filteredFiles.length > 0) {
        var currentFileIndex = filteredFiles.findIndex(function (f) {
          if (!f || !file) return false;
          if (f === file) return true;
          if (f instanceof File && file instanceof File) {
            return f.name === file.name && f.size === file.size && f.lastModified === file.lastModified;
          }
          var fKey = getFileKey(f);
          var fileKey = getFileKey(file);
          if (fKey && fileKey && fKey === fileKey) return true;
          return false;
        });
        if (currentFileIndex < 0) {
          var firstValidFile = filteredFiles.find(function (f) {
            return f && !f.error && !f.isLoading;
          }) || filteredFiles[0];
          var firstValidIndex = filteredFiles.indexOf(firstValidFile);
          setCurrentFile(firstValidIndex >= 0 ? firstValidIndex : 0);
          setFile(firstValidFile || filteredFiles[0]);
        } else if (currentFileIndex !== currentFile) {
          setCurrentFile(currentFileIndex);
        }
      } else {
        setSearch('');
      }
    }
  }, [filteredFiles]);
  (0, _react.useEffect)(function () {
    if (!userSelectedFileRef.current) {
      if (files.length <= 0) {
        setFile(null);
        setCurrentFile(0);
      } else {
        var currentFileExists = file && files.some(function (f) {
          if (!f) return false;
          if (f === file) return true;
          if (f instanceof File && file instanceof File) {
            return f.name === file.name && f.size === file.size && f.lastModified === file.lastModified;
          }
          var fKey = getFileKey(f);
          var fileKey = getFileKey(file);
          return fKey && fileKey && fKey === fileKey;
        });
        if (!currentFileExists && files.length > 0) {
          var firstValidFile = files.find(function (f) {
            return f && !f.error && !f.isLoading;
          }) || files[0];
          if (firstValidFile) {
            setFile(firstValidFile);
            var filteredIndex = filteredFiles.findIndex(function (f) {
              if (!f) return false;
              if (f === firstValidFile) return true;
              if (f instanceof File && firstValidFile instanceof File) {
                return f.name === firstValidFile.name && f.size === firstValidFile.size;
              }
              return getFileKey(f) === getFileKey(firstValidFile);
            });
            setCurrentFile(filteredIndex >= 0 ? filteredIndex : 0);
          }
        }
      }
    }
  }, [files]);
  (0, _react.useEffect)(function () {
    var arrayUrl = url !== '' && typeof url === "string" ? [url] : url;
    if (Array.isArray(arrayUrl)) generateFilesToURL(arrayUrl);
  }, [url]);
  return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement(_DeleteDialog.default, {
    onCancel: function onCancel() {
      return setShowModal(false);
    },
    onDelete: handleOnDelete,
    onDeleteAll: handleOnDeleteAll,
    title: "\xBFDeseas Borrar el/los documentos?",
    showModal: showModal && useDeleteDialog
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.titleContainer,
    ref: titleRef
  }, /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.title
  }, title), required && /*#__PURE__*/_react.default.createElement(_Typography.default, {
    className: classes.asterisk
  }, "*")), getTheDocument(), multiple && files.length > 0 && /*#__PURE__*/_react.default.createElement(_FileFinder.default, {
    dragType: title,
    files: filteredFiles,
    current: currentFile,
    onClick: handleOnClick,
    search: search,
    onSearch: handleOnSearch,
    placeholder: placeholder,
    disabled: disabled,
    multiple: multiple,
    accept: accept,
    onDrop: handleOnAdd,
    flipId: flipId,
    moveCard: moveCard,
    disabledAdd: disabled || useEditorIne
  }));
};
UploadDocuments.propTypes = {
  title: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  url: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  onDelete: _propTypes.default.func,
  onDeleteAll: _propTypes.default.func,
  onDownloadFile: _propTypes.default.func,
  onMove: _propTypes.default.func,
  useDeleteDialog: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  useEditorIne: _propTypes.default.bool,
  fileConvertion: _propTypes.default.func,
  verify: _propTypes.default.object
};
UploadDocuments.defaultProps = {
  title: '',
  multiple: false,
  accept: '',
  onDrop: function onDrop() {},
  onDelete: function onDelete() {},
  onDeleteAll: function onDeleteAll() {},
  onDownloadFile: function onDownloadFile() {},
  onMove: function onMove() {},
  useDeleteDialog: false,
  placeholder: '',
  url: '',
  verify: {
    status: -1
  },
  disabled: false,
  required: false,
  useEditorIne: false,
  fileConvertion: function fileConvertion() {}
};
var _default = UploadDocuments;
exports.default = _default;
