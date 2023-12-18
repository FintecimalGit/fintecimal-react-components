export const defaultData = {
    "productsApplied" : [
        {
            "flow" : "64bed8b0c6138d5cf132916c",
            "products" : [
                "AFORO 90%"
            ],
            "applied" : false,
            "bestOption" : {
                "name" : "AFORO 90%",
                "cat" : "14.6"
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
                "cat" : "16.8"
            }
        }
    ],
    "productsRejected" : [
        {
            "flow" : "64bed8b0c6138d5cf132916c",
            "products" : [
                "AFORO 90%",
                "PREMIUM",
                "ELITE"
            ],
            "applied" : false,
            "bestOption" : {
                "name" : "ELITE",
                "cat" : 12.1
            }
        }
    ],
    "wrongConditions" : [
        {
            "name" : "Hipoteca 7x5",
            "flow" : "64bed8b0c6138d5cf1329172",
            "conditionWrong" : {
                "concept" : "Aforo 75",
                "field" : "64dbe1e7067071a24e3d83c2",
                "operator" : "menor",
                "value" : "0.76"
            }
        }
    ],
    "productosAppliedView" : [
        {
            "bestOption" : {
                "name" : "AFORO 90%",
                "cat" : "14.6",
                "tasa" : "11.7",
                "mensualidad" : "$7,896.24",
                "bankImage" : "https://fintecimal-test.s3.amazonaws.com/brokerimages/11Afirme.png"
            },
            "flow" : "64bed8b0c6138d5cf132916c"
        },
        {
            "bestOption" : {
                "name" : "Hipoteca Integral",
                "cat" : "16.8",
                "tasa" : "13.5",
                "mensualidad" : "$8,962.55",
                "bankImage" : "https://fintecimal-test.s3.amazonaws.com/brokerimages/11Santander.png"
            },
            "flow" : "64bed8b0c6138d5cf1329171"
        }
    ],
    "productsRecuperable" : {

    }
};

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
  },
  {
    id: 3,
    name: 'tasa',
    label: 'Tasa',
    required: false,
    type: "respuesta corta"
  },
  {
    id: 4,
    name: 'mensualidad',
    label: 'Mensualidad',
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

export const defaultNoBestOption = [
  [
    {
      name: 'products',
      value: '---',
    },
    {
      name: 'cat',
      value: '---',
    },
    {
      name: 'flow',
      value: '---',
    },
    {
      name: 'tasa',
      value: '---',
    },
    {
      name: 'mensualidad',
      value: '---',
    },
  ]
];