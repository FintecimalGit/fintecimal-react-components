"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _RejectActions = _interopRequireDefault(require("../RejectActions"));

var _style = _interopRequireDefault(require("./style"));

var _DropZone = _interopRequireDefault(require("../../DropZone"));

var _FilePreview = _interopRequireDefault(require("../../FilePreview"));

var _FileFinder = _interopRequireDefault(require("../../FileFinder"));

var _IneEditor = _interopRequireDefault(require("../../IneEditor"));

var _DocumentEditor = _interopRequireDefault(require("../DocumentEditor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var REVERSE = 'Reverse';
var FRONT = "Front";
var MIME_TYPES_INE_EDITOR = ['image/jpeg', 'image/png'];

var RejectDocuments = function RejectDocuments(_ref) {
  var title = _ref.title,
      rejected = _ref.rejected,
      onReject = _ref.onReject,
      url = _ref.url,
      rejectionOptions = _ref.rejectionOptions,
      rejectionData = _ref.rejectionData,
      onHandlerReject = _ref.onHandlerReject,
      showUndo = _ref.showUndo,
      onUndoRejection = _ref.onUndoRejection,
      editable = _ref.editable,
      useEditorIne = _ref.useEditorIne,
      multiple = _ref.multiple,
      accept = _ref.accept,
      fileConvertion = _ref.fileConvertion,
      rejectionDefaultNotes = _ref.rejectionDefaultNotes,
      hideActions = _ref.hideActions,
      isEditDocument = _ref.isEditDocument,
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

  var _useState9 = (0, _react.useState)(['', '']),
      _useState10 = _slicedToArray(_useState9, 2),
      positions = _useState10[0],
      setPositions = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      activeIneEditor = _useState12[0],
      setActiveIneEditor = _useState12[1];

  var titleRef = (0, _react.useRef)(null);

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

  var generateFileToURLArray =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2() {
      var i, response, data, metadata, _file2, indexFile;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              i = 0;

            case 1:
              if (!(i < url.length)) {
                _context2.next = 14;
                break;
              }

              _context2.next = 4;
              return fetch(url[i]);

            case 4:
              response = _context2.sent;
              _context2.next = 7;
              return response.blob();

            case 7:
              data = _context2.sent;
              metadata = {
                type: data.type
              };
              _file2 = new File([data], title, metadata);
              if (_file2) files[i] = _file2;

            case 11:
              i++;
              _context2.next = 1;
              break;

            case 14:
              indexFile = isEditDocument ? currentFile : 0;
              setFile(files[indexFile]);

            case 16:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function generateFileToURLArray() {
      return _ref3.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    if (url !== '' && typeof url === "string") generateFileToURL();else generateFileToURLArray();
  }, [url]);

  var handleOnDrop = function handleOnDrop(value) {
    var rejectedFiles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    onHandlerReject(value, rejectedFiles);
    setFile(value[0]);
  };

  var handleOnDropByIndex = function handleOnDropByIndex(acceptedFiles, rejectedFiles, index) {
    var newPositions = _toConsumableArray(positions);

    if (acceptedFiles.length) newPositions[index] = acceptedFiles[0];
    var prefix = index ? REVERSE : FRONT;
    setPositions(newPositions);
    onHandlerReject(acceptedFiles, rejectedFiles || [], prefix);
    setFile(value[0]);
  };

  var onCrop = function onCrop(newFile) {
    setActiveIneEditor(false);
    setFile(newFile[currentFile]);
    onHandlerReject(newFile, [], '');
  };

  var handleOnClick = function handleOnClick(index, file) {
    setFile(file);
    setCurrentFile(index);
    titleRef.current.scrollIntoView();
  };

  var handleOnSearch = function handleOnSearch(text) {
    setSearch(text);
  };

  var checkPositionsLenght = function checkPositionsLenght() {
    return positions.filter(function (_file) {
      return _file !== '';
    }).length < 2;
  };

  var getTheDropType = function getTheDropType() {
    if (useEditorIne && checkPositionsLenght()) return _react.default.createElement(_IneEditor.default, {
      title: title,
      accept: accept,
      onChange: handleOnDropByIndex,
      values: positions,
      fileConvertion: fileConvertion,
      isIncorrect: true,
      disabledDelete: true
    });
    return _react.default.createElement(_DropZone.default, {
      onDrop: handleOnDrop,
      isIncorrect: true,
      multiple: multiple
    });
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.titleContainer,
    ref: titleRef
  }, _react.default.createElement("div", {
    className: classes.titleLine
  }, _react.default.createElement(_Typography.default, {
    className: classes.title
  }, title)), !hideActions && _react.default.createElement("div", {
    className: classes.rejectAction
  }, _react.default.createElement(_RejectActions.default, {
    rejectionOptions: rejectionOptions,
    rejectionDefaultNotes: rejectionDefaultNotes,
    handlerReject: onReject,
    rejected: rejected,
    size: "small",
    rejectionData: rejectionData,
    showUndo: showUndo,
    onUndoRejection: onUndoRejection
  }))), file && !rejected && !activeIneEditor && _react.default.createElement(_FilePreview.default, {
    verify: verify,
    file: file,
    onDelete: function onDelete() {
      setFile(null);
    },
    disabled: !rejected,
    urlDocument: url,
    edit: MIME_TYPES_INE_EDITOR.includes(file.type) && isEditDocument,
    handleOnEdit: function handleOnEdit() {
      return setActiveIneEditor(true);
    }
  }), file && !rejected && activeIneEditor && _react.default.createElement(_DocumentEditor.default, {
    file: file,
    onChange: onCrop,
    urlDocument: url,
    cancel: function cancel() {
      return setActiveIneEditor(false);
    },
    title: title,
    currentFileIndex: currentFile
  }), file && !editable && rejected && _react.default.createElement(_FilePreview.default, {
    file: file,
    onDelete: function onDelete() {
      setFile(null);
    },
    disabled: true,
    urlDocument: url
  }), editable && rejected && getTheDropType(), multiple && files.length > 0 && _react.default.createElement(_FileFinder.default, {
    files: files,
    current: currentFile,
    onClick: handleOnClick,
    search: search,
    onSearch: handleOnSearch,
    placeholder: 'Buscar',
    disabled: true,
    disabledAdd: true
  }));
};

RejectDocuments.propTypes = {
  title: _propTypes.default.string.isRequired,
  onDrop: _propTypes.default.func.isRequired,
  onReject: _propTypes.default.func,
  url: _propTypes.default.any,
  rejectionOptions: _propTypes.default.array,
  rejectionDefaultNotes: _propTypes.default.array,
  rejectionData: _propTypes.default.object,
  onHandlerReject: _propTypes.default.func.isRequired,
  showUndo: _propTypes.default.bool,
  onUndoRejection: _propTypes.default.func,
  editable: _propTypes.default.bool,
  useEditorIne: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  fileConvertion: _propTypes.default.func,
  hideActions: _propTypes.default.bool,
  isEditDocument: _propTypes.default.bool,
  verify: _propTypes.default.object
};
RejectDocuments.defaultProps = {
  title: '',
  onDrop: function onDrop() {},
  onReject: function onReject() {},
  url: [],
  rejectionOptions: [],
  rejectionDefaultNotes: [],
  rejectionData: {
    reason: '',
    comments: ''
  },
  showUndo: false,
  onUndoRejection: function onUndoRejection() {},
  editable: true,
  useEditorIne: false,
  multiple: true,
  accept: '',
  fileConvertion: function fileConvertion() {},
  hideActions: false,
  isEditDocument: false,
  verify: {
    status: -1
  }
};
var _default = RejectDocuments;
exports.default = _default;