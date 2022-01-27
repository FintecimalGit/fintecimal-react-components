"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _CropLandscape = _interopRequireDefault(require("@material-ui/icons/CropLandscape"));

var _CropPortrait = _interopRequireDefault(require("@material-ui/icons/CropPortrait"));

var _Refresh = _interopRequireDefault(require("@material-ui/icons/Refresh"));

var _cropperjs = _interopRequireDefault(require("cropperjs"));

require("cropperjs/dist/cropper.css");

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FLIP_STEAP = -1;
var ROTATION_STEAP = 90;

var ImageEditor = function ImageEditor(_ref) {
  var file = _ref.file,
      onCrop = _ref.onCrop;
  var classes = (0, _style.default)();
  var imageRef = (0, _react.useRef)(null);
  var containerRef = (0, _react.useRef)(_react.useRef);
  var actionsContainerRef = (0, _react.useRef)(_react.useRef);

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      cropper = _useState2[0],
      setCropper = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      _useState4 = _slicedToArray(_useState3, 2),
      horizontalScale = _useState4[0],
      setHorizontalScale = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      verticalScale = _useState6[0],
      setVerticalScale = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      rotation = _useState8[0],
      setRotation = _useState8[1];

  var destroyCropper = (0, _react.useCallback)(function () {
    if (cropper) cropper.destroy();
  }, [cropper]);
  var initializeCroppper = (0, _react.useCallback)(function () {
    var _cropper = new _cropperjs.default(imageRef.current, {
      checkCrossOrigin: true,
      responsive: true,
      viewMode: 0,
      // 0, 1, 2 , 3
      zoomable: true,
      scalable: true,
      rotatable: true,
      ready: function ready() {
        this.cropper.zoom(0);
        this.cropper.crop();
      }
    });

    setCropper(_cropper);
  }, [imageRef]);
  var startCropper = (0, _react.useCallback)(function () {
    destroyCropper();
    initializeCroppper();
  }, [initializeCroppper, destroyCropper]);
  var flipHorizontal = (0, _react.useCallback)(function () {
    var newScale = horizontalScale * FLIP_STEAP;
    setHorizontalScale(newScale);
  }, [horizontalScale]);
  var flipVertical = (0, _react.useCallback)(function () {
    var newScale = verticalScale * FLIP_STEAP;
    setVerticalScale(newScale);
  }, [verticalScale]);
  var flipImage = (0, _react.useCallback)(function () {
    if (!cropper) return;
    cropper.scale(horizontalScale, verticalScale);
    cropper.crop();
  }, [cropper, horizontalScale, verticalScale]);
  var rotateRigth = (0, _react.useCallback)(function () {
    var newRotation = rotation + ROTATION_STEAP;
    setRotation(newRotation);
  }, [rotation]);
  var rotateImage = (0, _react.useCallback)(function () {
    if (!cropper) return;
    cropper.rotateTo(rotation);
    cropper.crop();
  }, [cropper, rotation]);
  var cropImage = (0, _react.useCallback)(
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event) {
      var canvasData, canvas, blob;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (cropper) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              canvasData = cropper.getData();
              cropper.setData(_objectSpread2({}, canvasData, {
                height: canvasData.height + 40,
                width: canvasData.width + 40,
                x: canvasData.x - 20,
                y: canvasData.y - 20
              }));
              canvas = cropper.getCroppedCanvas();
              _context.next = 7;
              return new Promise(function (resolve) {
                canvas.toBlob(resolve);
              });

            case 7:
              blob = _context.sent;
              onCrop(event, blob);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [cropper, onCrop]);
  var url = (0, _react.useMemo)(function () {
    return file instanceof Blob ? URL.createObjectURL(file) : file;
  }, [file]);
  (0, _react.useEffect)(function () {
    startCropper();
  }, [url]);
  (0, _react.useEffect)(function () {
    flipImage();
  }, [horizontalScale, verticalScale, flipImage]);
  (0, _react.useEffect)(function () {
    rotateImage();
  }, [rotation, rotateImage]);
  return _react.default.createElement("div", {
    ref: containerRef
  }, _react.default.createElement("div", {
    style: {
      height: containerRef.current && actionsContainerRef.current && containerRef.current.offsetHeight - actionsContainerRef.current.offsetHeight || 0
    }
  }, _react.default.createElement("img", {
    ref: imageRef,
    alt: url,
    src: url,
    className: classes.img
  })), _react.default.createElement("div", {
    ref: actionsContainerRef
  }, _react.default.createElement(_Grid.default, {
    className: classes.actionContainer,
    container: true,
    spacing: 1,
    justify: "space-around"
  }, _react.default.createElement(_Grid.default, {
    item: true,
    sm: 3,
    xs: 4
  }, _react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "outlined",
    fullWidth: true,
    color: "primary",
    onClick: flipHorizontal
  }, _react.default.createElement(_CropLandscape.default, null), "Horizontal")), _react.default.createElement(_Grid.default, {
    item: true,
    sm: 3,
    xs: 4
  }, _react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "outlined",
    fullWidth: true,
    color: "primary",
    onClick: flipVertical
  }, _react.default.createElement(_CropPortrait.default, null), "Vertical")), _react.default.createElement(_Grid.default, {
    item: true,
    sm: 3,
    xs: 4
  }, _react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "outlined",
    fullWidth: true,
    color: "primary",
    onClick: rotateRigth
  }, _react.default.createElement(_Refresh.default, null), "Girar")), _react.default.createElement(_Grid.default, {
    item: true,
    sm: 3,
    xs: 12
  }, _react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "contained",
    fullWidth: true,
    color: "primary",
    onClick: cropImage
  }, "Recortar")))));
};

ImageEditor.propTypes = {
  file: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Blob), _propTypes.default.string]),
  onCrop: _propTypes.default.func
};
ImageEditor.defaultProps = {
  file: '',
  onCrop: function onCrop() {}
};

var _default = (0, _react.memo)(ImageEditor);

exports.default = _default;