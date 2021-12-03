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

var _DeleteDialog = _interopRequireDefault(require("./DeleteDialog"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
      onDeleteAll = _ref.onDeleteAll,
      onDownloadFile = _ref.onDownloadFile,
      useDeleteDialog = _ref.useDeleteDialog,
      placeholder = _ref.placeholder,
      url = _ref.url,
      disabled = _ref.disabled,
      required = _ref.required;
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

  var titleRef = (0, _react.useRef)(null);
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

  var handleOnDelete = function handleOnDelete() {
    var _deleteFile = deleteFile(),
        newFiles = _deleteFile.newFiles,
        index = _deleteFile.index;

    onDelete(newFiles, file, index);
    setFiles(newFiles);
    setShowModal(false);
  };

  var handleOnDeleteAll = function handleOnDeleteAll() {
    onDeleteAll();
    setFiles([]);
    setShowModal(false);
  };

  var handleOnClick = function handleOnClick(index, file) {
    setFile(file);
    setCurrentFile(index);
    titleRef.current.scrollIntoView();
  };
  /**
   *
   * @param {String} text
   */


  var handleOnSearch = function handleOnSearch(text) {
    setSearch(text);
  };

  var generateFileToURL =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var response, data, metadata, file;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fetch(url);

            case 2:
              response = _context.sent;
              _context.next = 5;
              return response.blob();

            case 5:
              data = _context.sent;
              metadata = {
                type: data.type
              };
              file = new File([data], title, metadata);
              if (file) setFile(file);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function generateFileToURL() {
      return _ref2.apply(this, arguments);
    };
  }();

  var generateFilesToURL =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var files, _files, file;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Promise.all(url.map(
              /*#__PURE__*/
              function () {
                var _ref4 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2(_url) {
                  var response, data, metadata, file;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return fetch(_url);

                        case 2:
                          response = _context2.sent;
                          _context2.next = 5;
                          return response.blob();

                        case 5:
                          data = _context2.sent;
                          metadata = {
                            type: data.type
                          };
                          file = new File([data], title, metadata);
                          return _context2.abrupt("return", file);

                        case 9:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x) {
                  return _ref4.apply(this, arguments);
                };
              }()));

            case 2:
              files = _context3.sent;
              _files = _slicedToArray(files, 1), file = _files[0];
              if (files) setFiles(files);
              if (file) setFile(file);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function generateFilesToURL() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    setCurrentFile(0);
    if (filteredFiles.length > 0) setFile(filteredFiles[0]);else setSearch('');
  }, [filteredFiles]);
  (0, _react.useEffect)(function () {
    setCurrentFile(0);
    if (files.length <= 0) setFile(null);
  }, [files]);
  (0, _react.useEffect)(function () {
    if (url !== '' && typeof url === "string") generateFileToURL();
    if (Array.isArray(url)) generateFilesToURL();
  }, [url]);
  return _react.default.createElement("div", null, _react.default.createElement(_DeleteDialog.default, {
    onCancel: function onCancel() {
      return setShowModal(false);
    },
    onDelete: handleOnDelete,
    onDeleteAll: handleOnDeleteAll,
    title: "\xBFDeseas Borrar el/los documentos?",
    showModal: showModal && useDeleteDialog
  }), _react.default.createElement("div", {
    className: classes.titleContainer,
    ref: titleRef
  }, _react.default.createElement(_Typography.default, {
    className: classes.title
  }, title), required && _react.default.createElement(_Typography.default, {
    className: classes.asterisk
  }, "*")), file ? _react.default.createElement(_FilePreview.default, {
    onDownloadFile: onDownloadFile,
    file: file,
    onDelete: useDeleteDialog ? function () {
      return setShowModal(true);
    } : handleOnDelete,
    disabled: disabled,
    urlDocument: url
  }) : _react.default.createElement(_DropZone.default, {
    multiple: multiple,
    accept: accept,
    onDrop: handleOnDrop,
    disabled: disabled
  }), multiple && files.length > 0 && _react.default.createElement(_FileFinder.default, {
    files: filteredFiles,
    current: currentFile,
    onClick: handleOnClick,
    search: search,
    onSearch: handleOnSearch,
    placeholder: placeholder,
    disabled: disabled
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
  useDeleteDialog: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool
};
UploadDocuments.defaultProps = {
  title: '',
  multiple: false,
  accept: '',
  onDrop: function onDrop() {},
  onDelete: function onDelete() {},
  onDeleteAll: function onDeleteAll() {},
  onDownloadFile: function onDownloadFile() {},
  useDeleteDialog: false,
  placeholder: '',
  url: '',
  disabled: false,
  required: false
};
var _default = UploadDocuments;
exports.default = _default;