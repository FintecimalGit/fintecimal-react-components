"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/es");

var _pickers = require("@material-ui/pickers");

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _moment2 = _interopRequireDefault(require("@date-io/moment"));

var _style = _interopRequireDefault(require("./style"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _utils = require("../../commons/utils");

var _InputStrings = require("../../InputStrings");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BaseDatePicker = function BaseDatePicker(_ref) {
  var disableToolBar = _ref.disableToolBar,
      label = _ref.label,
      value = _ref.value,
      onDateChange = _ref.onDateChange,
      format = _ref.format,
      disabled = _ref.disabled,
      minDate = _ref.minDate,
      required = _ref.required,
      error = _ref.error;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)((0, _moment.default)()),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var _useState3 = (0, _react.useState)(error),
      _useState4 = _slicedToArray(_useState3, 2),
      mError = _useState4[0],
      setMError = _useState4[1];

  var _useState5 = (0, _react.useState)(label),
      _useState6 = _slicedToArray(_useState5, 2),
      mLabel = _useState6[0],
      setMLabel = _useState6[1];
  /**
   *
   * @param {Date} _date
   */


  var handleDateChange = function handleDateChange(_date) {
    setDate(_date);
    var formattedDate = format && _date ? (0, _moment.default)(_date).format(format) : _date;

    if (!formattedDate && required) {
      setMError(true);
    } else {
      setMError(false);
    }

    onDateChange(formattedDate);
  };

  var mOnBlur = function mOnBlur() {
    if ((0, _utils.isEmpty)(date) && required) {
      setMError(true);
    } else {
      setMError(false);
    }
  };

  var IsClearDisable = function IsClearDisable(_ref2) {
    var isDisable = _ref2.isDisable;
    return isDisable ? null : _react.default.createElement(_IconButton.default, {
      onClick: function onClick(e) {
        e.stopPropagation();
        handleDateChange(null);
      }
    }, _react.default.createElement(_Clear.default, null));
  };

  (0, _react.useEffect)(function () {
    var mValue = format && value ? (0, _moment.default)(value).format(format) : value;
    setDate(mValue);
  }, [value]);
  (0, _react.useEffect)(function () {
    var messageError = (0, _InputStrings.generateErrorMessagesByLabel)(_InputStrings.text, label);

    if (error && !mError) {
      setMError(true);
      setMLabel(messageError.empty);
    } else if (mError) {
      setMLabel(messageError.empty);
    } else {
      setMLabel(label);
    }
  }, [error, mError]);
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    locale: "es",
    utils: _moment2.default
  }, _react.default.createElement(_pickers.KeyboardDatePicker, {
    className: (0, _classnames2.default)(classes.datePicker, _defineProperty({}, classes.error, mError)),
    variant: "inline",
    inputVariant: "outlined",
    label: _react.default.createElement(_react.default.Fragment, null, mLabel, required && _react.default.createElement("span", {
      className: classes.asterisk
    }, "*")),
    value: date ? date : null,
    format: format,
    onChange: handleDateChange,
    disableToolbar: disableToolBar,
    disabled: disabled,
    minDate: minDate,
    onBlur: mOnBlur,
    InputProps: {
      endAdornment: _react.default.createElement(IsClearDisable, {
        isDisable: disabled
      })
    },
    InputAdornmentProps: {
      position: date ? "none" : "end"
    }
  })));
};

BaseDatePicker.propTypes = {
  label: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.string]),
  format: _propTypes.default.string,
  onDateChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  minDate: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.string]),
  disableToolBar: _propTypes.default.bool,
  required: _propTypes.default.bool,
  error: _propTypes.default.bool
};
BaseDatePicker.defaultProps = {
  label: '',
  disableToolBar: false,
  value: null,
  format: '',
  onDateChange: function onDateChange() {},
  disabled: false,
  minDate: (0, _moment.default)().subtract(100, 'years'),
  maxDate: (0, _moment.default)().subtract(10, 'years'),
  required: false,
  error: false
};
var _default = BaseDatePicker;
exports.default = _default;