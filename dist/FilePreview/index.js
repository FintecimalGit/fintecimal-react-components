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
      lazyLoad = _ref$lazyLoad === void 0 ? true : _ref$lazyLoad;
  var clasess = (0, _style.default)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var _useState3 = (0, _react.useState)(!lazyLoad),
      _useState4 = _slicedToArray(_useState3, 2),
      isVisible = _useState4[0],
      setIsVisible = _useState4[1];

  var blobUrlRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(null);

  var readFile = function readFile() {
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }

    var reader = new FileReader();

    reader.onloadend = function () {
      var _url = URL.createObjectURL(file);

      blobUrlRef.current = _url;
      setUrl(_url);
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
  /**
   * @returns {DOMElement|String}
   */

  var renderFile = function renderFile() {
    if (lazyLoad && !isVisible) {
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

    if (!url) {
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

    if (/^image\//.test(file.type)) {
      return _react.default.createElement("img", {
        alt: file.name,
        src: url,
        height: 'auto'
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
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }

    setUrl(urlDocument);
  };

  var handleOnDelete = function handleOnDelete() {
    onDelete(file);
  };

  (0, _react.useEffect)(function () {
    if (!lazyLoad) {
      setIsVisible(true);
      return;
    }

    if (!containerRef.current) return;
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Cuando sale de vista, revocar el Blob URL para liberar memoria
          if (blobUrlRef.current && url.startsWith('blob:')) {
            URL.revokeObjectURL(blobUrlRef.current);
            blobUrlRef.current = null;
            setUrl(''); // Limpiar URL

            setIsVisible(false); // Marcar como no visible para recrear cuando vuelva
          }
        }
      });
    }, {
      root: null,
      // viewport
      rootMargin: '100px',
      // Cargar 100px antes de que sea visible
      threshold: 0.1 // Trigger cuando 10% es visible

    });
    observer.observe(containerRef.current);
    return function () {
      observer.disconnect();
    };
  }, [lazyLoad, url]);
  (0, _react.useEffect)(function () {
    if (!isVisible && lazyLoad) return;

    if (urlDocument && !Array.isArray(urlDocument)) {
      readUrlDocument();
    } else if (file) {
      readFile();
    } // Cleanup: revocar Blob URL cuando el componente se desmonte o cambie el file/urlDocument


    return function () {
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    };
  }, [file, urlDocument, isVisible, lazyLoad]);
  return _react.default.createElement(_Card.default, {
    className: clasess.card,
    ref: containerRef
  }, _react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: file.name,
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
  lazyLoad: _propTypes.default.bool
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
  lazyLoad: true
};
var _default = FilePreview;
exports.default = _default;