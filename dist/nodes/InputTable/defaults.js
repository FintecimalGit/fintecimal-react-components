"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultHeader2 = exports.defaultData = exports.defaultHeader = void 0;
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