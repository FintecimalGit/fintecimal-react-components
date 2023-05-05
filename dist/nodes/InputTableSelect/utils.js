"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeHideChildrens = exports.generateFieldsWithValue = exports.generateValueEmpty = exports.ObjectNotEmpty = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ObjectNotEmpty = function ObjectNotEmpty(obj) {
  return Object.keys(obj).length;
};

exports.ObjectNotEmpty = ObjectNotEmpty;

var generateValueEmpty = function generateValueEmpty(fieldArray) {
  return fieldArray.map(function (field) {
    return {
      id: field.id,
      name: field.name,
      value: '',
      label: field.label,
      type: field.type,
      required: field.required,
      options: field.options || [],
      hide: field.parentValue ? true : field.hide || false,
      children: field.children || [],
      parentValue: field.parentValue,
      hideRequired: field.hideRequired || false,
      format: field.format || 'LL'
    };
  });
};

exports.generateValueEmpty = generateValueEmpty;

var generateFieldsWithValue = function generateFieldsWithValue(fields, values) {
  return fields.reduce(function (acc, field) {
    acc.push(_objectSpread2({}, field, {
      value: values[field.name]
    }));
    return acc;
  }, []);
};

exports.generateFieldsWithValue = generateFieldsWithValue;

var changeHideChildrens = function changeHideChildrens(field, fieldsValues) {
  var newFields = _lodash.default.cloneDeep(fieldsValues);

  var _field$value = field.value,
      value = _field$value === void 0 ? '' : _field$value,
      _field$children = field.children,
      children = _field$children === void 0 ? [] : _field$children;
  if (children.length === 0) return newFields;
  var fieldsValidated = newFields.reduce(function (acc, _field) {
    var id = _field.id,
        _field$parentValue = _field.parentValue,
        parentValue = _field$parentValue === void 0 ? '' : _field$parentValue,
        _field$hideRequired = _field.hideRequired,
        hideRequired = _field$hideRequired === void 0 ? false : _field$hideRequired;

    if (children.indexOf(id) === -1) {
      acc.push(_field);
      return acc;
    }

    var newField = _objectSpread2({}, _field);

    if (value === parentValue || parentValue === '') {
      newField = _objectSpread2({}, newField, {
        hide: false,
        required: hideRequired
      });
      acc.push(_objectSpread2({}, newField));
    } else {
      acc.push(_objectSpread2({}, newField, {
        hide: true,
        required: false
      }));
    }

    return acc;
  }, []);
  return fieldsValidated.sort(function (_field, nextField) {
    return _field.id > nextField.id ? 1 : -1;
  });
};

exports.changeHideChildrens = changeHideChildrens;