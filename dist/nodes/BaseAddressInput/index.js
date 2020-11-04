"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Autocomplete = _interopRequireDefault(require("@material-ui/lab/Autocomplete"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _style = _interopRequireDefault(require("./style"));

var _google = require("../../api/google");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var AddressInput = function AddressInput(_ref) {
  var value = _ref.value,
      disabled = _ref.disabled,
      label = _ref.label,
      handleChange = _ref.handleChange,
      required = _ref.required;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      searchText = _useState4[0],
      setSearchText = _useState4[1];

  var buildAddress = function buildAddress(_value) {
    var _value$streetName = _value.streetName,
        streetName = _value$streetName === void 0 ? '' : _value$streetName,
        _value$streetNumber = _value.streetNumber,
        streetNumber = _value$streetNumber === void 0 ? '' : _value$streetNumber,
        _value$sublocality = _value.sublocality,
        sublocality = _value$sublocality === void 0 ? '' : _value$sublocality;
    var _value$locality = value.locality,
        locality = _value$locality === void 0 ? '' : _value$locality,
        _value$administrative = value.administrativeArea,
        administrativeArea = _value$administrative === void 0 ? '' : _value$administrative,
        _value$country = value.country,
        country = _value$country === void 0 ? '' : _value$country;
    var newStreetNumber = streetNumber ? " ".concat(streetNumber) : '';
    var newSublocality = sublocality ? ", ".concat(sublocality) : '';
    var newLocality = locality ? ", ".concat(locality) : '';
    var newAdministrativeArea = administrativeArea ? ", ".concat(administrativeArea) : '';
    var newCountry = country ? ", ".concat(country) : '';
    var address = "".concat(streetName).concat(newStreetNumber).concat(newSublocality).concat(newLocality).concat(newAdministrativeArea).concat(newCountry);
    return address;
  };

  (0, _react.useEffect)(function () {
    var _searchText = buildAddress(value);

    setSearchText(_searchText);
  }, [value]);

  var fetchAddress =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var response, _response$places, places, newOptions;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _google.getAddress)({
                value: searchText
              });

            case 2:
              response = _context.sent;

              if (response) {
                _response$places = response.places, places = _response$places === void 0 ? [] : _response$places;
                newOptions = places.map(function (_ref3) {
                  var _ref3$description = _ref3.description,
                      description = _ref3$description === void 0 ? '' : _ref3$description,
                      _ref3$details = _ref3.details,
                      details = _ref3$details === void 0 ? [] : _ref3$details;
                  return {
                    name: description,
                    details: details
                  };
                });
                setOptions(newOptions);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchAddress() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    var time = setTimeout(function () {
      return fetchAddress();
    }, 500);
    return function () {
      return clearTimeout(time);
    };
  }, [searchText]);

  var handleSearch = function handleSearch(_searchText) {
    setSearchText(_searchText);
  };

  var _onChange = function onChange(_value) {
    if (!_value) {
      handleChange({});
      setOptions([]);
    } else {
      var _value$details = _value.details,
          details = _value$details === void 0 ? [] : _value$details;
      var newValue = details.reduce(function (acc, item) {
        var type = item.type,
            long_name = item.long_name;
        return _objectSpread2({}, acc, _defineProperty({}, type, long_name));
      }, {});
      handleChange(newValue);
    }
  };

  return _react.default.createElement(_Autocomplete.default, {
    inputValue: searchText,
    options: options,
    disabled: disabled,
    noOptionsText: "",
    onChange: function onChange(event, newValue) {
      _onChange(newValue);
    },
    onInputChange: function onInputChange(event, newValue) {
      handleSearch(newValue);
    },
    autoHighlight: true,
    getOptionLabel: function getOptionLabel(option) {
      return option.name || '';
    },
    renderInput: function renderInput(params) {
      return _react.default.createElement(_TextField.default, _extends({}, params, {
        label: label,
        variant: "outlined",
        required: required,
        InputLabelProps: {
          classes: {
            asterisk: classes.asterisk
          }
        },
        inputProps: _objectSpread2({}, params.inputProps)
      }));
    }
  });
};

AddressInput.propTypes = {
  value: _propTypes.default.object,
  label: _propTypes.default.string,
  handleChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool
};
AddressInput.defaultProps = {
  value: {},
  label: '',
  handleChange: function handleChange() {},
  disabled: false,
  required: false
};
var _default = AddressInput;
exports.default = _default;