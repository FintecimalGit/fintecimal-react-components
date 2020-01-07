"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _DropZone = _interopRequireDefault(require("../DropZone"));

var _FilePreview = _interopRequireDefault(require("../FilePreview"));

var _FileFinder = _interopRequireDefault(require("../FileFinder"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var UploadDocuments = function UploadDocuments(_ref) {
  var title = _ref.title,
      multiple = _ref.multiple,
      accept = _ref.accept,
      onDrop = _ref.onDrop,
      onDelete = _ref.onDelete,
      placeholder = _ref.placeholder;
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

  var filteredFiles = (0, _react.useMemo)(function () {
    var searchLower = search.toLowerCase();
    return files.map(function (file) {
      var fileNameLower = file.name.toLowerCase();
      if (fileNameLower.includes(searchLower) || searchLower === '') return file;
      return null;
    }).filter(function (file) {
      return file !== null;
    });
  }, [files, search]);
  /**
   * @returns {Array}
   */

  var deleteFile = function deleteFile() {
    var newFiles = _toConsumableArray(files);

    var index = newFiles.findIndex(function (_file) {
      return _file === file;
    });
    if (index !== -1) newFiles.splice(index, 1);
    return newFiles;
  };
  /**
   *
   * @param {Array} acceptedFiles 
   */


  var handleOnDrop = function handleOnDrop(acceptedFiles) {
    setFiles(acceptedFiles);
    setSearch('');
    onDrop(acceptedFiles);
  };

  var handleOnDelete = function handleOnDelete() {
    var newFiles = deleteFile();
    onDelete(newFiles, file);
    setFiles(newFiles);
  };

  var handleOnClick = function handleOnClick(index, file) {
    setFile(file);
    setCurrentFile(index);
  };
  /**
   *
   * @param {String} text
   */


  var handleOnSearch = function handleOnSearch(text) {
    setSearch(text);
  };

  (0, _react.useEffect)(function () {
    setCurrentFile(0);
    if (filteredFiles.length > 0) setFile(filteredFiles[0]);else setSearch('');
  }, [filteredFiles]);
  (0, _react.useEffect)(function () {
    setCurrentFile(0);
    if (files.length <= 0) setFile(null);
  }, [files]);
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.titleContainer
  }, _react.default.createElement(_Typography.default, {
    className: classes.title
  }, title)), file ? _react.default.createElement(_FilePreview.default, {
    file: file,
    onDelete: handleOnDelete
  }) : _react.default.createElement(_DropZone.default, {
    multiple: multiple,
    accept: accept,
    onDrop: handleOnDrop
  }), multiple && files.length > 0 && _react.default.createElement(_FileFinder.default, {
    files: filteredFiles,
    current: currentFile,
    onClick: handleOnClick,
    search: search,
    onSearch: handleOnSearch,
    placeholder: placeholder
  }));
};

UploadDocuments.propTypes = {
  title: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  onDelete: _propTypes.default.func,
  placeholder: _propTypes.default.string
};
UploadDocuments.defaultProps = {
  title: '',
  multiple: false,
  accept: '',
  onDrop: function onDrop() {},
  onDelete: function onDelete() {},
  placeholder: ''
};
var _default = UploadDocuments;
exports.default = _default;