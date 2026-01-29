"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Card = _interopRequireDefault(require("@material-ui/core/Card"));
var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));
var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));
var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));
var _style = _interopRequireDefault(require("./style"));
var _nodes = require("../nodes");
var _detectPdf = _interopRequireDefault(require("../nodes/PdfViewer/detectPdf"));
var _SignersCarousel = _interopRequireDefault(require("../SignersCarousel"));
var _HiddenDocument = _interopRequireDefault(require("./HiddenDocument"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var SIGNER_STATUS_PENDING = 'Pendiente';
var SIGNER_STATUS_SIGNED = 'Firmado';
var STATUS = {
  0: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Reject_validation.png",
    label: "No se pudo hacer la validacion automatica"
  },
  1: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Accept_validation.png",
    label: "Documento Validado"
  },
  2: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Reject_validation.png",
    label: "Documento No Valido"
  }
};
var documentCache = new Map();
var FilePreview = function FilePreview(_ref) {
  var file = _ref.file,
    verify = _ref.verify,
    onDelete = _ref.onDelete,
    onDownloadFile = _ref.onDownloadFile,
    disabled = _ref.disabled,
    urlDocument = _ref.urlDocument,
    edit = _ref.edit,
    handleOnEdit = _ref.handleOnEdit,
    signers = _ref.signers,
    _ref$lazyLoad = _ref.lazyLoad,
    lazyLoad = _ref$lazyLoad === void 0 ? true : _ref$lazyLoad,
    _ref$isLoading = _ref.isLoading,
    isLoading = _ref$isLoading === void 0 ? false : _ref$isLoading,
    _ref$hasError = _ref.hasError,
    hasError = _ref$hasError === void 0 ? false : _ref$hasError,
    _ref$errorMessage = _ref.errorMessage,
    errorMessage = _ref$errorMessage === void 0 ? '' : _ref$errorMessage,
    onRetry = _ref.onRetry;
  var clasess = (0, _style.default)();
  var _useState = (0, _react.useState)(''),
    _useState2 = _slicedToArray(_useState, 2),
    url = _useState2[0],
    setUrl = _useState2[1];
  var _useState3 = (0, _react.useState)(!lazyLoad),
    _useState4 = _slicedToArray(_useState3, 2),
    isVisible = _useState4[0],
    setIsVisible = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    hasBeenLoaded = _useState6[0],
    setHasBeenLoaded = _useState6[1];
  var blobUrlRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);
  var observerRef = (0, _react.useRef)(null);
  var documentKeyRef = (0, _react.useRef)(null);
  var isLoadingRef = (0, _react.useRef)(false);
  var isIntersectingRef = (0, _react.useRef)(false);
  var rafIdRef = (0, _react.useRef)(null);
  var getDocumentKey = function getDocumentKey() {
    if (urlDocument && !Array.isArray(urlDocument)) {
      return "url_".concat(urlDocument);
    }
    if (file) {
      return "file_".concat(file.name, "_").concat(file.size, "_").concat(file.lastModified);
    }
    return null;
  };
  var readFile = function readFile() {
    if (!file || !(file instanceof File)) {
      return;
    }
    var docKey = getDocumentKey();
    if (!docKey) return;
    if (isLoadingRef.current && documentKeyRef.current === docKey) {
      return;
    }
    if (documentCache.has(docKey)) {
      var cachedUrl = documentCache.get(docKey);
      blobUrlRef.current = cachedUrl;
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }
    isLoadingRef.current = true;
    try {
      var _url = URL.createObjectURL(file);
      blobUrlRef.current = _url;
      documentCache.set(docKey, _url);
      isLoadingRef.current = false;
      setUrl(_url);
      setHasBeenLoaded(true);
    } catch (e) {
      console.error('Error creating blob URL:', e);
      isLoadingRef.current = false;
    }
  };
  var showDocument = (0, _react.useMemo)(function () {
    if (!signers.length) return true;
    return !signers.some(function (_ref2) {
      var status = _ref2.status;
      return status === SIGNER_STATUS_PENDING;
    });
  }, [signers]);
  var renderFile = function renderFile() {
    if (hasError) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#d32f2f',
          flexDirection: 'column',
          gap: '15px',
          padding: '20px'
        }
      }, /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: '16px',
          fontWeight: 'bold'
        }
      }, "Error al cargar el documento"), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: '14px',
          color: '#666',
          textAlign: 'center'
        }
      }, errorMessage || 'No se pudo cargar el documento'), onRetry && /*#__PURE__*/_react.default.createElement("button", {
        type: "button",
        onClick: function onClick(e) {
          e.preventDefault();
          e.stopPropagation();
          onRetry();
        },
        style: {
          padding: '10px 20px',
          backgroundColor: '#1976d2',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '14px'
        }
      }, "Reintentar"));
    }
    if (isLoading) {
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
      }, /*#__PURE__*/_react.default.createElement("div", null, "Cargando documento..."), /*#__PURE__*/_react.default.createElement("div", {
        style: {
          fontSize: '12px',
          color: '#bbb'
        }
      }, "Por favor espera"));
    }
    if (lazyLoad && !isVisible && !hasBeenLoaded) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999'
        }
      }, "Cargando...");
    }
    if (!url && !hasBeenLoaded) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: {
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999'
        }
      }, "Cargando documento...");
    }
    if (!file || !(file instanceof File)) {
      return null;
    }
    if (/^image\//.test(file.type)) {
      return /*#__PURE__*/_react.default.createElement("img", {
        alt: file.name,
        src: url,
        height: 'auto',
        style: {
          minHeight: '400px',
          maxWidth: '100%',
          objectFit: 'contain'
        },
        loading: "lazy",
        onError: function onError(e) {
          e.target.style.display = 'none';
          console.error('Error al cargar la imagen');
        }
      });
    } else if (/^(text||application)\//.test(file.type)) {
      if (/^(application\/pdf)/.test(file.type) && !(0, _detectPdf.default)()) {
        return /*#__PURE__*/_react.default.createElement(_nodes.PdfViewer, {
          url: url,
          onDownloadFile: onDownloadFile
        });
      }
      return /*#__PURE__*/_react.default.createElement("iframe", {
        title: file.name,
        src: url,
        onLoad: function onLoad(e) {
          try {
            var iframe = e.target;
            if (iframe.contentDocument && iframe.contentDocument.body) {
              var body = iframe.contentDocument.body;
              if (body.innerHTML.includes('ERR_') || body.innerHTML.includes('Failed to load')) {
                console.error('Error al cargar el documento en el iframe');
              }
            }
          } catch (err) {}
        }
      });
    } else return 'No Soportado';
  };
  var readUrlDocument = function readUrlDocument() {
    var docKey = getDocumentKey();
    if (!docKey) return;
    if (isLoadingRef.current && documentKeyRef.current === docKey) {
      return;
    }
    if (documentCache.has(docKey)) {
      var cachedUrl = documentCache.get(docKey);
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }
    var currentDocKey = docKey;
    documentKeyRef.current = currentDocKey;
    documentCache.set(currentDocKey, urlDocument);
    requestAnimationFrame(function () {
      if (documentKeyRef.current === currentDocKey) {
        setUrl(urlDocument);
        setHasBeenLoaded(true);
      }
    });
  };
  var handleOnDelete = function handleOnDelete() {
    onDelete(file);
  };
  (0, _react.useEffect)(function () {
    if (!lazyLoad) {
      setIsVisible(true);
      isIntersectingRef.current = true;
      return;
    }
    if (!containerRef.current) return;
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    var container = containerRef.current;
    observerRef.current = new IntersectionObserver(function (entries) {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
      rafIdRef.current = requestAnimationFrame(function () {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && !isIntersectingRef.current) {
            isIntersectingRef.current = true;
            setIsVisible(true);
          }
        });
        rafIdRef.current = null;
      });
    }, {
      root: null,
      rootMargin: '100px',
      threshold: 0.1
    });
    observerRef.current.observe(container);
    return function () {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [lazyLoad]);
  (0, _react.useEffect)(function () {
    var docKey = getDocumentKey();
    if (!docKey) return;
    var previousKey = documentKeyRef.current;
    var documentChanged = previousKey !== docKey;
    if (documentChanged) {
      if (blobUrlRef.current && !documentCache.has(previousKey)) {
        try {
          URL.revokeObjectURL(blobUrlRef.current);
        } catch (e) {}
      }
      blobUrlRef.current = null;
      isLoadingRef.current = false;
      isIntersectingRef.current = false;
      documentKeyRef.current = docKey;
      setHasBeenLoaded(false);
      setUrl('');
      setIsVisible(true);
    }
    if (!lazyLoad) {
      setIsVisible(true);
      isIntersectingRef.current = true;
    }
    if (documentCache.has(docKey)) {
      var cachedUrl = documentCache.get(docKey);
      blobUrlRef.current = cachedUrl;
      setIsVisible(true);
      isIntersectingRef.current = true;
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }
    if (!isLoadingRef.current) {
      if (urlDocument && !Array.isArray(urlDocument)) {
        readUrlDocument();
      } else if (file && file instanceof File) {
        readFile();
      }
    }
    return function () {
      var currentKey = documentKeyRef.current;
      if (blobUrlRef.current && currentKey && currentKey === docKey) {
        var newKey = getDocumentKey();
        if (newKey !== currentKey || !documentCache.has(currentKey)) {
          try {
            URL.revokeObjectURL(blobUrlRef.current);
          } catch (e) {}
        }
        if (newKey !== currentKey) {
          blobUrlRef.current = null;
        }
      }
    };
  }, [file, urlDocument, lazyLoad]);
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: clasess.card,
    ref: containerRef
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: file && file.name ? file.name : 'Documento',
    action: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, verify.status !== -1 ? /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      title: STATUS[verify.status].label,
      placement: "top",
      arrow: true
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: clasess.tooltipValidation
    }, /*#__PURE__*/_react.default.createElement("img", {
      className: clasess.img,
      src: STATUS[verify.status].image
    }))) : "", !disabled && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      className: clasess.iconButton,
      onClick: handleOnDelete
    }, /*#__PURE__*/_react.default.createElement(_Delete.default, null)), edit && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      className: clasess.iconButton,
      onClick: handleOnEdit
    }, /*#__PURE__*/_react.default.createElement(_Edit.default, null)))
  }), signers.length ? /*#__PURE__*/_react.default.createElement("div", {
    className: clasess.containerCarousel
  }, /*#__PURE__*/_react.default.createElement(_SignersCarousel.default, {
    signers: signers
  })) : '', /*#__PURE__*/_react.default.createElement("div", {
    className: clasess.container
  }, showDocument ? renderFile() : /*#__PURE__*/_react.default.createElement(_HiddenDocument.default, {
    title: "Son necesarios todos los firmantes para ver el documento"
  })));
};
FilePreview.propTypes = {
  file: _propTypes.default.instanceOf(File),
  verify: _propTypes.default.object,
  onDelete: _propTypes.default.func,
  onDownloadFile: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  urlDocument: _propTypes.default.string,
  edit: _propTypes.default.bool,
  handleOnEdit: _propTypes.default.func,
  signers: _propTypes.default.arrayOf(_propTypes.default.shape({
    _id: _propTypes.default.string,
    label: _propTypes.default.string,
    status: _propTypes.default.string
  })),
  lazyLoad: _propTypes.default.bool,
  isLoading: _propTypes.default.bool,
  hasError: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  onRetry: _propTypes.default.func
};
FilePreview.defaultProps = {
  file: new File([''], 'No Soportado', {
    type: ''
  }),
  onDelete: function onDelete() {},
  onDownloadFile: function onDownloadFile() {},
  disabled: false,
  edit: false,
  handleOnEdit: function handleOnEdit() {},
  signers: [],
  verify: {
    status: -1
  },
  lazyLoad: true,
  isLoading: false,
  hasError: false,
  errorMessage: '',
  onRetry: undefined
};
var _default = FilePreview;
exports.default = _default;
