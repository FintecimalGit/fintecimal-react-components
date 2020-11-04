"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

var _BaseAddressInput = _interopRequireDefault(require("../BaseAddressInput"));

var _BaseTextInput = _interopRequireDefault(require("../BaseTextInput"));

var _BaseNumberInput = _interopRequireDefault(require("../BaseNumberInput"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FullAddressInput = function FullAddressInput(_ref) {
  var value = _ref.value,
      required = _ref.required,
      disabled = _ref.disabled,
      handleChange = _ref.handleChange;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      addressValue = _useState2[0],
      setAddressValue = _useState2[1];

  (0, _react.useEffect)(function () {
    setAddressValue(value);
  }, [value]);

  var handleChangeValue = function handleChangeValue(_value, key) {
    var newAddressValue = _objectSpread2({}, addressValue, _defineProperty({}, key, _value));

    setAddressValue(newAddressValue);
  };

  var _addressValue$adminis = addressValue.administrativeArea,
      administrativeArea = _addressValue$adminis === void 0 ? '' : _addressValue$adminis,
      _addressValue$country = addressValue.country,
      country = _addressValue$country === void 0 ? '' : _addressValue$country,
      _addressValue$localit = addressValue.locality,
      locality = _addressValue$localit === void 0 ? '' : _addressValue$localit;
  var _addressValue$postalC = addressValue.postalCode,
      postalCode = _addressValue$postalC === void 0 ? '' : _addressValue$postalC,
      _addressValue$streetN = addressValue.streetName,
      streetName = _addressValue$streetN === void 0 ? '' : _addressValue$streetN,
      _addressValue$streetN2 = addressValue.streetNumber,
      streetNumber = _addressValue$streetN2 === void 0 ? '' : _addressValue$streetN2;
  var _addressValue$subloca = addressValue.sublocality,
      sublocality = _addressValue$subloca === void 0 ? '' : _addressValue$subloca;
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement("div", null, _react.default.createElement(_BaseAddressInput.default, {
    label: "Direcci\xF3n",
    value: addressValue,
    handleChange: setAddressValue,
    required: required,
    disabled: disabled
  })), _react.default.createElement(_BaseTextInput.default, {
    label: "Calle",
    value: streetName,
    handleChange: function handleChange(_value) {
      return handleChangeValue(_value, 'streetName');
    },
    required: required,
    disabled: disabled
  }), _react.default.createElement("div", null, _react.default.createElement(_BaseTextInput.default, {
    label: "N\xFAmero exterior",
    value: streetNumber,
    handleChange: function handleChange(_value) {
      return handleChangeValue(_value, 'streetNumber');
    },
    required: required,
    disabled: disabled
  })), _react.default.createElement("div", null, _react.default.createElement(_BaseNumberInput.default, {
    label: "C\xF3digo postal",
    value: postalCode,
    handleChange: function handleChange(_value) {
      return handleChangeValue(_value, 'postalCode');
    },
    required: required,
    disabled: disabled
  })), _react.default.createElement("div", null, _react.default.createElement(_BaseTextInput.default, {
    label: "Colonia",
    value: sublocality,
    handleChange: function handleChange(_value) {
      return handleChangeValue(_value, 'sublocality');
    },
    required: required,
    disabled: disabled
  })), _react.default.createElement("div", null, _react.default.createElement(_BaseTextInput.default, {
    label: "Municipio",
    value: locality,
    handleChange: function handleChange(_value) {
      return handleChangeValue(_value, 'locality');
    },
    required: required,
    disabled: disabled
  })), _react.default.createElement("div", null, _react.default.createElement(_BaseTextInput.default, {
    label: "Estado",
    value: administrativeArea,
    handleChange: function handleChange(_value) {
      return handleChangeValue(_value, 'administrativeArea');
    },
    required: required,
    disabled: disabled
  })), _react.default.createElement("div", null, _react.default.createElement(_BaseTextInput.default, {
    label: "Pa\xEDs",
    value: country,
    handleChange: function handleChange(_value) {
      return handleChangeValue(_value, 'country');
    },
    required: required,
    disabled: disabled
  })));
};

FullAddressInput.propTypes = {
  value: _propTypes.default.object,
  label: _propTypes.default.string,
  handleChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool
};
FullAddressInput.defaultProps = {
  value: {},
  label: '',
  handleChange: function handleChange() {},
  disabled: false,
  required: false
};
var _default = FullAddressInput;
exports.default = _default;