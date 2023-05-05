"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultInputTableSelectValue = exports.defaultHeaderTableSelect = exports.defaultDataSigner = exports.defaultHeaderSigner = exports.defaultHeader2 = exports.defaultData = exports.defaultHeader = void 0;
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
  name: 'Inversiones_En_Acciones',
  label: 'Inversiones en Acciones',
  type: 'lista',
  required: false,
  options: [{
    name: ''
  }, {
    name: 'Si'
  }, {
    name: 'No'
  }],
  children: [2]
}, {
  id: 2,
  name: 'NombreEmpresa',
  label: 'Nombre de la Empresa',
  type: 'respuesta corta',
  required: false,
  hide: true,
  parentValue: 'Si',
  hideRequired: true
}, {
  id: 3,
  name: 'value',
  label: 'value ($)',
  type: 'respuesta corta',
  required: false
}];
exports.defaultHeaderSigner = defaultHeaderSigner;
var defaultDataSigner = [[{
  name: 'firstName',
  value: 'Isidrooo'
}, {
  name: 'NombreEmpresa',
  value: 'EMpresaaa'
}, {
  name: 'Cantidad',
  value: '11111'
}, {
  name: 'Inversiones_En_Acciones',
  value: 'No'
}, {
  name: 'fecha',
  value: '19 de agosto de 2022'
}, {
  name: 'curp',
  value: 'XEXX010101HNEXXXA4'
}, {
  name: 'rfc',
  value: 'XAXX010101000'
}, {
  name: 'phone',
  value: '3326238200'
}, {
  name: 'notarioocorredor',
  value: 'Notario'
}]];
exports.defaultDataSigner = defaultDataSigner;
var defaultHeaderTableSelect = [{
  id: 1,
  name: "Descripción",
  label: "Descripción",
  type: "respuesta corta",
  required: false
}, {
  id: 2,
  name: "Datos_RPPC",
  label: "Fecha de Pago",
  type: "fecha",
  required: false
}, {
  id: 3,
  name: "Valor",
  label: "($) Valor",
  type: "currency",
  required: false
}, {
  id: 4,
  name: "Gravamen",
  label: "($) Gravamen",
  type: "currency",
  required: false
}];
exports.defaultHeaderTableSelect = defaultHeaderTableSelect;
var defaultInputTableSelectValue = [{
  keys: {
    rfcFieldAval: 'XAXX010101000',
    emailAval: 'ej1@gmail.com'
  },
  value: [[{
    name: 'Descripción',
    label: 'Descripción',
    value: 'aaa'
  }, {
    name: 'Datos_RPPC',
    label: 'Fecha de Pago',
    valu: ''
  }, {
    name: 'Valor',
    label: '($) Valor',
    value: ''
  }, {
    name: 'Gravamen',
    label: '($) Gravamen',
    value: ''
  }], [{
    name: 'Descripción',
    label: 'Descripción',
    value: 'aaaaa'
  }, {
    name: 'Datos_RPPC',
    label: 'Fecha de Pago',
    value: ''
  }, {
    name: 'Valor',
    label: '($) Valor',
    value: '$111,111'
  }, {
    name: 'Gravamen',
    label: '($) Gravamen',
    value: '$1,111,111'
  }]]
}, {
  keys: {
    rfcFieldAval: 'XAXX010101111',
    emailAval: 'ej1@gmail.com'
  },
  value: [[{
    name: 'Descripción',
    label: 'Descripción',
    value: 'bbb'
  }, {
    name: 'Datos_RPPC',
    label: 'Fecha de Pago',
    value: ''
  }, {
    name: 'Valor',
    label: '($) Valor',
    value: ''
  }, {
    name: 'Gravamen',
    label: '($) Gravamen',
    value: ''
  }], [{
    name: 'Descripción',
    label: 'Descripción',
    value: 'bbbb'
  }, {
    name: 'Datos_RPPC',
    label: 'Fecha de Pago',
    value: '29 de abril de 2023'
  }, {
    name: 'Valor',
    label: '($) Valor',
    value: '$22,222'
  }, {
    name: 'Gravamen',
    label: '($) Gravamen',
    value: '$2,222,222'
  }]]
}];
exports.defaultInputTableSelectValue = defaultInputTableSelectValue;