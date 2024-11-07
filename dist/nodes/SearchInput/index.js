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

var _LongPlaceHolder = _interopRequireDefault(require("../../LongPlaceHolder"));

var _LongError = _interopRequireDefault(require("../../LongError"));

var _utils = require("../../commons/utils");

var _style = _interopRequireDefault(require("./style"));

require("../../styles/BaseInput.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var STATUS = {
  'Rechazado': '#C25B5B',
  'Cargado': '#5BC2C2',
  'Pendiente': '#C1C1C1'
};

var SearchInput = function SearchInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      handleChange = _ref.handleChange,
      searchConfig = _ref.searchConfig,
      searchApi = _ref.searchApi,
      required = _ref.required,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      disabled = _ref.disabled,
      type = _ref.type,
      clear = _ref.clear,
      onBlur = _ref.onBlur,
      maxLength = _ref.maxLength,
      statusOnly = _ref.statusOnly,
      status = _ref.status,
      autoComplete = _ref.autoComplete;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      labelWidth = _useState2[0],
      setLabelWidth = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      results = _useState4[0],
      setResults = _useState4[1];

  var labelRef = _react.default.useRef(null);

  var _useState5 = (0, _react.useState)(value),
      _useState6 = _slicedToArray(_useState5, 2),
      mValue = _useState6[0],
      setValue = _useState6[1];

  var onClear = function onClear() {
    setValue('');
    handleChange('');
  };

  (0, _react.useEffect)(function () {
    setLabelWidth(labelRef.current.offsetWidth);
  }, [label, errorMessage]);

  var selectLabel = function selectLabel() {
    if (error) {
      if ((0, _utils.isTextLong)(errorMessage)) {
        if ((0, _utils.isTextLong)(label)) return _utils.defaultPlaceHolder;
        return label;
      }

      return errorMessage;
    } else {
      if ((0, _utils.isTextLong)(label)) return _utils.defaultPlaceHolder;
      return label;
    }
  };

  var selectAdorment = function selectAdorment() {
    if (clear && value && !disabled) {
      return _react.default.createElement(_core.InputAdornment, {
        position: "end"
      }, _react.default.createElement(_core.IconButton, {
        "aria-label": "clear input",
        onClick: onClear,
        tabIndex: "-1"
      }, _react.default.createElement(_icons.Clear
      /*className={classes.icon}*/
      , null)));
    } else if (disabled && statusOnly) {
      return _react.default.createElement(_core.InputAdornment, {
        position: "end"
      }, _react.default.createElement("h3", {
        style: {
          color: STATUS[status]
        },
        className: classes.status
      }, status));
    }
  };

  var searchValue =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(val) {
      var valuesFounded;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return searchApi(val, searchConfig);

            case 2:
              valuesFounded = _context.sent;
              setResults(valuesFounded);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function searchValue(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSelectItem = function handleSelectItem(item) {
    var _id = item._id,
        itemValue = item.value,
        phone = item.phone;
    setValue("".concat(_id, " - ").concat(itemValue, " - ").concat(phone));
    handleChange("".concat(_id, " - ").concat(itemValue, " - ").concat(phone));
    setResults([]);
  };

  var searchingFound = function searchingFound() {
    return results.find(function (_ref3) {
      var _id = _ref3._id,
          val = _ref3.value,
          phone = _ref3.phone;
      return "".concat(_id, " - ").concat(val, " - ").concat(phone) === value;
    });
  };

  var handleInputChange = function handleInputChange(event) {
    var valueTarget = event.target.value;
    setValue(valueTarget);
    if (!valueTarget) setResults([]);else if (valueTarget && searchingFound()) setResults([]);else if (valueTarget) searchValue(valueTarget);
  };

  var fixValue = function fixValue(val) {
    if (!val.includes('-')) return val;
    var newValue = val.split(' - ');
    newValue.shift();
    return newValue.join(' - ');
  };

  return _react.default.createElement("div", {
    className: classes.root
  }, (0, _utils.isTextLong)(label) && _react.default.createElement("div", null, _react.default.createElement(_LongPlaceHolder.default, {
    text: label
  })), _react.default.createElement(_core.FormControl, {
    className: classes.form,
    required: required,
    error: error,
    variant: "outlined"
  }, _react.default.createElement(_core.InputLabel, {
    ref: labelRef,
    className: classes.label,
    htmlFor: "component-outlined",
    variant: "outlined",
    classes: {
      asterisk: classes.asterisk
    }
  }, selectLabel()), _react.default.createElement(_core.OutlinedInput, {
    autoComplete: autoComplete,
    id: "component-outlined",
    value: fixValue(mValue),
    onChange: handleInputChange,
    labelWidth: labelWidth,
    className: classes.input,
    inputProps: _objectSpread({}, maxLength ? {
      maxLength: maxLength
    } : {}),
    endAdornment: selectAdorment(),
    classes: {
      notchedOutline: classes.notchedOutline,
      focused: classes.focusNotchedOutline
    },
    type: type,
    disabled: disabled
  })), error && (0, _utils.isTextLong)(errorMessage) && _react.default.createElement(_LongError.default, {
    text: errorMessage
  }), results.length > 0 && _react.default.createElement(_core.List, {
    className: classes.resultsList
  }, results.map(function (result) {
    return _react.default.createElement(_core.ListItem, {
      button: true,
      key: result._id,
      onClick: function onClick() {
        return handleSelectItem(result);
      },
      className: classes.listItem
    }, _react.default.createElement(_core.ListItemText, {
      primary: "".concat(result.value, " - ").concat(result.phone)
    }));
  })));
};

SearchInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  disabled: false,
  statusOnly: false,
  status: '',
  autoComplete: 'off',
  searchConfig: {},
  searchApi: function searchApi() {}
};
SearchInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  searchConfig: _propTypes.default.object,
  searchApi: _propTypes.default.func,
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  error: _propTypes.default.bool,
  type: _propTypes.default.string,
  clear: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  handleChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  statusOnly: _propTypes.default.bool,
  status: _propTypes.default.string,
  autoComplete: _propTypes.default.string,
  onClear: _propTypes.default.func,
  maxLength: _propTypes.default.number
};
var _default = SearchInput;
exports.default = _default;