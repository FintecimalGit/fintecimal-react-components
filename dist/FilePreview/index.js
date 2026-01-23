"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
    if (isLoadingRef.current) return;

    if (documentCache.has(docKey)) {
      var cachedUrl = documentCache.get(docKey);
      blobUrlRef.current = cachedUrl;
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }

    if (blobUrlRef.current && documentKeyRef.current === docKey) {
      setUrl(blobUrlRef.current);
      setHasBeenLoaded(true);
      return;
    }

    if (blobUrlRef.current && documentKeyRef.current !== docKey) {
      if (!documentCache.has(documentKeyRef.current)) {
        try {
          URL.revokeObjectURL(blobUrlRef.current);
        } catch (e) {}
      }

      blobUrlRef.current = null;
    }

    isLoadingRef.current = true;
    var reader = new FileReader();

    reader.onloadend = function () {
      isLoadingRef.current = false;

      var _url = URL.createObjectURL(file);

      blobUrlRef.current = _url;
      documentKeyRef.current = docKey;
      documentCache.set(docKey, _url);
      requestAnimationFrame(function () {
        setUrl(_url);
        setHasBeenLoaded(true);
      });
    };

    reader.onerror = function () {
      isLoadingRef.current = false;
      console.error('Error al leer el archivo');
    };

    reader.readAsDataURL(file);
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
      return _react.default.createElement("div", {
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
      }, _react.default.createElement("div", {
        style: {
          fontSize: '16px',
          fontWeight: 'bold'
        }
      }, "Error al cargar el documento"), _react.default.createElement("div", {
        style: {
          fontSize: '14px',
          color: '#666',
          textAlign: 'center'
        }
      }, errorMessage || 'No se pudo cargar el documento'), onRetry && _react.default.createElement("button", {
        onClick: onRetry,
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
      return _react.default.createElement("div", {
        style: {
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          flexDirection: 'column',
          gap: '10px'
        }
      }, _react.default.createElement("div", null, "Cargando documento..."), _react.default.createElement("div", {
        style: {
          fontSize: '12px',
          color: '#bbb'
        }
      }, "Por favor espera"));
    }

    if (lazyLoad && !isVisible && !hasBeenLoaded) {
      return _react.default.createElement("div", {
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
      return _react.default.createElement("div", {
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
      return _react.default.createElement("img", {
        alt: file.name,
        src: url,
        height: 'auto',
        style: {
          minHeight: '400px',
          maxWidth: '100%',
          objectFit: 'contain'
        },
        loading: "lazy"
      });
    } else if (/^(text||application)\//.test(file.type)) {
      if (/^(application\/pdf)/.test(file.type) && !(0, _detectPdf.default)()) {
        return _react.default.createElement(_nodes.PdfViewer, {
          url: url,
          onDownloadFile: onDownloadFile
        });
      }

      return _react.default.createElement("iframe", {
        title: file.name,
        src: url
      });
    } else return 'No Soportado';
  };

  var readUrlDocument = function readUrlDocument() {
    var docKey = getDocumentKey();
    if (!docKey) return;
    if (isLoadingRef.current) return;

    if (documentCache.has(docKey)) {
      var cachedUrl = documentCache.get(docKey);
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }

    documentCache.set(docKey, urlDocument);
    requestAnimationFrame(function () {
      setUrl(urlDocument);
      setHasBeenLoaded(true);
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
    }

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

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
    observerRef.current.observe(containerRef.current);
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
    var previousKey = documentKeyRef.current;

    if (previousKey && previousKey !== docKey) {
      setHasBeenLoaded(false);
      setUrl('');
      isLoadingRef.current = false;
      isIntersectingRef.current = false;
    }

    documentKeyRef.current = docKey;
    if (!isVisible && lazyLoad) return;

    if (docKey && documentCache.has(docKey)) {
      var cachedUrl = documentCache.get(docKey);
      blobUrlRef.current = cachedUrl;
      requestAnimationFrame(function () {
        setUrl(cachedUrl);
        setHasBeenLoaded(true);
      });
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

      if (blobUrlRef.current && currentKey) {
        var newKey = getDocumentKey();

        if (newKey !== currentKey || !documentCache.has(currentKey)) {
          try {
            URL.revokeObjectURL(blobUrlRef.current);
          } catch (e) {}
        }

        blobUrlRef.current = null;
      }
    };
  }, [file, urlDocument, isVisible, lazyLoad]);
  return _react.default.createElement(_Card.default, {
    className: clasess.card,
    ref: containerRef
  }, _react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: file && file.name ? file.name : 'Documento',
    action: _react.default.createElement(_react.default.Fragment, null, verify.status !== -1 ? _react.default.createElement(_Tooltip.default, {
      title: STATUS[verify.status].label,
      placement: "top",
      arrow: true
    }, _react.default.createElement("span", {
      className: clasess.tooltipValidation
    }, _react.default.createElement("img", {
      className: clasess.img,
      src: STATUS[verify.status].image
    }))) : "", !disabled && _react.default.createElement(_IconButton.default, {
      className: clasess.iconButton,
      onClick: handleOnDelete
    }, _react.default.createElement(_Delete.default, null)), edit && _react.default.createElement(_IconButton.default, {
      className: clasess.iconButton,
      onClick: handleOnEdit
    }, _react.default.createElement(_Edit.default, null)))
  }), signers.length ? _react.default.createElement("div", {
    className: clasess.containerCarousel
  }, _react.default.createElement(_SignersCarousel.default, {
    signers: signers
  })) : '', _react.default.createElement("div", {
    className: clasess.container
  }, showDocument ? renderFile() : _react.default.createElement(_HiddenDocument.default, {
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