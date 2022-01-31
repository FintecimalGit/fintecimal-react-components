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

var _DocumentButton = _interopRequireDefault(require("../nodes/DocumentButton"));

var _DocumentCrop = _interopRequireDefault(require("../DocumentCrop"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FRONT_INDEX = 0; // Note: for reversePhoto flow

var BACK_INDEX = 1; // Note: for reversePhoto flow

var IneEditor = function IneEditor(_ref) {
  var accept = _ref.accept,
      disabled = _ref.disabled,
      isIncorrect = _ref.isIncorrect,
      onChange = _ref.onChange,
      values = _ref.values,
      title = _ref.title,
      handleOnDelete = _ref.handleOnDelete,
      fileConvertion = _ref.fileConvertion;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      indexSide = _useState4[0],
      setIndexSide = _useState4[1];

  var clasess = (0, _style.default)();
  var filterValues = (0, _react.useMemo)(function () {
    return values.filter(function (value) {
      return value !== '';
    });
  }, [values]);

  var isPngType = function isPngType(file) {
    return file.type.split('/').pop() === 'png';
  };

  var convertUrlToFile =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(url) {
      var response, data, metadata, file;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (url) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return", '');

            case 2:
              _context.next = 4;
              return fetch(url);

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.blob();

            case 7:
              data = _context.sent;
              metadata = {
                type: data.type
              };
              file = new File([data], title, metadata);
              return _context.abrupt("return", file);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function convertUrlToFile(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleOnDrop =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(acceptedFiles, rejectedFiles, side) {
      var acceptFiles, convertedFiles;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!rejectedFiles.length) {
                _context2.next = 3;
                break;
              }

              onChange(acceptedFiles, rejectedFiles, side);
              return _context2.abrupt("return");

            case 3:
              if (!acceptedFiles.length) {
                _context2.next = 14;
                break;
              }

              acceptFiles = acceptedFiles[0];

              if (isPngType(acceptFiles)) {
                _context2.next = 12;
                break;
              }

              _context2.next = 8;
              return fileConvertion(acceptedFiles, 'cropConvertion');

            case 8:
              convertedFiles = _context2.sent;
              _context2.next = 11;
              return convertUrlToFile(convertedFiles);

            case 11:
              acceptFiles = _context2.sent;

            case 12:
              setFile(acceptFiles);
              setIndexSide(side);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleOnDrop(_x2, _x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var onCrop = function onCrop(event, blob) {
    console.log({
      blob: blob.type
    });
    var extension = blob.type.split('/').pop();
    var name = indexSide ? "Reverso.".concat(extension) : "Frontal.".concat(extension);
    var fileCropped = new File([blob], name, {
      type: blob.type
    });
    setFile(null);
    console.log(indexSide);
    onChange([fileCropped], [], indexSide);
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Card.default, {
    className: clasess.card
  }, _react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: title,
    action: !disabled && filterValues.length > 0 && _react.default.createElement(_IconButton.default, {
      className: clasess.iconButton,
      onClick: handleOnDelete
    }, _react.default.createElement(_Delete.default, null))
  }), _react.default.createElement("div", {
    className: clasess.container
  }, file ? _react.default.createElement(_DocumentCrop.default, {
    label: title,
    value: file,
    onCrop: onCrop,
    onBack: function onBack() {}
  }) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_DocumentButton.default, {
    text: "Frontal",
    side: FRONT_INDEX,
    isCompleted: Boolean(values[FRONT_INDEX]),
    accept: accept,
    disabled: disabled,
    isIncorrect: isIncorrect,
    onDrop: handleOnDrop
  }), _react.default.createElement(_DocumentButton.default, {
    text: "Reverso",
    side: BACK_INDEX,
    isCompleted: Boolean(values[BACK_INDEX]),
    accept: accept,
    disabled: disabled,
    isIncorrect: isIncorrect,
    onDrop: handleOnDrop
  })))));
};

IneEditor.propTypes = {
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  isIncorrect: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  values: _propTypes.default.array,
  title: _propTypes.default.string,
  handleOnDelete: _propTypes.default.func,
  fileConvertion: _propTypes.default.func
};
IneEditor.defaultProps = {
  accept: '',
  onDrop: function onDrop() {},
  disabled: false,
  isIncorrect: false,
  onChange: function onChange() {},
  values: [],
  title: '',
  handleOnDelete: function handleOnDelete() {},
  fileConvertion: function fileConvertion() {}
};
var _default = IneEditor;
exports.default = _default;