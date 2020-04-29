"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("moment/locale/es");

var _pickers = require("@material-ui/pickers");

var _moment = _interopRequireDefault(require("@date-io/moment"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var BaseDatePicker = function BaseDatePicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      onDateChange = _ref.onDateChange,
      format = _ref.format,
      disabled = _ref.disabled,
      minDate = _ref.minDate;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];
  /**
   *
   * @param {Date} _date
   */


  var handleDateChange = function handleDateChange(_date) {
    setDate(_date);
    onDateChange(_date);
  };

  (0, _react.useEffect)(function () {
    setDate(value);
  }, [value]);
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement(_pickers.MuiPickersUtilsProvider, {
    locale: "es",
    utils: _moment.default
  }, _react.default.createElement(_pickers.KeyboardDatePicker, {
    className: classes.datePicker,
    variant: "inline",
    inputVariant: "outlined",
    label: label,
    value: date,
    format: format,
    onChange: handleDateChange,
    disableToolbar: true,
    disabled: disabled,
    minDate: minDate
  })));
};

BaseDatePicker.propTypes = {
  label: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.string]),
  format: _propTypes.default.string,
  onDateChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  minDate: _propTypes.default.oneOfType([_propTypes.default.instanceOf(Date), _propTypes.default.string])
};
BaseDatePicker.defaultProps = {
  label: '',
  value: null,
  format: 'DD/MM/YYYY',
  onDateChange: function onDateChange() {},
  disabled: false,
  minDate: ''
};
var _default = BaseDatePicker;
exports.default = _default;