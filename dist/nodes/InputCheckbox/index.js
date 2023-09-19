"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _FormGroup = _interopRequireDefault(require("@material-ui/core/FormGroup"));

var _FormLabel = _interopRequireDefault(require("@material-ui/core/FormLabel"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InputCheckbox = function InputCheckbox(_ref) {
  var label = _ref.label,
      value = _ref.value,
      options = _ref.options,
      disabled = _ref.disabled,
      handleChange = _ref.handleChange;

  var _React$useState = _react.default.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      state = _React$useState2[0],
      setState = _React$useState2[1];

  var onChange = function onChange(event) {
    var _event$target = event.target,
        optionName = _event$target.name,
        checked = _event$target.checked;
    setState(function (prevState) {
      return _objectSpread2({}, prevState, _defineProperty({}, optionName, checked));
    });
    var formatValue = Array.isArray(value) ? value.map(function (valueItem) {
      var nameValueItem = valueItem.name;
      if (nameValueItem === optionName) return {
        name: nameValueItem,
        checked: checked
      };
      return valueItem;
    }) : options.map(function (option) {
      var nameOption = option.name;
      if (nameOption === optionName) return {
        name: nameOption,
        checked: checked
      };
      return {
        name: nameOption,
        checked: false
      };
    });
    handleChange(formatValue);
  };

  var renderOptions = options.map(function (option) {
    return _react.default.createElement(_FormControlLabel.default, {
      key: option.name,
      disabled: disabled,
      control: _react.default.createElement(_Checkbox.default, {
        checked: state[option.name] || false,
        onChange: onChange,
        name: option.name
      }),
      label: option.name
    });
  });
  (0, _react.useEffect)(function () {
    if (value && Array.isArray(value)) {
      var updatedState = value.reduce(function (acc, option) {
        acc[option.name] = option.checked;
        return acc;
      }, {});
      setState(updatedState);
    }
  }, [value]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_FormLabel.default, {
    component: "legend"
  }, label), _react.default.createElement(_FormGroup.default, null, renderOptions));
};

InputCheckbox.propTypes = {
  label: _propTypes.default.string,
  value: _propTypes.default.any,
  disabled: _propTypes.default.bool,
  options: _propTypes.default.array,
  handleChange: _propTypes.default.func
};
InputCheckbox.defaultProps = {
  label: '',
  value: [],
  disabled: false,
  options: [],
  handleChange: function handleChange() {}
};

var _default = (0, _react.memo)(InputCheckbox);

exports.default = _default;