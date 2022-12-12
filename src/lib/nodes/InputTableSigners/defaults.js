export const defaultHeader = [
  {
    id: 0,
    name: 'no',
    label: 'No.',
    type: 'número',
    required: false,
  }, {
    id: 1,
    name: 'fechaPago',
    label: 'Fecha de pago',
    type: 'respuesta corta',
    required: false,
  }, {
    id: 2,
    name: 'montoSinIva',
    label: 'Monto sin iva',
    type: 'número',
    required: false,
  }, {
    id: 3,
    name: 'iva',
    label: 'IVA',
    type: 'número',
    required: false,
  }, {
    id: 4,
    name: 'total',
    label: 'Total a pagar',
    type: 'número',
    required: false,
  },
];

export const defaultData = [
  [{
    name: 'no',
    value: '1234',
  }, {
    name: 'fechaPago',
    value: '20 de marzo 2020',
  }, {
    name: 'montoSinIva',
    value: '1000',
  }, {
    name: 'iva',
    value: '160',
  }, {
    name: 'total',
    value: '1160',
  }],
];

export const defaultHeader2 = [
  {
    id: 1,
    name: 'Cantidad',
    label: 'Cantidad',
    type: 'número',
    required: true,
  },
  {
    id: 2,
    name: 'descripcionbien',
    label: 'Descripción',
    type: 'respuesta larga',
    required: false,
  },
];

export const defaultHeaderSigner = [
  {
    id: 0,
    name: 'firstName',
    label: 'Nombre',
    type: 'respuesta corta',
    required: false,
  }, 
  {
    id: 1,
    name: "Inversiones_En_Acciones",
    label: "Inversiones en Acciones",
    type: "lista",
    required: false,
    options: [ 
        {
            "name" : ""
        }, 
        {
            "name" : "Si"
        }, 
        {
            "name" : "No"
        }
    ],
    children: [
      2
    ]
  }, 
  {
    id: 2,
    name: 'NombreEmpresa',
    label: 'Nombre de la Empresa',
    type: 'respuesta corta',
    required: false,
    hide: true,
    parentValue: "Si",
    hideRequired: true
  }, 
  {
    id: 3,
    name: 'value',
    label: 'value ($)',
    type: 'respuesta corta',
    required: false
  }
];

export const defaultDataSigner = [
  [{
    name: 'firstName',
    value: 'Isidro',
  }, {
    name: 'fecha',
    value: '19 de agosto de 2022',
  }, {
    name: 'curp',
    value: 'XEXX010101HNEXXXA4',
  }, {
    name: 'rfc',
    value: 'XAXX010101000',
  }, {
    name: 'phone',
    value: '3326238200',
  }, {
    name: 'notarioocorredor',
    value: 'Notario',
  }],
];