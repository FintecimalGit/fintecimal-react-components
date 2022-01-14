"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames3 = _interopRequireDefault(require("classnames"));

var _pdf = _interopRequireDefault(require("pdfjs-dist/build/pdf"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Visibility = _interopRequireDefault(require("@material-ui/icons/Visibility"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

_pdf.default.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.228/pdf.min.js';

var FileThumbnail = function FileThumbnail(_ref) {
  var file = _ref.file,
      selected = _ref.selected,
      onClick = _ref.onClick,
      isOver = _ref.isOver;
  var clasess = (0, _style.default)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];
  /**
   *
   * @param {String} type 
   * @returns {Boolean}
   */


  var isPDF = function isPDF(type) {
    return /application\/pdf/.test(type);
  };
  /**
   *
   * @param {String} type 
   * @returns {Boolean}
   */


  var isImage = function isImage(type) {
    return /^image\//.test(type);
  };
  /**
   * @returns {Promise}
   */


  var fileToBase64 = function fileToBase64() {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onloadend = function () {
        resolve(reader.result);
      };
    });
  };
  /**
   * @returns {Promise}
   */


  var fileToUint8Array = function fileToUint8Array() {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(file);

      reader.onloadend = function () {
        resolve(new Uint8Array(reader.result));
      };
    });
  };
  /**
   * 
   * @param {Number} page
   * @returns {DOMElement}
   */


  var transformPageToCanvas =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(page) {
      var pageVp, canvas;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              pageVp = page.getViewport({
                scale: 1
              });
              canvas = document.createElement('canvas');
              canvas.width = pageVp.width;
              canvas.height = pageVp.height;
              _context.next = 6;
              return page.render({
                canvasContext: canvas.getContext('2d'),
                viewport: pageVp
              }).promise;

            case 6:
              return _context.abrupt("return", canvas);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function transformPageToCanvas(_x) {
      return _ref2.apply(this, arguments);
    };
  }();
  /**
   * 
   * @param {Object} pdf 
   */


  var transformFirstPDFPageToImage = function transformFirstPDFPageToImage(pdf) {
    pdf.getPage(1).then(
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(page) {
        var canvasPDF, thumbnailPDF;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return transformPageToCanvas(page);

              case 2:
                canvasPDF = _context2.sent;
                thumbnailPDF = canvasPDF.toDataURL();
                setUrl(thumbnailPDF);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }());
  };

  var readPDF =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3() {
      var _file, pdf;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return fileToUint8Array();

            case 3:
              _file = _context3.sent;
              _context3.next = 6;
              return _pdf.default.getDocument(_file).promise;

            case 6:
              pdf = _context3.sent;
              _context3.next = 9;
              return transformFirstPDFPageToImage(pdf);

            case 9:
              _context3.next = 14;
              break;

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](0);
              setUrl('');

            case 14:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 11]]);
    }));

    return function readPDF() {
      return _ref4.apply(this, arguments);
    };
  }();

  var readImage =
  /*#__PURE__*/
  function () {
    var _ref5 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var _file2;

      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return fileToBase64();

            case 3:
              _file2 = _context4.sent;
              setUrl(_file2);
              _context4.next = 10;
              break;

            case 7:
              _context4.prev = 7;
              _context4.t0 = _context4["catch"](0);
              setUrl('');

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 7]]);
    }));

    return function readImage() {
      return _ref5.apply(this, arguments);
    };
  }();

  var handleOnClick = function handleOnClick() {
    onClick(file);
  };

  (0, _react.useEffect)(function () {
    var type = file.type;
    if (isPDF(type)) readPDF();
    if (isImage(type)) readImage();
  }, [file]);
  return _react.default.createElement("div", {
    className: clasess.root,
    onClick: handleOnClick
  }, _react.default.createElement("div", {
    className: (0, _classnames3.default)(clasess.imageContainer, _defineProperty({}, clasess.isOver, isOver))
  }, _react.default.createElement("img", {
    alt: file.name,
    src: url,
    className: clasess.image
  }), _react.default.createElement("div", {
    className: clasess.selector,
    style: selected ? {
      display: 'flex'
    } : {}
  }, _react.default.createElement(_Visibility.default, null))), _react.default.createElement(_Typography.default, {
    className: (0, _classnames3.default)(clasess.typography, _defineProperty({}, clasess.typographySelected, selected))
  }, file.name));
};

FileThumbnail.propTypes = {
  file: _propTypes.default.instanceOf(File),
  selected: _propTypes.default.bool,
  isOver: _propTypes.default.bool
};
FileThumbnail.defaultProps = {
  file: new File([''], '', {
    type: ''
  }),
  selected: false,
  isOver: false
};
var _default = FileThumbnail;
exports.default = _default;