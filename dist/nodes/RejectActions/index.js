"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../index");

var _core = require("@material-ui/core");

var _RejectionNote = _interopRequireDefault(require("../../RejectionNote"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RejectActions = function RejectActions(_ref) {
  var rejectionData = _ref.rejectionData,
      rejectionOptions = _ref.rejectionOptions,
      handlerReject = _ref.handlerReject,
      rejected = _ref.rejected,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      size = _ref.size;

  var _useState = (0, _react.useState)(rejected),
      _useState2 = _slicedToArray(_useState, 2),
      mRejected = _useState2[0],
      setRejected = _useState2[1];

  var _useState3 = (0, _react.useState)(rejectionData),
      _useState4 = _slicedToArray(_useState3, 2),
      mRejectionData = _useState4[0],
      setRejectionData = _useState4[1];

  var _useState5 = (0, _react.useState)(null),
      _useState6 = _slicedToArray(_useState5, 2),
      anchorElement = _useState6[0],
      setAnchorElement = _useState6[1];

  var onClick = function onClick(event) {
    event.stopPropagation();
    onOpen(event);
    setAnchorElement(event.currentTarget);
  };

  var onClickMessage = function onClickMessage(event) {
    event.stopPropagation();
    onOpen(event);
    setAnchorElement(event.currentTarget);
  };

  var handleReject = function handleReject(data) {
    var newData = _objectSpread({}, mRejectionData, {}, data);

    setRejectionData(newData);
    setRejected(true);
    handlerReject(data);
  };

  var onClosePopOver = function onClosePopOver(event) {
    onClose(event);
    setAnchorElement(null);
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.RejectButton, {
    noteOpen: Boolean(anchorElement),
    rejected: mRejected,
    onClick: onClick,
    onClickMessage: onClickMessage,
    size: size
  }), _react.default.createElement(_core.Popover, {
    anchorEl: anchorElement,
    open: Boolean(anchorElement),
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    }
  }, mRejected ? _react.default.createElement(_RejectionNote.default, _extends({
    onClose: onClosePopOver
  }, mRejectionData)) : _react.default.createElement(_index.RejectTooltip, {
    active: true,
    onClose: onClosePopOver,
    handleReject: handleReject,
    rejectionOptions: rejectionOptions
  })));
};

RejectActions.defaultProps = {
  rejectionData: {},
  rejectionOptions: [],
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  size: 'large'
};
RejectActions.propTypes = {
  rejected: _propTypes.default.bool.isRequired,
  rejectionData: _propTypes.default.object,
  rejectionOptions: _propTypes.default.array,
  handlerReject: _propTypes.default.func.isRequired,
  onOpen: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func,
  size: _propTypes.default.oneOf(['large', 'small'])
};
var _default = RejectActions;
exports.default = _default;