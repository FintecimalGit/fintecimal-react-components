"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var LOCALE = 'es';
var TYPEABLE_INPUT_FORMAT = 'DD/MM/YYYY';
var INVALID_DATE_MESSAGE = 'Fecha inválida';
var OUT_OF_RANGE_MESSAGE = 'La fecha está fuera del rango permitido';

_moment.default.locale(LOCALE);

var ONLY_NUMERIC_TOKENS = /^[DMYHhms\s/.,:-]+$/;
var TEXT_TOKENS = /M{3,}|D{3,}/;
/**
 * El KeyboardDatePicker arma su máscara reemplazando cada letra del formato por
 * un guión y sólo acepta dígitos, por lo que los formatos localizados (ll, LL,
 * lll, L...) o con nombre de mes son imposibles de escribir. En esos casos se
 * captura en DD/MM/YYYY y el valor se sigue entregando en el formato pedido.
 * @param {string} format
 * @param {string} inputFormat
 */

var getInputFormat = function getInputFormat(format, inputFormat) {
  if (inputFormat) return inputFormat;
  if (format && ONLY_NUMERIC_TOKENS.test(format) && !TEXT_TOKENS.test(format)) return format;
  return TYPEABLE_INPUT_FORMAT;
};

var buildPlaceholder = function buildPlaceholder(format) {
  return format.replace(/Y/g, 'A');
};
/**
 * @param {Date|string|moment} value
 * @param {string} format formato en el que viene el valor externo
 */


var parseValue = function parseValue(value, format) {
  if (!value) return null;
  if (_moment.default.isMoment(value)) return value.isValid() ? value : null;

  if (value instanceof Date) {
    var fromDate = (0, _moment.default)(value);
    return fromDate.isValid() ? fromDate : null;
  }

  if (!isNaN(Date.parse(value))) return (0, _moment.default)(value);
  var withFormat = format ? (0, _moment.default)(value, format) : null;
  if (withFormat && withFormat.isValid()) return withFormat;
  var fallback = (0, _moment.default)(value, [TYPEABLE_INPUT_FORMAT, 'YYYY-MM-DD', _moment.default.ISO_8601]);
  return fallback.isValid() ? fallback : null;
};

var isSameDate = function isSameDate(a, b) {
  if (!a && !b) return true;
  if (!a || !b) return false;
  if (!(0, _moment.default)(a).isValid() || !(0, _moment.default)(b).isValid()) return false;
  return (0, _moment.default)(a).isSame((0, _moment.default)(b));
};

var BaseDatePicker = function BaseDatePicker(_ref) {
  var disableToolBar = _ref.disableToolBar,
      label = _ref.label,
      value = _ref.value,
      onDateChange = _ref.onDateChange,
      format = _ref.format,
      inputFormat = _ref.inputFormat,
      disabled = _ref.disabled,
      minDate = _ref.minDate,
      required = _ref.required,
      error = _ref.error;
  var classes = (0, _style.default)();
  var dateInputFormat = (0, _react.useMemo)(function () {
    return getInputFormat(format, inputFormat);
  }, [format, inputFormat]);

  var _useState = (0, _react.useState)(function () {
    return parseValue(value, format);
  }),
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
   * @param {moment} _date
   */


  var handleDateChange = function handleDateChange(_date) {
    setDate(_date);

    if (!_date) {
      setMError(Boolean(required));
      onDateChange(null);
      return;
    }

    setMError(false); // Mientras se escribe la fecha llegan valores incompletos: no se propagan
    // para no ensuciar al padre con "Fecha inválida".

    if (!(0, _moment.default)(_date).isValid()) return;
    onDateChange(format ? (0, _moment.default)(_date).format(format) : _date);
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
    var incoming = parseValue(value, format);
    if (isSameDate(incoming, date)) return; // Evita borrar lo que se está escribiendo cuando el padre aún no tiene valor.

    if (!incoming && date && !(0, _moment.default)(date).isValid()) return;
    setDate(incoming);
  }, [value, format]);
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
    locale: LOCALE,
    utils: _moment2.default
  }, _react.default.createElement(_pickers.KeyboardDatePicker, {
    className: (0, _classnames2.default)(classes.datePicker, _defineProperty({}, classes.error, mError)),
    variant: "inline",
    inputVariant: "outlined",
    label: _react.default.createElement(_react.default.Fragment, null, mLabel, required && _react.default.createElement("span", {
      className: classes.asterisk
    }, "*")),
    value: date,
    format: dateInputFormat,
    placeholder: buildPlaceholder(dateInputFormat),
    invalidDateMessage: INVALID_DATE_MESSAGE,
    minDateMessage: OUT_OF_RANGE_MESSAGE,
    maxDateMessage: OUT_OF_RANGE_MESSAGE,
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
  inputFormat: _propTypes.default.string,
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
  inputFormat: '',
  onDateChange: function onDateChange() {},
  disabled: false,
  minDate: (0, _moment.default)().subtract(100, 'years'),
  maxDate: (0, _moment.default)().subtract(10, 'years'),
  required: false,
  error: false
};
var _default = BaseDatePicker;
exports.default = _default;
