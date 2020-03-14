"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultData = exports.defaultData2 = exports.generateValueEmpty = void 0;

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
var defaultData2 = [[{
  'id': 0,
  'name': 'no',
  'label': 'No.',
  'type': 'número',
  'value': '',
  'required': true
}, {
  'id': 1,
  'name': 'fechaPago',
  'label': 'Fecha de pago',
  'type': 'respuesta corta',
  'value': '',
  'required': true
}, {
  'id': 2,
  'name': 'montoSinIva',
  'label': 'Monto sin iva',
  'type': 'número',
  'value': '',
  'required': true
}, {
  'id': 3,
  'name': 'iva',
  'label': 'IVA',
  'type': 'número',
  'value': '',
  'required': true
}, {
  'id': 4,
  'name': 'total',
  'label': 'Total a pagar',
  'type': 'número',
  'value': '',
  'required': true
}], [{
  'id': 0,
  'name': 'no',
  'label': 'No.',
  'type': 'número',
  'value': '123',
  'required': true
}, {
  'id': 1,
  'name': 'fechaPago',
  'label': 'Fecha de pago',
  'type': 'respuesta corta',
  'value': '20 de enero',
  'required': true
}, {
  'id': 2,
  'name': 'montoSinIVA',
  'label': 'Monto sin iva',
  'type': 'número',
  'value': '1000',
  'required': true
}, {
  'id': 3,
  'name': 'iva',
  'label': 'IVA',
  'type': 'número',
  'value': '160',
  'required': true
}, {
  'id': 4,
  'name': 'total',
  'label': 'Total a pagar',
  'type': 'número',
  'value': '1160',
  'required': true
}]];
exports.defaultData2 = defaultData2;
var defaultData = [[{
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
exports.defaultData = defaultData;