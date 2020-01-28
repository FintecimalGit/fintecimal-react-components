"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _BaseInput = _interopRequireDefault(require("../../BaseInput"));

var _Button = _interopRequireDefault(require("../../Buttons/Button"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Fields = function Fields(_ref) {
  var fields = _ref.fields,
      header = _ref.header,
      addNewRow = _ref.addNewRow;
  var classes = (0, _style.default)();

  var _React$useState = _react.default.useState({}),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var _React$useState3 = _react.default.useState({}),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      inputError = _React$useState4[0],
      setInputError = _React$useState4[1];

  _react.default.useEffect(function () {
    if (Object.keys(values).length === 0) createEmptyValues(header);
  }, [header]);

  var isString = function isString(value) {
    return typeof value === 'string';
  };

  var handleChangeInputs = function handleChangeInputs(input) {
    return function (event) {
      var value = isString(event) ? event : event.target.value;
      setValues(_objectSpread({}, values, _defineProperty({}, input.label, value)));
      setInputError(_objectSpread({}, inputError, _defineProperty({}, input.label, false)));
    };
  };

  var getInputValue = function getInputValue(input) {
    return values[input.label] || '';
  };

  var getInputValueError = function getInputValueError(input) {
    return inputError[input.label] || false;
  };

  var clearText = function clearText(input) {
    return function (event) {
      return setValues(_objectSpread({}, values, _defineProperty({}, input.label, '')));
    };
  };

  var onClickAccept = function onClickAccept() {
    if (validateInformation()) return null;
    addNewRow(values);
    createEmptyValues(header);
  };

  var createEmptyValues = function createEmptyValues(headers) {
    var value = {};
    var valueErrors = {};
    headers.map(function (keys) {
      value[keys.key] = '';
      valueErrors[keys.key] = false;
    });
    setValues(value);
    setInputError(valueErrors);
  };

  var validateInformation = function validateInformation() {
    var inputErrors = _objectSpread({}, inputError);

    var exitsErrors = false;

    for (var key in values) {
      if (values[key] === '') {
        inputErrors[key] = true;
        exitsErrors = true;
      } else {
        inputErrors[key] = false;
      }
    }

    setInputError(inputErrors);
    return exitsErrors;
  };

  return _react.default.createElement("div", {
    className: classes.content
  }, fields.map(function (values) {
    var label = values.label,
        id = values.id;
    return _react.default.createElement("div", {
      className: classes.content_inputs,
      key: id
    }, _react.default.createElement(_BaseInput.default, {
      handleChange: handleChangeInputs({
        label: label
      }),
      label: label,
      required: true,
      type: 'text',
      value: getInputValue({
        label: label
      }),
      onClear: clearText({
        label: label
      }),
      error: getInputValueError({
        label: label
      }),
      errorMessage: 'Campo obligatorio'
    }));
  }), _react.default.createElement(_Button.default, {
    text: "Agregar",
    onClick: onClickAccept
  }));
};

Fields.propTypes = {
  fields: _propTypes.default.array,
  header: _propTypes.default.array,
  addNewRow: _propTypes.default.func
};
Fields.defaultProps = {
  fields: [],
  header: [],
  addNewRow: function addNewRow() {}
};
var _default = Fields;
exports.default = _default;