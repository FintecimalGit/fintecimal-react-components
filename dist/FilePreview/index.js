"use strict";

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

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FilePreview = function FilePreview(_ref) {
  var file = _ref.file,
      onDelete = _ref.onDelete,
      disabled = _ref.disabled,
      urlDocument = _ref.urlDocument;
  var clasess = (0, _style.default)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var readFile = function readFile() {
    var reader = new FileReader();

    reader.onloadend = function () {
      setUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };
  /**
   * @returns {DOMElement|String}
   */


  var renderFile = function renderFile() {
    if (/^image\//.test(file.type)) {
      return _react.default.createElement("img", {
        alt: file.name,
        src: url,
        maxWidth: '100%',
        height: 'auto'
      });
    } else if (/^(text||application)\//.test(file.type)) {
      return _react.default.createElement("iframe", {
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
    if (urlDocument) {
      readUrlDocument();
    } else {
      readFile();
    }
  }, [file, urlDocument]);
  return _react.default.createElement(_Card.default, {
    className: clasess.card
  }, _react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: file.name,
    action: !disabled && _react.default.createElement(_IconButton.default, {
      className: clasess.iconButton,
      onClick: handleOnDelete
    }, _react.default.createElement(_Delete.default, null))
  }), _react.default.createElement("div", {
    className: clasess.container
  }, renderFile()));
};

FilePreview.propTypes = {
  file: _propTypes.default.instanceOf(File),
  onDelete: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  urlDocument: _propTypes.default.string
};
FilePreview.defaultProps = {
  file: new File([''], 'No Soportado', {
    type: ''
  }),
  onDelete: function onDelete() {},
  disabled: false
};
var _default = FilePreview;
exports.default = _default;