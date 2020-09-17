"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _utils = require("../../commons/utils");

var _LongPlaceHolder = _interopRequireDefault(require("../../LongPlaceHolder"));

var _LongError = _interopRequireDefault(require("../../LongError"));

var _InputStrings = require("../../InputStrings");

var _style = _interopRequireDefault(require("./style"));

require("../../styles/BaseInput.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var isCategory = function isCategory(option) {
  return option.children && option.children.length > 0;
};

var getClassByStatus = function getClassByStatus(inputStatus, classes) {
  switch (inputStatus) {
    case _utils.status.FOCUS:
      return classes.focus;

    case _utils.status.ERROR:
      return classes.error;

    default:
      return classes.normal;
  }
};

var SelectInput = function SelectInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      handleChange = _ref.handleChange,
      required = _ref.required,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      options = _ref.options,
      disabled = _ref.disabled,
      placeholder = _ref.placeholder,
      handleBlur = _ref.handleBlur;
  var classes = (0, _style.default)();
  var labelRef = (0, _react.useRef)(null);

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      labelWidth = _useState2[0],
      setLabelWidth = _useState2[1];

  var errorMessages = _InputStrings.list.errorMessages,
      defaultPlaceHolder = _InputStrings.list.label;

  var _useState3 = (0, _react.useState)(value),
      _useState4 = _slicedToArray(_useState3, 2),
      mValue = _useState4[0],
      setValue = _useState4[1];

  var _useState5 = (0, _react.useState)(error),
      _useState6 = _slicedToArray(_useState5, 2),
      mError = _useState6[0],
      setError = _useState6[1];

  var _useState7 = (0, _react.useState)(errorMessage),
      _useState8 = _slicedToArray(_useState7, 2),
      mErrorMessage = _useState8[0],
      setErrorMessage = _useState8[1];

  var _useState9 = (0, _react.useState)(_utils.status.NORMAL),
      _useState10 = _slicedToArray(_useState9, 2),
      mStatus = _useState10[0],
      setStatus = _useState10[1];

  var _useState11 = (0, _react.useState)(false),
      _useState12 = _slicedToArray(_useState11, 2),
      mOpen = _useState12[0],
      setOpen = _useState12[1];

  var renderItem = function renderItem(info) {
    var name = info.name,
        index = info.index,
        _info$category = info.category,
        category = _info$category === void 0 ? true : _info$category,
        _info$parentName = info.parentName,
        parentName = _info$parentName === void 0 ? '' : _info$parentName;
    return _react.default.createElement(_core.MenuItem, {
      disabled: category,
      key: "".concat(parentName, "_").concat(name, "_").concat(index),
      className: category ? classes.category : classes.item,
      value: parentName ? "".concat(parentName, " - ").concat(name) : name,
      classes: {
        disabled: classes.disabled
      }
    }, name);
  };

  var selectLabel = function selectLabel() {
    if (mError) {
      if ((0, _utils.isTextLong)(mErrorMessage)) {
        if ((0, _utils.isTextLong)(label)) return defaultPlaceHolder;
        return label;
      }

      return mErrorMessage;
    } else {
      if ((0, _utils.isTextLong)(label)) return defaultPlaceHolder;
      return label;
    }
  };

  var open = function open() {
    setOpen(true);
  };

  var close = function close() {
    setOpen(false);
  };

  var renderChildren = function renderChildren(children, items) {
    var parentName = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
    children.map(function (child, index) {
      var name = child.name,
          children = child.children;
      var info = {
        name: name,
        index: index,
        parentName: parentName
      };

      if (isCategory(child)) {
        items.push(renderItem(info));
        return renderChildren(children, items, name);
      }

      var newInfo = _objectSpread({}, info, {
        category: false
      });

      items.push(renderItem(newInfo));
    });
  };

  var renderPlaceholder = function renderPlaceholder(_ref2) {
    var name = _ref2.name;
    return _react.default.createElement(_core.MenuItem, {
      disabled: true,
      key: "placeholder_".concat(name, "_-1"),
      className: classes.item,
      value: ""
    }, name);
  };

  var renderOptions = function renderOptions(listOptions) {
    var items = [];
    if (placeholder) items.push(renderPlaceholder({
      name: placeholder
    }));
    renderChildren(listOptions, items);
    return items;
  };

  var mHandleChange = function mHandleChange(event) {
    var value = event.target.value;
    handleChange(value);
    setError(false);
    setValue(value);
    setStatus(_utils.status.NORMAL);
  };

  var mOnFocus = function mOnFocus() {
    setStatus(_utils.status.FOCUS);
  };

  var mOnBlur = function mOnBlur() {
    var empty = errorMessages.empty;

    if ((0, _utils.isEmpty)(mValue) && required) {
      setError(true);
      setErrorMessage(empty);
    } else {
      setError(false);
      handleBlur();
    }

    setStatus(_utils.status.NORMAL);
  };

  (0, _react.useEffect)(function () {
    setValue(value);
    setLabelWidth(labelRef.current.offsetWidth);
  }, [label, errorMessage]);
  (0, _react.useEffect)(function () {
    setValue(value);
  }, [value]);
  var checkDisabled = (0, _react.useMemo)(function () {
    if (options.length === 0) return true;
    return disabled;
  }, [options, disabled]);
  return _react.default.createElement("div", {
    className: classes.root
  }, (0, _utils.isTextLong)(label) && _react.default.createElement("div", {
    className: classes.longPlaceHolder
  }, _react.default.createElement(_LongPlaceHolder.default, {
    text: label
  })), _react.default.createElement(_core.FormControl, {
    className: classes.form,
    required: required,
    error: mError,
    variant: "outlined"
  }, _react.default.createElement(_core.InputLabel, {
    ref: labelRef,
    className: classes.label,
    htmlFor: "component-outlined",
    variant: "outlined",
    classes: {
      asterisk: classes.asterisk
    }
  }, selectLabel()), _react.default.createElement(_core.Select, {
    renderValue: function renderValue() {
      return mValue || placeholder;
    },
    value: mValue,
    onChange: mHandleChange,
    onBlur: mOnBlur,
    onFocus: mOnFocus,
    onOpen: open,
    onClose: close,
    IconComponent: mOpen ? _icons.KeyboardArrowUp : _icons.KeyboardArrowDown,
    classes: {
      icon: classes.icon
    },
    MenuProps: {
      getContentAnchorEl: null,
      classes: {
        paper: mError ? getClassByStatus(_utils.status.ERROR, classes) : getClassByStatus(mStatus, classes)
      }
    },
    input: _react.default.createElement(_core.OutlinedInput, {
      id: "component-outlined",
      labelWidth: labelWidth,
      className: classes.input,
      classes: {
        notchedOutline: classes.notchedOutline,
        focused: classes.focusNotchedOutline
      },
      disabled: checkDisabled
    })
  }, renderOptions(options))), mError && (0, _utils.isTextLong)(mErrorMessage) && _react.default.createElement(_LongError.default, {
    text: mErrorMessage
  }));
};

SelectInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  placeholder: '',
  disabled: false,
  handleBlur: function handleBlur() {}
};
SelectInput.propTypes = {
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
var _default = SelectInput;
exports.default = _default;