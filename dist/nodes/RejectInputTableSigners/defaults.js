"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultRejectDataSigner = exports.defaultDataSigner = exports.defaultHeaderSigner = exports.defaultHeader2 = exports.defaultData = exports.defaultHeader = void 0;
var defaultHeader = [{
  id: 0,
  name: 'no',
  label: 'No.',
  type: 'número',
  required: false
}, {
  id: 1,
  name: 'fechaPago',
  label: 'Fecha de pago',
  type: 'respuesta corta',
  required: false
}, {
  id: 2,
  name: 'montoSinIva',
  label: 'Monto sin iva',
  type: 'número',
  required: false
}, {
  id: 3,
  name: 'iva',
  label: 'IVA',
  type: 'número',
  required: false
}, {
  id: 4,
  name: 'total',
  label: 'Total a pagar',
  type: 'número',
  required: false
}];
exports.defaultHeader = defaultHeader;
var defaultData = [[{
  name: 'no',
  value: '1234'
}, {
  name: 'fechaPago',
  value: '20 de marzo 2020'
}, {
  name: 'montoSinIva',
  value: '1000'
}, {
  name: 'iva',
  value: '160'
}, {
  name: 'total',
  value: '1160'
}]];
exports.defaultData = defaultData;
var defaultHeader2 = [{
  id: 1,
  name: 'Cantidad',
  label: 'Cantidad',
  type: 'número',
  required: true
}, {
  id: 2,
  name: 'descripcionbien',
  label: 'Descripción',
  type: 'respuesta larga',
  required: false
}];
exports.defaultHeader2 = defaultHeader2;
var defaultHeaderSigner = [{
  id: 0,
  name: 'firstName',
  label: 'Nombre',
  type: 'respuesta corta',
  required: false
}, {
  id: 1,
  name: "Inversiones_En_Acciones",
  label: "Inversiones en Acciones",
  type: "lista",
  required: false,
  options: [{
    "name": ""
  }, {
    "name": "Si"
  }, {
    "name": "No"
  }],
  children: [2]
}, {
  id: 2,
  name: 'NombreEmpresa',
  label: 'Nombre de la Empresa',
  type: 'respuesta corta',
  required: false,
  hide: true,
  parentValue: "Si",
  hideRequired: true
}, {
  id: 3,
  name: 'value',
  label: 'value ($)',
  type: 'respuesta corta',
  required: false
}, {
  id: 4,
  name: 'value1',
  label: 'value ($)',
  type: 'respuesta corta',
  required: false
}, {
  id: 5,
  name: 'value2',
  label: 'value ($)',
  type: 'respuesta corta',
  required: false
}, {
  id: 6,
  name: 'value3',
  label: 'value ($)',
  type: 'respuesta corta',
  required: false
}, {
  id: 7,
  name: 'value4',
  label: 'value ($)',
  type: 'respuesta corta',
  required: false
}, {
  id: 8,
  name: 'value5',
  label: 'value ($)',
  type: 'respuesta corta',
  required: false
}, {
  id: 9,
  name: 'value6',
  label: 'value ($)',
  type: 'respuesta corta',
  required: false
}, {
  id: 10,
  name: 'value7',
  label: 'value ($)',
  type: 'respuesta corta',
  required: false
}];
exports.defaultHeaderSigner = defaultHeaderSigner;
var defaultDataSigner = [[{
  name: 'firstName',
  value: 'Isidro1'
}, {
  name: 'Inversiones_En_Acciones',
  value: 'Si'
}, {
  name: 'NombreEmpresa',
  value: 'Docupass Awui wui'
}, {
  name: 'value',
  value: '123'
}, {
  name: 'value1',
  value: '456'
}, {
  name: 'value2',
  value: '789'
}, {
  name: 'value3',
  value: '1011'
}, {
  name: 'value4',
  value: '1213'
}, {
  name: 'value5',
  value: '1415'
}, {
  name: 'value6',
  value: '1617'
}, {
  name: 'value7',
  value: '1819'
}], [{
  name: 'firstName',
  value: 'Isidro2'
}, {
  name: 'Inversiones_En_Acciones',
  value: 'Si'
}, {
  name: 'NombreEmpresa',
  value: 'Docupass Awui wui 2'
}, {
  name: 'value',
  value: '1232'
}, {
  name: 'value1',
  value: '4562'
}, {
  name: 'value2',
  value: '7892'
}, {
  name: 'value3',
  value: '10112'
}, {
  name: 'value4',
  value: '12132'
}, {
  name: 'value5',
  value: '14152'
}, {
  name: 'value6',
  value: '16172'
}, {
  name: 'value7',
  value: '18192'
}], [{
  name: 'firstName',
  value: 'Isidro3'
}, {
  name: 'Inversiones_En_Acciones',
  value: 'Si'
}, {
  name: 'NombreEmpresa',
  value: 'Docupass Awui wui 3'
}, {
  name: 'value',
  value: '1233'
}, {
  name: 'value1',
  value: '4563'
}, {
  name: 'value2',
  value: '7893'
}, {
  name: 'value3',
  value: '10113'
}, {
  name: 'value4',
  value: '12133'
}, {
  name: 'value5',
  value: '14153'
}, {
  name: 'value6',
  value: '16173'
}, {
  name: 'value7',
  value: '18193'
}]];
exports.defaultDataSigner = defaultDataSigner;
var defaultRejectDataSigner = [[{
  name: 'firstName',
  value: 'Isidro1'
}, {
  name: 'Inversiones_En_Acciones',
  value: 'Si'
}, {
  name: 'NombreEmpresa',
  value: 'Docupass Awui wui'
}, {
  name: 'value',
  value: '123'
}, {
  name: 'value1',
  value: '456'
}, {
  name: 'value2',
  value: '789'
}, {
  name: 'value3',
  value: '1011'
}, {
  name: 'value4',
  value: '1213'
}, {
  name: 'value5',
  value: '1415'
}, {
  name: 'value6',
  value: '1617'
}, {
  name: 'value7',
  value: '1819'
}], [{
  name: 'firstName',
  value: 'Isidro2'
}, {
  name: 'Inversiones_En_Acciones',
  value: 'Si'
}, {
  name: 'NombreEmpresa',
  value: 'Docupass Awui wui 2'
}, {
  name: 'value',
  value: '1232'
}, {
  name: 'value1',
  value: '4562'
}, {
  name: 'value2',
  value: '7892'
}, {
  name: 'value3',
  value: '10112'
}, {
  name: 'value4',
  value: '12132'
}, {
  name: 'value5',
  value: '14152'
}, {
  name: 'value6',
  value: '16172'
}, {
  name: 'value7',
  value: '18192'
}], [{
  name: 'firstName',
  value: 'Isidro3'
}, {
  name: 'Inversiones_En_Acciones',
  value: 'Si'
}, {
  name: 'NombreEmpresa',
  value: 'Docupass Awui wui 3'
}, {
  name: 'value',
  value: '1233'
}, {
  name: 'value1',
  value: '4563'
}, {
  name: 'value2',
  value: '7893'
}, {
  name: 'value3',
  value: '10113'
}, {
  name: 'value4',
  value: '12133'
}, {
  name: 'value5',
  value: '14153'
}, {
  name: 'value6',
  value: '16173'
}, {
  name: 'value7',
  value: '18193'
}]];
exports.defaultRejectDataSigner = defaultRejectDataSigner;