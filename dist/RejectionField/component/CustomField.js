"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BaseTextInput = _interopRequireDefault(require("../../nodes/BaseTextInput"));

var _BaseEmailInput = _interopRequireDefault(require("../../nodes/BaseEmailInput"));

var _BasePhoneInput = _interopRequireDefault(require("../../nodes/BasePhoneInput"));

var _BaseRFCInput = _interopRequireDefault(require("../../nodes/BaseRFCInput"));

var _BaseNumberInput = _interopRequireDefault(require("../../nodes/BaseNumberInput"));

var _Select = _interopRequireDefault(require("../../nodes/Select"));

var _BaseDatePicker = _interopRequireDefault(require("../../nodes/BaseDatePicker"));

var _nodes = require("../../nodes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CustomField = function CustomField(_ref) {
  var type = _ref.type,
      props = _objectWithoutProperties(_ref, ["type"]);

  var name = type.name;

  switch (name) {
    case 'lista':
      return _react.default.createElement(_Select.default, props);

    case 'RFC':
      return _react.default.createElement(_BaseRFCInput.default, props);

    case 'cantidad':
      return _react.default.createElement(_BaseNumberInput.default, props);

    case 'número':
      return _react.default.createElement(_BaseNumberInput.default, props);

    case 'radio':
    case 'email':
      return _react.default.createElement(_BaseEmailInput.default, props);

    case 'celular':
      return _react.default.createElement(_BasePhoneInput.default, props);

    case 'respuesta larga':
      return _react.default.createElement(_BaseTextInput.default, props);

    case 'respuesta corta':
      return _react.default.createElement(_BaseTextInput.default, props);

    case 'fecha':
      return _react.default.createElement(_BaseDatePicker.default, props);

    case 'radiogroup':
      return _react.default.createElement(_nodes.RadioGroupInput, props);

    case 'checkbox':
      return _react.default.createElement(_nodes.InputCheckbox, props);

    default:
      return _react.default.createElement(_BaseTextInput.default, props);
  }
};

CustomField.propTypes = {
  type: _propTypes.default.object,
  label: _propTypes.default.string,
  name: _propTypes.default.string,
  value: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.number, _propTypes.default.bool, _propTypes.default.instanceOf(undefined)]),
  handleChange: _propTypes.default.func
};
var _default = CustomField;
exports.default = _default;