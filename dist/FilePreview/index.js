"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

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

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var SIGNER_STATUS_PENDING = 'Pendiente';

var FilePreview = function FilePreview(_ref) {
  var file = _ref.file,
      onDelete = _ref.onDelete,
      onDownloadFile = _ref.onDownloadFile,
      disabled = _ref.disabled,
      urlDocument = _ref.urlDocument,
      edit = _ref.edit,
      handleOnEdit = _ref.handleOnEdit,
      signers = _ref.signers;
  var clasess = (0, _style.default)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var readFile = function readFile() {
    var reader = new FileReader();

    reader.onloadend = function () {
      var _url = URL.createObjectURL(file);

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
    if (/^image\//.test(file.type)) {
      return /*#__PURE__*/_react.default.createElement("img", {
        alt: file.name,
        src: url,
        height: 'auto'
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
        src: url
      });
    } else return 'No Soportado';
  };

  var readUrlDocument = function readUrlDocument() {
    setUrl(urlDocument);
  };

  var handleOnDelete = function handleOnDelete() {
    onDelete(file);
  };

  (0, _react.useEffect)(function () {
    if (urlDocument && !Array.isArray(urlDocument)) {
      readUrlDocument();
    } else {
      readFile();
    }
  }, [file, urlDocument]);
  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: clasess.card
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: file.name,
    action: /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disabled && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
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
    title: "Podr\xE1s ver el documento cuando todos hayan firmado"
  })));
};

FilePreview.propTypes = {
  file: _propTypes.default.instanceOf(File),
  onDelete: _propTypes.default.func,
  onDownloadFile: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  urlDocument: _propTypes.default.string,
  edit: _propTypes.default.bool,
  handleOnEdit: _propTypes.default.func,
  signers: _propTypes.default.arrayOf(_propTypes.default.shape({
    _id: _propTypes.default.string,
    label: _propTypes.default.string,
    status: _propTypes.default.string,
    completed: _propTypes.default.bool
  }))
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
  signers: []
};
var _default = FilePreview;
exports.default = _default;