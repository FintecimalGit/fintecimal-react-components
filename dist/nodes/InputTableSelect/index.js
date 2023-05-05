"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var utils = _interopRequireWildcard(require("./utils"));

var _useStyles = _interopRequireDefault(require("./useStyles"));

var _InputStrings = require("../../InputStrings");

var _defaults = require("./defaults");

var _Fields = _interopRequireDefault(require("./components/Fields"));

var _Table = _interopRequireDefault(require("./components/Table"));

var _CustomField = _interopRequireDefault(require("./components/CustomField"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InputTableSelect = function InputTableSelect(_ref) {
  var value = _ref.value,
      headers = _ref.headers,
      handleHeadersAndValues = _ref.handleHeadersAndValues,
      error = _ref.error,
      required = _ref.required,
      keysMatch = _ref.keysMatch,
      internSelectLabel = _ref.internSelectLabel;
  var classes = (0, _useStyles.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      localHeaders = _useState4[0],
      setLocalHeaders = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      localValue = _useState6[0],
      setLocalValue = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      errorMessages = _useState8[0],
      setErrorMessages = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      edit = _useState10[0],
      setEdit = _useState10[1];

  var _useState11 = (0, _react.useState)(),
      _useState12 = _slicedToArray(_useState11, 2),
      editPosition = _useState12[0],
      setEditPosition = _useState12[1];

  var _useState13 = (0, _react.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      elementSelected = _useState14[0],
      setElementSelected = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      elementsList = _useState16[0],
      setElementsList = _useState16[1];

  var HEADERS = (0, _react.useMemo)(function () {
    return localHeaders.map(function (option) {
      return {
        key: option.name,
        value: option.label
      };
    });
  }, [localHeaders]);
  var VALUES = (0, _react.useMemo)(function () {
    if (!localValue.length) return [];
    var newLocalValue = Array.from(localValue);
    return newLocalValue.reduce(function (acc, element) {
      var row = element.reduce(function (accRow, column) {
        var name = column.name,
            _value = column.value;
        return _objectSpread2({}, accRow, _defineProperty({}, name, _value));
      }, {});
      if (utils.ObjectNotEmpty(row)) acc.push(row);
      return acc;
    }, []);
  }, [localValue]);
  var generateData = (0, _react.useCallback)(function (data) {
    return data.map(function (field) {
      return {
        name: field.name,
        label: field.label,
        value: field.value
      };
    });
  }, []);

  var deleteRowBySelectedElement = function deleteRowBySelectedElement(_selectedValue) {
    var indexPosition = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;

    var searchValues = _selectedValue.split(' - ');

    var valueClone = _toConsumableArray(value);

    return valueClone.map(function (obj) {
      var keys = Object.keys(obj.keys);
      var matchFound = keysMatch.every(function (matchKey) {
        var keyIndex = keys.indexOf(matchKey);

        if (keyIndex >= 0) {
          var keyValue = obj.keys[keys[keyIndex]];
          var searchKeyValue = searchValues[keyIndex];
          return keyValue === searchKeyValue;
        }

        return false;
      });

      if (matchFound) {
        var objClone = _objectSpread2({}, obj);

        if (indexPosition === -1) {
          objClone.value = [];
        } else {
          objClone.value = [].concat(_toConsumableArray(objClone.value.slice(0, indexPosition)), _toConsumableArray(objClone.value.slice(indexPosition + 1)));
        }

        return objClone;
      }

      return obj;
    });
  };

  var updateOrAddRowBySelectedElement = function updateOrAddRowBySelectedElement(_selectedValue, newRow) {
    var isEdit = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var currentEditPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : -1;
    console.log('newRow: ', newRow);

    var searchValues = _selectedValue.split(' - ');

    var valueClone = _toConsumableArray(value);

    return valueClone.map(function (obj) {
      var keys = Object.keys(obj.keys);
      var matchFound = keysMatch.every(function (matchKey) {
        var keyIndex = keys.indexOf(matchKey);

        if (keyIndex >= 0) {
          var keyValue = obj.keys[keys[keyIndex]];
          var searchKeyValue = searchValues[keyIndex];
          return keyValue === searchKeyValue;
        }

        return false;
      });

      if (matchFound) {
        var objClone = _objectSpread2({}, obj);

        if (isEdit && currentEditPosition >= 0 && currentEditPosition < objClone.value.length) {
          var updatedValue = objClone.value.map(function (_value, indexPosition) {
            if (indexPosition === currentEditPosition) {
              return newRow;
            }

            return _value;
          });
          objClone.value = updatedValue;
        } else {
          objClone.value = [].concat(_toConsumableArray(obj.value), [newRow]);
        }

        return objClone;
      }

      console.log('obj: ', obj);
      return obj;
    });
  };

  var addNewRow = function addNewRow(dataField) {
    if (edit) {
      var newValues = updateOrAddRowBySelectedElement(elementSelected, generateData(dataField), true, editPosition);
      handleHeadersAndValues({
        headers: headers,
        values: newValues
      });
      setEdit(false);
      setEditPosition(0);
    } else {
      var _newValues = updateOrAddRowBySelectedElement(elementSelected, generateData(dataField));

      console.log('newValues: ', _newValues);
      handleHeadersAndValues({
        headers: headers,
        values: _newValues
      });
    }
  };

  var deleteRow = function deleteRow(item, index) {
    var newValues = deleteRowBySelectedElement(elementSelected, index);
    handleHeadersAndValues({
      headers: headers,
      values: newValues
    });
  };

  var editRow = function editRow(_value, index) {
    var newFields = utils.generateFieldsWithValue(fields, _value);
    setFields(newFields);
    setEdit(true);
    setEditPosition(index);
  };

  var handleCleanTable = function handleCleanTable() {
    var newValues = deleteRowBySelectedElement(elementSelected);
    handleHeadersAndValues({
      headers: headers,
      values: newValues
    });
  };

  var closeMessageError = function closeMessageError() {
    setTimeout(function () {
      setErrorMessages([]);
    }, 10000);
  };

  var handleOnChangeField = function handleOnChangeField(field, index, _value) {
    var newFields = fields.map(function (_field) {
      return _objectSpread2({}, _field, {}, _field.id === field.id ? {
        value: _value
      } : null);
    });
    var fieldsUnhide = utils.changeHideChildrens(newFields[index], newFields);
    setFields(fieldsUnhide);
  };

  var getValueByElementSelected = function getValueByElementSelected(_selectedValue) {
    var searchValues = _selectedValue.split(' - ');

    var valueClone = _toConsumableArray(value);

    return valueClone.reduce(function (result, obj) {
      var keys = Object.keys(obj.keys);
      var matchFound = keysMatch.every(function (matchKey) {
        var keyIndex = keys.indexOf(matchKey);

        if (keyIndex >= 0) {
          var keyValue = obj.keys[keys[keyIndex]];
          var searchKeyValue = searchValues[keyIndex];
          return keyValue === searchKeyValue;
        }

        return false;
      });

      if (matchFound) {
        // eslint-disable-next-line no-param-reassign
        result = obj.value;
      }

      return result;
    }, []);
  };

  var onChangeElement = function onChangeElement(_value) {
    var resultValue = getValueByElementSelected(_value);
    setElementSelected(_value);
    setLocalValue(resultValue);
  };

  (0, _react.useEffect)(function () {
    if (headers.length) setLocalHeaders(headers);

    if (value.length) {
      var newList = value.map(function (_ref2, index) {
        var keys = _ref2.keys;
        return {
          id: index,
          value: Object.values(keys).join(' - '),
          name: Object.values(keys).join(' - ')
        };
      });
      var newSelectedElement = elementSelected !== '' ? elementSelected : newList[0].value;
      var newValue = getValueByElementSelected(newSelectedElement);
      setElementSelected(newSelectedElement);
      setElementsList(newList);
      setLocalValue(newValue);
    } else if (localValue.length) setLocalValue([]);
  }, [value, headers]);
  (0, _react.useEffect)(function () {
    setFields(utils.generateValueEmpty(localHeaders));
  }, [localHeaders]);
  (0, _react.useEffect)(function () {
    if (errorMessages.length) closeMessageError();
  }, [errorMessages]);
  (0, _react.useEffect)(function () {
    if (error && required) {
      setErrorMessages([_InputStrings.table.errorMessages.empty]);
    }
  }, [error, required]);
  return _react.default.createElement("div", null, _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_core.Box, {
    className: classes.boxFieldsContainer
  }, _react.default.createElement("div", {
    className: classes.fieldContainer
  }, _react.default.createElement(_CustomField.default, {
    type: "lista",
    name: "list-drop",
    label: internSelectLabel,
    options: elementsList,
    handleChange: onChangeElement,
    value: elementSelected,
    className: classes.fieldClass
  }))), _react.default.createElement(_Fields.default, {
    fieldValues: fields,
    handleOnChangeField: handleOnChangeField,
    setFieldsEmpty: setFields,
    addNewRow: addNewRow,
    edit: edit
  }), _react.default.createElement("div", {
    className: classes.tableContent
  }, _react.default.createElement(_Table.default, {
    headers: HEADERS,
    items: VALUES,
    deleteRow: true,
    onDeleteRow: deleteRow,
    edit: true,
    onEdit: editRow,
    cleanTable: true,
    handleCleanTable: handleCleanTable
  }))));
};

InputTableSelect.propTypes = {
  value: _propTypes.default.array,
  headers: _propTypes.default.array,
  handleHeadersAndValues: _propTypes.default.func,
  required: _propTypes.default.bool,
  error: _propTypes.default.bool,
  keysMatch: _propTypes.default.array,
  internSelectLabel: _propTypes.default.string
};
InputTableSelect.defaultProps = {
  value: _defaults.defaultInputTableSelectValue,
  headers: _defaults.defaultHeaderTableSelect,
  required: false,
  error: false,
  handleHeadersAndValues: function handleHeadersAndValues() {},
  keysMatch: [],
  internSelectLabel: 'Selecciona una opción'
};
var _default = InputTableSelect;
exports.default = _default;