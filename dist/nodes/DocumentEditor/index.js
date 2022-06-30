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

var _DocumentCrop = _interopRequireDefault(require("../../DocumentCrop"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var DocumentEditor = function DocumentEditor(_ref) {
  var file = _ref.file,
      onChange = _ref.onChange,
      urlDocument = _ref.urlDocument,
      cancel = _ref.cancel,
      title = _ref.title,
      currentFileIndex = _ref.currentFileIndex;
  var clasess = (0, _style.default)();

  var onCrop = function onCrop(event, blob) {
    if (urlDocument !== '' && typeof urlDocument === "string") {
      var name = urlDocument.split('/').pop().split('?')[0];
      var fileCropped = new File([blob], name, {
        type: blob.type
      });
      onChange([fileCropped]);
      return;
    }

    var newDocuments = urlDocument.map(function (documentURL, index) {
      if (index !== currentFileIndex) return documentURL;
      var name = documentURL.split('/').pop().split('?')[0];
      var fileCropped = new File([blob], name, {
        type: blob.type
      });
      return fileCropped;
    });
    onChange(newDocuments);
  };

  return /*#__PURE__*/_react.default.createElement(_Card.default, {
    className: clasess.card
  }, /*#__PURE__*/_react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: file.name
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: clasess.container
  }, /*#__PURE__*/_react.default.createElement(_DocumentCrop.default, {
    cancel: cancel,
    label: title,
    value: file,
    onCrop: onCrop,
    onBack: function onBack() {}
  })));
};

DocumentEditor.propTypes = {
  file: _propTypes.default.instanceOf(File),
  onChange: _propTypes.default.func,
  urlDocument: _propTypes.default.string,
  cancel: _propTypes.default.func,
  title: _propTypes.default.string,
  currentFileIndex: _propTypes.default.number
};
DocumentEditor.defaultProps = {
  file: new File([''], 'No Soportado', {
    type: ''
  }),
  onChange: function onChange() {},
  urlDocument: '',
  cancel: function cancel() {},
  title: '',
  currentFileIndex: 0
};
var _default = DocumentEditor;
exports.default = _default;