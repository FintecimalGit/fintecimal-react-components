"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultHeader2 = exports.defaultData = exports.defaultHeader = exports.generateFieldsWithValue = exports.generateValueEmpty = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generateValueEmpty = function generateValueEmpty(fieldArray) {
  return fieldArray.map(function (field) {
    return {
      id: field.id,
      name: field.name,
      label: field.label,
      type: field.type,
      value: '',
      required: field.required
    };
  });
};

exports.generateValueEmpty = generateValueEmpty;

var generateFieldsWithValue = function generateFieldsWithValue(fields, values) {
  return fields.reduce(function (acc, field) {
    acc.push(_objectSpread({}, field, {
      value: values[field.name]
    }));
    return acc;
  }, []);
};

exports.generateFieldsWithValue = generateFieldsWithValue;
var defaultHeader = [{
  'id': 0,
  'name': 'no',
  'label': 'No.',
  'type': 'número',
  'required': true
}, {
  'id': 1,
  'name': 'fechaPago',
  'label': 'Fecha de pago',
  'type': 'respuesta corta',
  'required': false
}, {
  'id': 2,
  'name': 'montoSinIva',
  'label': 'Monto sin iva',
  'type': 'número',
  'required': true
}, {
  'id': 3,
  'name': 'iva',
  'label': 'IVA',
  'type': 'número',
  'required': false
}, {
  'id': 4,
  'name': 'total',
  'label': 'Total a pagar',
  'type': 'número',
  'required': true
}];
exports.defaultHeader = defaultHeader;
var defaultData = [[{
  'name': 'no',
  'value': '1234'
}, {
  'name': 'fechaPago',
  'value': '20 de marzo 2020'
}, {
  'name': 'montoSinIva',
  'value': '1000'
}, {
  'name': 'iva',
  'value': '160'
}, {
  'name': 'total',
  'value': '1160'
}]];
exports.defaultData = defaultData;
var defaultHeader2 = [[{
  "id": 1,
  "name": "cantidadbien",
  "label": "Cantidad",
  "type": "número",
  "required": true
}, {
  "id": 2,
  "name": "descripcionbien",
  "label": "Descripción",
  "type": "respuesta larga",
  "required": true
}]];
exports.defaultHeader2 = defaultHeader2;