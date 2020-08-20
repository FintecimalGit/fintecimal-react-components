"use strict";

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      multiple = _ref.multiple;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

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

  (0, _react.useEffect)(function () {
    if (url !== '' && typeof url === "string") generateFileToURL();
  }, [url]);

  var handleOnDrop = function handleOnDrop(value) {
    onHandlerReject(value);
    setFile(value[0]);
  };

  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.titleContainer
  }, _react.default.createElement("div", {
    className: classes.titleLine
  }, _react.default.createElement(_Typography.default, {
    className: classes.title
  }, title)), _react.default.createElement("div", {
    className: classes.rejectAction
  }, _react.default.createElement(_RejectActions.default, {
    rejectionOptions: rejectionOptions,
    handlerReject: onReject,
    rejected: rejected,
    size: "small",
    rejectionData: rejectionData,
    showUndo: showUndo,
    onUndoRejection: onUndoRejection
  }))), file && !rejected && _react.default.createElement(_FilePreview.default, {
    file: file,
    onDelete: function onDelete() {
      setFile(null);
    },
    disabled: !rejected,
    urlDocument: url
  }), file && !editable && rejected && _react.default.createElement(_FilePreview.default, {
    file: file,
    onDelete: function onDelete() {
      setFile(null);
    },
    disabled: true,
    urlDocument: url
  }), editable && rejected && _react.default.createElement(_DropZone.default, {
    onDrop: handleOnDrop,
    isIncorrect: true,
    multiple: multiple
  }));
};

RejectDocuments.propTypes = {
  title: _propTypes.default.string.isRequired,
  onDrop: _propTypes.default.func.isRequired,
  onReject: _propTypes.default.func,
  url: _propTypes.default.string,
  rejectionOptions: _propTypes.default.array,
  rejectionData: _propTypes.default.object,
  onHandlerReject: _propTypes.default.func.isRequired,
  showUndo: _propTypes.default.bool,
  onUndoRejection: _propTypes.default.func,
  editable: _propTypes.default.bool,
  multiple: _propTypes.default.bool
};
RejectDocuments.defaultProps = {
  title: '',
  onDrop: function onDrop() {},
  onReject: function onReject() {},
  url: '',
  rejectionOptions: [],
  rejectionData: {
    reason: '',
    comments: ''
  },
  showUndo: false,
  onUndoRejection: function onUndoRejection() {},
  editable: true,
  multiple: false
};
var _default = RejectDocuments;
exports.default = _default;