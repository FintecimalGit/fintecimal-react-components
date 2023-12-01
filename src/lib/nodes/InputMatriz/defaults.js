export const defaultData = [
  {
      "flow" : "64bed8b0c6138d5cf132916c",
      "products" : [
          "AFORO 90%"
      ],
      "applied" : false,
      "bestOption" : {
          "name" : "AFORO 90%",
          "cat" : 14.6
      }
  },
  {
      "flow" : "64bed8b0c6138d5cf1329171",
      "products" : [
          "Hipoteca Integral"
      ],
      "applied" : false,
      "bestOption" : {
          "name" : "Hipoteca Integral",
          "cat" : 16.8
      }
  }
];

export const defaultHeader = [
  { id: 0,
    name: 'flow',
    label: 'Banco',
    required: false,
    type: "respuesta corta"
  },
  { id: 1,
    name: 'products',
    label: 'Productos',
    required: false,
    type: "respuesta corta"
  },
  {
    id: 2,
    name: 'cat',
    label: 'CAT',
    required: false,
    type: "respuesta corta"
  }
];

export const defaultFlows = [
  {
    "_id" : "64bed8b0c6138d5cf1329171",
    "name" : "Santander"
  },
  {
    "_id" : "64bed8b0c6138d5cf132916c",
    "name" : "Afirme"
  },
  {
    "_id" : "64bed8b0c6138d5cf132916d",
    "name" : "Banorte"
  },
  {
    "_id" : "64bed8b0c6138d5cf1329172",
    "name" : "Scotiabank"
  },
  {
    "_id" : "64bed8b0c6138d5cf132916e",
    "name" : "Banregio"
  },
  {
    "_id" : "64bed8b0c6138d5cf132916f",
    "name" : "Citibanamex"
  },
  {
    "_id" : "64bed8b0c6138d5cf1329170",
    "name" : "HSBC"
  }
];
