"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _index = require("../index");

var _core = require("@material-ui/core");

var _RejectionNote = _interopRequireDefault(require("../../RejectionNote"));

var _useClickOutside = _interopRequireDefault(require("../../hooks/useClickOutside"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RejectActions = function RejectActions(_ref) {
  var rejectionData = _ref.rejectionData,
      rejectionOptions = _ref.rejectionOptions,
      rejectionDefaultNotes = _ref.rejectionDefaultNotes,
      handlerReject = _ref.handlerReject,
      rejected = _ref.rejected,
      onOpen = _ref.onOpen,
      onClose = _ref.onClose,
      size = _ref.size,
      rejectionShowed = _ref.rejectionShowed,
      showUndo = _ref.showUndo,
      onUndoRejection = _ref.onUndoRejection;

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

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showPopover = _useState8[0],
      setShowPopover = _useState8[1];

  var noteRef = /*#__PURE__*/(0, _react.createRef)();
  (0, _react.useEffect)(function () {
    setRejected(rejected);
  }, [rejected]);
  (0, _useClickOutside.default)(noteRef, function () {
    if (showPopover) {
      onClosePopOver();
    }
  });

  var onClick = function onClick(event) {
    event.stopPropagation();
    onOpen(event);
    setAnchorElement(event.currentTarget);
    setShowPopover(true);
  };

  var onClickMessage = function onClickMessage(event) {
    event.stopPropagation();
    onOpen(event);
    setAnchorElement(event.currentTarget);
    setShowPopover(true);
  };

  var handleReject = function handleReject(data) {
    var newData = _objectSpread(_objectSpread({}, mRejectionData), data);

    setRejected(true);
    setRejectionData(newData);
    handlerReject(data);
    setShowPopover(false);
  };

  var onClosePopOver = function onClosePopOver(event) {
    onClose(event);
    setAnchorElement(null);
    setShowPopover(false);
  };

  var handleUndoRejection = function handleUndoRejection() {
    setShowPopover(false);
    onUndoRejection();
  };

  if (rejectionShowed === false) return null;
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_index.RejectButton, {
    noteOpen: showPopover,
    rejected: mRejected,
    onClick: onClick,
    onClickMessage: onClickMessage,
    size: size,
    editable: mRejected
  }), /*#__PURE__*/_react.default.createElement(_core.Popover, {
    anchorEl: anchorElement,
    open: showPopover,
    anchorOrigin: {
      vertical: 'top',
      horizontal: 'right'
    },
    transformOrigin: {
      vertical: 'bottom',
      horizontal: 'left'
    }
  }, mRejected && showPopover ? /*#__PURE__*/_react.default.createElement(_RejectionNote.default, _extends({
    onClose: onClosePopOver
  }, mRejectionData, {
    showUndo: showUndo,
    onUndoRejection: function onUndoRejection() {
      return handleUndoRejection();
    },
    ref: noteRef
  })) : showPopover && /*#__PURE__*/_react.default.createElement(_index.RejectTooltip, {
    active: true,
    onClose: onClosePopOver,
    handleReject: handleReject,
    rejectionOptions: rejectionOptions,
    rejectionDefaultNotes: rejectionDefaultNotes
  })));
};

RejectActions.defaultProps = {
  rejectionData: {},
  rejectionOptions: [],
  rejectionDefaultNotes: [],
  onOpen: function onOpen() {},
  onClose: function onClose() {},
  size: 'large',
  rejectionShowed: true,
  showUndo: false,
  onUndoRejection: function onUndoRejection() {}
};
RejectActions.propTypes = {
  rejected: _propTypes.default.bool.isRequired,
  rejectionData: _propTypes.default.object,
  rejectionOptions: _propTypes.default.array,
  rejectionDefaultNotes: _propTypes.default.array,
  handlerReject: _propTypes.default.func.isRequired,
  onOpen: _propTypes.default.func.isRequired,
  onClose: _propTypes.default.func,
  size: _propTypes.default.oneOf(['large', 'small']),
  rejectionShowed: _propTypes.default.bool,
  showUndo: _propTypes.default.bool,
  onUndoRejection: _propTypes.default.func
};
var _default = RejectActions;
exports.default = _default;