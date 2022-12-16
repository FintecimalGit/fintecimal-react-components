"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _style = _interopRequireDefault(require("./style"));

var _clsx4 = _interopRequireDefault(require("clsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Signer = function Signer(_ref) {
  var _id = _ref._id,
      label = _ref.label,
      status = _ref.status,
      score = _ref.score,
      onClick = _ref.onClick,
      isActualIndex = _ref.isActualIndex;
  console.log(score);
  var classes = (0, _style.default)();
  return _react.default.createElement(_core.Box, {
    id: _id,
    onClick: onClick,
    className: (0, _clsx4.default)(classes.signer, _defineProperty({}, classes.current, isActualIndex))
  }, _react.default.createElement(_core.Typography, {
    className: classes.label,
    component: "span"
  }, label), _react.default.createElement(_core.Typography, {
    className: (0, _clsx4.default)(classes.status, _defineProperty({}, classes.completed, status === 'Aceptado')),
    component: "span"
  }, status), _react.default.createElement(_core.Typography, {
    className: (0, _clsx4.default)(classes.score, _defineProperty({}, classes.completed, status === 'Aceptado')),
    component: "span"
  }, score ? "Score ".concat(score, "%") : ''));
};

var LivenessCarousel = function LivenessCarousel(_ref2) {
  var signers = _ref2.signers,
      onClick = _ref2.onClick;

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var classes = (0, _style.default)();

  var onChangeIndex = function onChangeIndex(index) {
    setCurrentIndex(index);
    onClick(index);
  };

  return _react.default.createElement(_core.Box, {
    className: classes.container
  }, signers.map(function (_ref3, index) {
    var _id = _ref3._id,
        status = _ref3.status,
        label = _ref3.label,
        score = _ref3.score;
    return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(Signer, {
      key: _id,
      id: _id,
      status: status,
      label: label,
      score: score,
      isActualIndex: currentIndex === index,
      onClick: function onClick() {
        return onChangeIndex(index);
      }
    }), index + 1 !== signers.length ? _react.default.createElement(_core.Divider, {
      orientation: "vertical",
      flexItem: true
    }) : '');
  }));
};

var _default = LivenessCarousel;
exports.default = _default;