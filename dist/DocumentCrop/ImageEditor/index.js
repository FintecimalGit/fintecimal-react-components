"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Refresh = _interopRequireDefault(require("@material-ui/icons/Refresh"));

var _ZoomIn = _interopRequireDefault(require("@material-ui/icons/ZoomIn"));

var _ZoomOut = _interopRequireDefault(require("@material-ui/icons/ZoomOut"));

var _Crop = _interopRequireDefault(require("@material-ui/icons/Crop"));

var _OpenWith = _interopRequireDefault(require("@material-ui/icons/OpenWith"));

var _cropperjs = _interopRequireDefault(require("cropperjs"));

require("cropperjs/dist/cropper.css");

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FLIP_STEAP = -1;
var ROTATION_RIGHT = 90;
var ROTATION_LEFT = -90;
var MOVE = 'move';
var CROP = 'crop';

var ImageEditor = function ImageEditor(_ref) {
  var file = _ref.file,
      onCrop = _ref.onCrop,
      cancel = _ref.cancel;
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
  var flipImage = (0, _react.useCallback)(function () {
    if (!cropper) return;
    cropper.scale(horizontalScale, verticalScale);
    cropper.crop();
  }, [cropper, horizontalScale, verticalScale]);
  var rotate = (0, _react.useCallback)(function (rotationDirection) {
    var newRotation = rotation + rotationDirection;
    setRotation(newRotation);
  }, [rotation]);
  var rotateImage = (0, _react.useCallback)(function () {
    if (!cropper) return;
    cropper.rotateTo(rotation);
    cropper.crop();
  }, [cropper, rotation]);
  /*----------------Move----------------*/

  var changeMoveOrCropImageState = function changeMoveOrCropImageState(mode) {
    if (!cropper) return;
    cropper.setDragMode(mode);
  };
  /*****************Move****************/

  /*----------------Zoom----------------*/


  var zoomImage = (0, _react.useCallback)(function (zoomRatio) {
    if (!cropper) return;
    cropper.zoom(zoomRatio);
  }, [cropper]);
  /*****************Zoom****************/

  var cropImage = (0, _react.useCallback)( /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {
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
              cropper.setData(_objectSpread(_objectSpread({}, canvasData), {}, {
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

  var adjustImageHeight = function adjustImageHeight() {
    if (!containerRef.current) return 0;
    var imageHeight = containerRef.current.offsetHeight;
    return imageHeight;
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    ref: containerRef
  }, /*#__PURE__*/_react.default.createElement("div", {
    style: {
      height: adjustImageHeight(),
      position: 'relative'
    }
  }, /*#__PURE__*/_react.default.createElement("img", {
    ref: imageRef,
    alt: url,
    src: url,
    className: classes.img
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.actions
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    className: classes.actionContainer,
    container: true,
    spacing: 1,
    justify: "space-around"
  }, /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "outlined",
    fullWidth: true,
    color: "primary",
    onClick: function onClick() {
      return changeMoveOrCropImageState(MOVE);
    }
  }, /*#__PURE__*/_react.default.createElement(_OpenWith.default, null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "outlined",
    fullWidth: true,
    color: "primary",
    onClick: function onClick() {
      return changeMoveOrCropImageState(CROP);
    }
  }, /*#__PURE__*/_react.default.createElement(_Crop.default, null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "outlined",
    fullWidth: true,
    color: "primary",
    onClick: function onClick() {
      return zoomImage(0.1);
    }
  }, /*#__PURE__*/_react.default.createElement(_ZoomIn.default, null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "outlined",
    fullWidth: true,
    color: "primary",
    onClick: function onClick() {
      return zoomImage(-0.1);
    }
  }, /*#__PURE__*/_react.default.createElement(_ZoomOut.default, null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.button,
    style: {
      transform: 'scaleX(-1)'
    },
    variant: "outlined",
    fullWidth: true,
    color: "primary",
    onClick: function onClick() {
      return rotate(ROTATION_LEFT);
    }
  }, /*#__PURE__*/_react.default.createElement(_Refresh.default, null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sm: 6,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "outlined",
    fullWidth: true,
    color: "primary",
    onClick: function onClick() {
      return rotate(ROTATION_RIGHT);
    }
  }, /*#__PURE__*/_react.default.createElement(_Refresh.default, null))), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "contained",
    fullWidth: true,
    color: "primary",
    onClick: cancel
  }, "Cancelar")), /*#__PURE__*/_react.default.createElement(_Grid.default, {
    item: true,
    sm: 12,
    xs: 12
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "contained",
    fullWidth: true,
    color: "primary",
    onClick: cropImage
  }, "Listo"))))));
};

ImageEditor.propTypes = {
  file: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Blob), _propTypes.default.string]),
  onCrop: _propTypes.default.func,
  cancel: _propTypes.default.func
};
ImageEditor.defaultProps = {
  file: '',
  onCrop: function onCrop() {},
  cancel: function cancel() {}
};

var _default = /*#__PURE__*/(0, _react.memo)(ImageEditor);

exports.default = _default;