"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

var _index = require("../index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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
      setReason('');
      setComments('');
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

  (0, _react.useEffect)(function () {
    document.addEventListener('click', handleClick);
    return function () {
      document.removeEventListener('click', handleClick);
    };
  });
  var active = props.active,
      rejectionOptions = props.rejectionOptions;
  var classes = (0, _style.default)();
  return _react.default.createElement("div", {
    ref: content,
    className: classes.content,
    style: {
      display: active ? 'flex' : 'none'
    }
  }, _react.default.createElement("div", {
    className: classes.select
  }, _react.default.createElement(_index.Select, {
    selected: reason,
    handleChange: function handleChange(value) {
      return setReason(value);
    },
    onClose: function onClose() {
      return setSelectState(CLOSE);
    },
    onOpen: function onOpen() {
      return setSelectState(OPEN);
    },
    label: REJECTION_REASON,
    options: rejectionOptions
  })), _react.default.createElement("div", {
    className: classes.textAreaContent
  }, _react.default.createElement("textarea", {
    placeholder: ADD_COMMENT,
    className: classes.textarea,
    value: comments,
    onChange: function onChange(e) {
      return setComments(e.target.value);
    }
  })), _react.default.createElement("div", {
    className: classes.footer
  }, _react.default.createElement("div", {
    className: classes.cancelContent
  }, _react.default.createElement(_index.ButtonFlat, {
    className: classes.button,
    text: CANCEL,
    onClick: handleClose
  })), _react.default.createElement("div", {
    className: classes.rejectContent
  }, _react.default.createElement(_index.ButtonFlat, {
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
  rejectionOptions: _propTypes.default.array
};
RejectTooltip.defaultProps = {
  active: false,
  onClose: function onClose() {},
  handleReject: function handleReject() {},
  rejectionOptions: []
};
var _default = RejectTooltip;
exports.default = _default;