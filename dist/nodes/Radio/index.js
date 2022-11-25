"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

var _core = require("@material-ui/core");

var _LongPlaceHolder = _interopRequireDefault(require("../../LongPlaceHolder"));

var _InputStrings = require("../../InputStrings");

var _utils = require("../../commons/utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var RadioGroupInput = function RadioGroupInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      handleChange = _ref.handleChange,
      required = _ref.required,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      options = _ref.options,
      disabled = _ref.disabled,
      handleBlur = _ref.handleBlur,
      defaultValue = _ref.defaultValue;
  console.log('options: ', options);
  var classes = (0, _style.default)();
  var errorMessages = _InputStrings.radio.errorMessages,
      defaultPlaceHolder = _InputStrings.radio.label;

  var _useState = (0, _react.useState)(value),
      _useState2 = _slicedToArray(_useState, 2),
      mValue = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(status.NORMAL),
      _useState4 = _slicedToArray(_useState3, 2),
      mStatus = _useState4[0],
      setStatus = _useState4[1];

  var _React$useState = _react.default.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      mError = _React$useState2[0],
      setError = _React$useState2[1];

  var renderOptions = function renderOptions(listOptions) {
    console.log('listOptions: ', listOptions);
    var items = listOptions.map(function (option) {
      return _react.default.createElement(_core.FormControlLabel, {
        className: classes.optionLabel,
        value: option.name,
        control: _react.default.createElement(_core.Radio, {
          className: classes.smallRadioButton
        }),
        label: _react.default.createElement(_core.Typography, {
          className: classes.option
        }, option.name)
      });
    });
    return items;
  };

  var mHandleChange = function mHandleChange(event) {
    var value = event.target.value;
    handleChange(value);
    setError(false);
    setValue(value);
    setStatus(status.NORMAL);
  };

  (0, _react.useEffect)(function () {
    console.log('mValue: ', mValue);
    console.log('value: ', value);

    if (mValue !== value) {
      setValue(value);
    }
  }, [value]);
  (0, _react.useEffect)(function () {
    if (error && !mError) {
      var empty = errorMessages.empty;
      setError(true);
      setErrorMessage(empty);
    }
  }, [error, mError]);
  var checkDisabled = (0, _react.useMemo)(function () {
    if (options.length === 0) return true;
    return disabled;
  }, [options, disabled]);
  return _react.default.createElement("div", null, (0, _utils.isTextLong)(label) && _react.default.createElement("div", {
    className: classes.longPlaceHolder
  }, _react.default.createElement(_LongPlaceHolder.default, {
    text: label
  })), _react.default.createElement(_core.FormControl, {
    className: classes.form,
    required: required,
    error: mError,
    disabled: checkDisabled
  }, !(0, _utils.isTextLong)(label) && _react.default.createElement(_core.FormLabel, {
    className: classes.label,
    classes: {
      asterisk: classes.asterisk
    }
  }, label), _react.default.createElement(_core.RadioGroup, {
    value: mValue,
    defaultValue: defaultValue,
    onChange: mHandleChange
  }, renderOptions(options))), mError && (0, _utils.isTextLong)(mErrorMessage) && _react.default.createElement(LongError, {
    text: mErrorMessage
  }));
};

RadioGroupInput.defaultProps = {
  value: '',
  required: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  placeholder: '',
  disabled: false
};
RadioGroupInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  required: _propTypes.default.bool,
  error: _propTypes.default.bool,
  clear: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  handleChange: _propTypes.default.func.isRequired,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  handleBlur: _propTypes.default.func
};
var _default = RadioGroupInput;
exports.default = _default;