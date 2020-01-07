"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Remove = _interopRequireDefault(require("@material-ui/icons/Remove"));

var _Undo = _interopRequireDefault(require("@material-ui/icons/Undo"));

var _Redo = _interopRequireDefault(require("@material-ui/icons/Redo"));

var _style = _interopRequireDefault(require("./style"));

var _HeaderCard = _interopRequireDefault(require("../../HeaderCard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var INITIAL_SCALE = 1;
var MIN_SCALE = 1;
var MAX_SCALE = 2;
var SCALE = 0.1;
var INITIAL_DEG = 0;
var MAX_DEG_LEFT = -360;
var MAX_DEG_RIGHT = 360;
var DEG = 90;

var Identification = function Identification(_ref) {
  var title = _ref.title,
      image = _ref.image;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      tab = _useState2[0],
      setTab = _useState2[1];

  var _useState3 = (0, _react.useState)(INITIAL_SCALE),
      _useState4 = _slicedToArray(_useState3, 2),
      scale = _useState4[0],
      setScale = _useState4[1];

  var _useState5 = (0, _react.useState)(INITIAL_DEG),
      _useState6 = _slicedToArray(_useState5, 2),
      deg = _useState6[0],
      setDeg = _useState6[1];

  var onChange = function onChange(event, value) {
    setTab(value);
    setScale(INITIAL_SCALE);
    setDeg(INITIAL_DEG);
  };

  var increaseZoom = function increaseZoom() {
    if (scale < MAX_SCALE) setScale(scale + SCALE);
  };

  var decreaseZoom = function decreaseZoom() {
    if (scale > MIN_SCALE) setScale(scale - SCALE);
  };

  var rotateLeft = function rotateLeft() {
    if (deg - DEG === MAX_DEG_LEFT) setDeg(0);else setDeg(deg - DEG);
  };

  var rotateRight = function rotateRight() {
    if (deg + DEG === MAX_DEG_RIGHT) setDeg(0);else setDeg(deg + DEG);
  };

  return _react.default.createElement(_HeaderCard.default, {
    title: title
  }, _react.default.createElement("div", {
    className: classes.imageContainer
  }, _react.default.createElement("img", {
    className: classes.image,
    alt: image.name,
    src: image.url,
    style: {
      transform: "scale(".concat(scale, ") rotate(").concat(deg, "deg)")
    }
  })), _react.default.createElement("div", {
    className: classes.footer
  }, _react.default.createElement("div", {
    className: classes.buttonBar
  }, _react.default.createElement(_IconButton.default, {
    onClick: increaseZoom,
    className: classes.button,
    size: "small"
  }, _react.default.createElement(_Add.default, {
    fontSize: "inherit"
  })), _react.default.createElement(_IconButton.default, {
    onClick: decreaseZoom,
    className: classes.button,
    size: "small"
  }, _react.default.createElement(_Remove.default, {
    fontSize: "inherit"
  }))), _react.default.createElement("div", {
    className: classes.buttonBar
  }, _react.default.createElement(_IconButton.default, _defineProperty({
    onClick: rotateLeft,
    className: classes.button,
    size: "small"
  }, "size", "small"), _react.default.createElement(_Undo.default, {
    fontSize: "inherit"
  })), _react.default.createElement(_IconButton.default, {
    onClick: rotateRight,
    className: classes.button,
    size: "small"
  }, _react.default.createElement(_Redo.default, {
    fontSize: "inherit"
  })))));
};

Identification.propTypes = {
  title: _propTypes.default.string,
  images: _propTypes.default.array
};
Identification.defaultProps = {
  title: '',
  image: {
    key: 'INE',
    name: 'Frente',
    url: 'http://www.liberaldictionary.com/wp-content/uploads/2019/02/id-9688.jpg'
  }
};
var _default = Identification;
exports.default = _default;