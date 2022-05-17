"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var ADD_COMMENT = 'Agregar comentario';
var REJECTION_REASON = 'Razón del rechazo';
var CLOSE = 'close';
var OPEN = 'open';
var CANCEL = 'Cancelar';
var REJECT = 'Rechazar';

var RejectTooltip = function RejectTooltip(props) {
  var content = (0, _react.useRef)();

  var _useState = (0, _react.useState)(CLOSE),
      _useState2 = _slicedToArray(_useState, 2),
      selectState = _useState2[0],
      setSelectState = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      reason = _useState4[0],
      setReason = _useState4[1];

  var _useState5 = (0, _react.useState)(''),
      _useState6 = _slicedToArray(_useState5, 2),
      comments = _useState6[0],
      setComments = _useState6[1];

  var isOtusidePopover = function isOtusidePopover(event) {
    return Boolean(content.current && !content.current.contains(event.target));
  };

  var isSelectClick = function isSelectClick() {
    return selectState === CLOSE;
  };

  var handleClick = function handleClick(event) {
    var onClose = props.onClose,
        active = props.active;

    if (active && isOtusidePopover(event) && isSelectClick()) {
      if (!rejectionDefaultNotes.length) setComments('');
    }
  };

  var handleClose = function handleClose() {
    var onClose = props.onClose;
    setReason('');
    setComments('');
    onClose();
  };

  var handleRejectReason = function handleRejectReason() {
    var handleReject = props.handleReject;
    setReason('');
    setComments('');
    handleReject({
      reason: reason,
      comments: comments
    });
  };

  var onChangeReason = function onChangeReason(value) {
    // rejectionOptions
    var index = rejectionOptions.findIndex(function (valueToFind) {
      return valueToFind.name === value;
    });
    setReason(value);

    if (index !== -1 && rejectionDefaultNotes.length && rejectionDefaultNotes.length > index) {
      var defaultNote = rejectionDefaultNotes[index];
      setComments(defaultNote);
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleClick);
    return function () {
      document.removeEventListener('click', handleClick);
    };
  });
  var active = props.active,
      rejectionOptions = props.rejectionOptions,
      rejectionDefaultNotes = props.rejectionDefaultNotes;
  var classes = (0, _style.default)();
  return /*#__PURE__*/_react.default.createElement("div", {
    ref: content,
    className: classes.content,
    style: {
      display: active ? 'flex' : 'none'
    }
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.select
  }, /*#__PURE__*/_react.default.createElement(_index.Select, {
    selected: reason,
    handleChange: onChangeReason,
    onClose: function onClose() {
      return setSelectState(CLOSE);
    },
    onOpen: function onOpen() {
      return setSelectState(OPEN);
    },
    label: REJECTION_REASON,
    options: rejectionOptions
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.textAreaContent
  }, /*#__PURE__*/_react.default.createElement("textarea", {
    placeholder: ADD_COMMENT,
    className: classes.textarea,
    value: comments,
    onChange: function onChange(e) {
      return setComments(e.target.value);
    }
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.footer
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: classes.cancelContent
  }, /*#__PURE__*/_react.default.createElement(_index.ButtonFlat, {
    className: classes.button,
    text: CANCEL,
    onClick: handleClose
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: classes.rejectContent
  }, /*#__PURE__*/_react.default.createElement(_index.ButtonFlat, {
    className: classes.button,
    text: REJECT,
    onClick: handleRejectReason,
    disabled: !reason
  }))));
};

RejectTooltip.propTypes = {
  active: _propTypes.default.bool,
  onClose: _propTypes.default.func,
  handleReject: _propTypes.default.func,
  rejectionOptions: _propTypes.default.array,
  rejectionDefaultNotes: _propTypes.default.array
};
RejectTooltip.defaultProps = {
  active: false,
  onClose: function onClose() {},
  handleReject: function handleReject() {},
  rejectionOptions: [],
  rejectionDefaultNotes: []
};
var _default = RejectTooltip;
exports.default = _default;