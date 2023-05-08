"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _defaults = require("./defaults");

var _RejectActions = _interopRequireDefault(require("../RejectActions"));

var _style = _interopRequireDefault(require("./style"));

var _RejectInputTableSigners = _interopRequireDefault(require("../RejectInputTableSigners"));

var _defaults2 = require("../RejectInputTableSigners/defaults");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RejectionInputTableSigners = function RejectionInputTableSigners(_ref) {
  var onReject = _ref.onReject,
      rejectionOptions = _ref.rejectionOptions,
      rejectionData = _ref.rejectionData,
      rejected = _ref.rejected,
      rejectionShowed = _ref.rejectionShowed,
      showUndo = _ref.showUndo,
      onUndoRejection = _ref.onUndoRejection,
      hideActions = _ref.hideActions,
      value = _ref.value,
      headers = _ref.headers,
      handleHeadersAndValues = _ref.handleHeadersAndValues,
      error = _ref.error,
      required = _ref.required,
      maxHeaders = _ref.maxHeaders,
      disabled = _ref.disabled;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)('none'),
      _useState2 = _slicedToArray(_useState, 2),
      forceDisplay = _useState2[0],
      setForceDisplay = _useState2[1];

  (0, _react.useEffect)(function () {
    setForceDisplay('none');
  }, [rejected]);

  var keep = function keep() {
    setForceDisplay('inline-block');
  };

  var leave = function leave() {
    setForceDisplay('none');
  };

  var getStyles = function getStyles() {
    return rejected ? {
      display: 'inline-block',
      right: '10px',
      left: '103%',
      transform: 'translate(50%, 50%)'
    } : {
      display: forceDisplay,
      top: '-45px'
    };
  };

  var handleUndoRejection = function handleUndoRejection() {
    setForceDisplay('none');
    onUndoRejection();
  };

  var _handlerReject = function handlerReject(value) {
    setForceDisplay('none');
    onReject(value);
  };

  return _react.default.createElement("div", {
    className: classes.list
  }, _react.default.createElement("div", {
    className: classes.listItemSecondaryContainer
  }, !hideActions && _react.default.createElement("div", {
    className: classes.rejectionActions,
    style: getStyles()
  }, _react.default.createElement(_RejectActions.default, {
    rejectionOptions: rejectionOptions,
    rejected: rejected,
    handlerReject: function handlerReject(value) {
      return _handlerReject(value);
    },
    rejectionData: rejectionData,
    onOpen: keep,
    onClose: leave,
    size: "small",
    rejectionShowed: rejectionShowed,
    showUndo: showUndo,
    onUndoRejection: function onUndoRejection() {
      return handleUndoRejection();
    }
  }))), _react.default.createElement(_RejectInputTableSigners.default, {
    value: value,
    headers: headers,
    handleHeadersAndValues: handleHeadersAndValues,
    error: error,
    required: required,
    maxHeaders: maxHeaders,
    disabled: disabled
  }));
};

RejectionInputTableSigners.propTypes = {
  onReject: _propTypes.default.func,
  rejectionOptions: _propTypes.default.array,
  rejectionData: _propTypes.default.shape({
    name: _propTypes.default.string,
    image: _propTypes.default.string,
    date: _propTypes.default.instanceOf(Date),
    reason: _propTypes.default.string,
    comments: _propTypes.default.string
  }),
  rejected: _propTypes.default.bool,
  rejectionShowed: _propTypes.default.bool,
  showUndo: _propTypes.default.bool,
  onUndoRejection: _propTypes.default.func,
  hideActions: _propTypes.default.bool,
  value: _propTypes.default.array,
  headers: _propTypes.default.array,
  handleHeadersAndValues: _propTypes.default.func,
  required: _propTypes.default.bool,
  error: _propTypes.default.bool,
  disabled: _propTypes.default.bool
};
RejectionInputTableSigners.defaultProps = {
  onReject: function onReject() {},
  rejectionOptions: [],
  rejectionData: {
    name: '',
    image: '',
    date: new Date(),
    reason: '',
    comments: ''
  },
  rejected: false,
  rejectionShowed: true,
  showUndo: false,
  onUndoRejection: function onUndoRejection() {},
  hideActions: false,
  value: _defaults2.defaultRejectDataSigner,
  headers: _defaults.defaultHeaderSigner,
  required: false,
  error: false,
  handleHeadersAndValues: function handleHeadersAndValues() {},
  disabled: false
};
var _default = RejectionInputTableSigners;
exports.default = _default;