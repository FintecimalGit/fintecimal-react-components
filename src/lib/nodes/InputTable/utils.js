export const generateValueEmpty = (fieldArray) => {
  return fieldArray.map(field => {
    return {
      id: field.id,
      label: field.label,
      type: field.type,
      value: '',
      required: field.required
    }
  });
};

export const defaultData2 = [
  [{
    'id': 0,
    'label': 'No.',
    'type': 'número',
    'value': '',
    'required': true
  },{
    'id': 1,
    'label': 'Fecha de pago',
    'type': 'respuesta corta',
    'value': '',
    'required': true
  },{
    'id': 2,
    'label': 'Monto sin iva',
    'type': 'número',
    'value': '',
    'required': true
  },{
    'id': 3,
    'label': 'IVA',
    'type': 'número',
    'value': '',
    'required': true
  },{
    'id': 4,
    'label': 'Total a pagar',
    'type': 'número',
    'value': '',
    'required': true
  }],
  [{
    'id': 0,
    'label': 'No.',
    'type': 'número',
    'value': '123',
    'required': true
  },{
    'id': 1,
    'label': 'Fecha de pago',
    'type': 'respuesta corta',
    'value': '20 de enero',
    'required': true
  },{
    'id': 2,
    'label': 'Monto sin iva',
    'type': 'número',
    'value': '1000',
    'required': true
  },{
    'id': 3,
    'label': 'IVA',
    'type': 'número',
    'value': '160',
    'required': true
  },{
    'id': 4,
    'label': 'Total a pagar',
    'type': 'número',
    'value': '1160',
    'required': true
  }],
];

export const defaultData = [
  [
    {
      "id" : 1,
      "name" : "cantidadbien",
      "label" : "Cantidad",
      "type" : "número",
      "required" : true
    },
    {
      "id" : 2,
      "name" : "descripcionbien",
      "label" : "Descripción",
      "type" : "respuesta larga",
      "required" : true
    }
  ]
]
