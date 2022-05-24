"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CustomField = _interopRequireDefault(require("./component/CustomField"));

var _RejectActions = _interopRequireDefault(require("../nodes/RejectActions"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RejectionField = function RejectionField(_ref) {
  var field = _ref.field,
      onReject = _ref.onReject,
      rejectionOptions = _ref.rejectionOptions,
      rejectionData = _ref.rejectionData,
      rejected = _ref.rejected,
      rejectionShowed = _ref.rejectionShowed,
      onHandlerInput = _ref.onHandlerInput,
      showUndo = _ref.showUndo,
      onUndoRejection = _ref.onUndoRejection,
      editable = _ref.editable,
      hideActions = _ref.hideActions;
  var classes = (0, _style.default)();
  var _field$fieldType = field.fieldType,
      type = _field$fieldType === void 0 ? '' : _field$fieldType,
      _field$label = field.label,
      label = _field$label === void 0 ? '' : _field$label,
      _field$value = field.value,
      value = _field$value === void 0 ? '' : _field$value,
      _field$config = field.config,
      config = _field$config === void 0 ? {} : _field$config;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      mvalue = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)('none'),
      _useState4 = _slicedToArray(_useState3, 2),
      forceDisplay = _useState4[0],
      setForceDisplay = _useState4[1];

  var required = config.required,
      data = config.data,
      minDate = config.minDate,
      format = config.format,
      options = config.options;
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

  var handleChange = function handleChange(newValue) {
    setValue(newValue);
  };

  var handleBlur = function handleBlur() {
    if (mvalue && mvalue !== '') onHandlerInput(mvalue);
  };

  var handleDatechange = function handleDatechange(newValue) {
    onHandlerInput(newValue.toString());
  };

  (0, _react.useEffect)(function () {
    if (mvalue !== value) setValue(field.value);
  }, [value]);
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
  }))), _react.default.createElement(_CustomField.default, {
    type: type,
    label: label,
    value: mvalue,
    disabled: !editable || !rejected,
    handleChange: handleChange,
    onDateChange: handleDatechange,
    error: rejected,
    errorMessage: "",
    handleBlur: handleBlur,
    options: options,
    required: required,
    data: data,
    minDate: minDate,
    format: format
  }));
};

RejectionField.propTypes = {
  field: _propTypes.default.object,
  onReject: _propTypes.default.func,
  rejectionOptions: _propTypes.default.array,
  rejectionData: _propTypes.default.shape({
    name: _propTypes.default.string,
    image: _propTypes.default.string,
    date: _propTypes.default.instanceOf(Date),
    reason: _propTypes.default.string,
    comments: _propTypes.default.string
  }),
  rejectionShowed: _propTypes.default.bool,
  onHandlerInput: _propTypes.default.func,
  editable: _propTypes.default.bool,
  showUndo: _propTypes.default.bool,
  onUndoRejection: _propTypes.default.func,
  hideActions: _propTypes.default.bool
};
RejectionField.defaultProps = {
  field: {},
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
  onHandlerInput: function onHandlerInput() {},
  editable: true,
  showUndo: false,
  onUndoRejection: function onUndoRejection() {},
  hideActions: false
};
var _default = RejectionField;
exports.default = _default;