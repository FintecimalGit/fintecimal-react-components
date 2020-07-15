"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CustomField = _interopRequireDefault(require("./CustomField"));

var _HeaderCollapse = _interopRequireDefault(require("../../../HeaderCollapse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var GroupFields = function GroupFields(_ref) {
  var index = _ref.index,
      fields = _ref.fields,
      classes = _ref.classes,
      signerName = _ref.signerName,
      handleOnChange = _ref.handleOnChange;

  var updateValue = function updateValue(field, value, index) {
    var newFields = _toConsumableArray(fields);

    newFields[index] = _objectSpread({}, field, {
      value: value
    });
    return newFields;
  };

  return _react.default.createElement(_HeaderCollapse.default, {
    open: true,
    title: "Informaci\xF3n de ".concat(signerName)
  }, fields.map(function (field, indexField) {
    var name = field.name,
        label = field.label,
        type = field.type,
        _field$value = field.value,
        value = _field$value === void 0 ? '' : _field$value,
        _field$required = field.required,
        required = _field$required === void 0 ? false : _field$required;
    return _react.default.createElement("div", {
      className: classes.root,
      key: "key-".concat(index, "-").concat(name)
    }, _react.default.createElement(_CustomField.default, {
      type: type,
      label: label,
      name: name,
      value: value,
      required: required,
      handleChange: function handleChange(value) {
        return handleOnChange(updateValue(field, value, indexField), index);
      }
    }));
  }));
};

var _default = GroupFields;
exports.default = _default;