"use strict";

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RejectActions = function RejectActions(_ref) {
  var rejectionData = _ref.rejectionData,
      rejectionOptions = _ref.rejectionOptions,
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

  var noteRef = (0, _react.createRef)();
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
    var newData = _objectSpread2({}, mRejectionData, {}, data);

    setRejected(true);
    setRejectionData(newData);
    handlerReject(data);
    setShowPopover(!showUndo);
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
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_index.RejectButton, {
    noteOpen: showPopover,
    rejected: mRejected,
    onClick: onClick,
    onClickMessage: onClickMessage,
    size: size,
    editable: mRejected
  }), _react.default.createElement(_core.Popover, {
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
  }, mRejected && showPopover ? _react.default.createElement(_RejectionNote.default, _extends({
    onClose: onClosePopOver
  }, mRejectionData, {
    showUndo: showUndo,
    onUndoRejection: function onUndoRejection() {
      return handleUndoRejection();
    },
    ref: noteRef
  })) : showPopover && _react.default.createElement(_index.RejectTooltip, {
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
  size: 'large',
  rejectionShowed: true,
  showUndo: false,
  onUndoRejection: function onUndoRejection() {}
};
RejectActions.propTypes = {
  rejected: _propTypes.default.bool.isRequired,
  rejectionData: _propTypes.default.object,
  rejectionOptions: _propTypes.default.array,
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