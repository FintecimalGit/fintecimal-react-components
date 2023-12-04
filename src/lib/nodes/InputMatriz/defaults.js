export const defaultData = [
  {
      "name" : "AFORO 90%",
      "flow" : "64bed8b0c6138d5cf132916c",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "11"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "24"
                  }
              ]
          ]
      }
  },
  {
      "name" : "PREMIUM",
      "flow" : "64bed8b0c6138d5cf132916c",
      "conditionWrong" : {
          "concept" : "Aforo maximo",
          "field" : "64dbe1e7067071a24e3d83c2",
          "operator" : "menor",
          "value" : "0.81"
      }
  },
  {
      "name" : "ELITE",
      "flow" : "64bed8b0c6138d5cf132916c",
      "conditionWrong" : {
          "concept" : "Aforo maximo",
          "field" : "64dbe1e7067071a24e3d83c2",
          "operator" : "menor",
          "value" : "0.61"
      }
  },
  {
      "name" : "Hipoteca Perfiles Aforo Mayor 80",
      "flow" : "64bed8b0c6138d5cf132916f",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "11"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "49"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Perfiles Aforo Menor 80",
      "flow" : "64bed8b0c6138d5cf132916f",
      "conditionWrong" : {
          "concept" : "Aforo 90 cuando es asalariado o 85 cuando es independiente",
          "field" : "64dbe1e7067071a24e3d83c2",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Aforo 80",
                      "field" : "64dbe1e7067071a24e3d83c2",
                      "operator" : "menor",
                      "value" : "0.81"
                  },
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Apoyo",
                      "field" : "64dac1f2067071a24e24d588",
                      "operator" : "igual",
                      "value" : "No"
                  }
              ],
              [
                  {
                      "concept" : "Aforo 80",
                      "field" : "64dbe1e7067071a24e3d83c2",
                      "operator" : "menor",
                      "value" : "0.81"
                  },
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Apoyo",
                      "field" : "64dac1f2067071a24e24d588",
                      "operator" : "includesSome",
                      "value" : [
                          "Apoyo Infonavit",
                          "Cofinavit",
                          "FOVISSSTE para todos",
                          "Cuenta Infonavit y Crédito Bancario"
                      ]
                  }
              ],
              [
                  {
                      "concept" : "Aforo 80",
                      "field" : "64dbe1e7067071a24e3d83c2",
                      "operator" : "menor",
                      "value" : "0.81"
                  },
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  }
              ],
              [
                  {
                      "concept" : "Aforo 80",
                      "field" : "64dbe1e7067071a24e3d83c2",
                      "operator" : "menor",
                      "value" : "0.81"
                  },
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Fuerte",
      "flow" : "64bed8b0c6138d5cf132916d",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "5"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "5"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "9"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Fuerte Cero",
      "flow" : "64bed8b0c6138d5cf132916d",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "5"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "5"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "9"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Fuerte con bonificacion",
      "flow" : "64bed8b0c6138d5cf132916d",
      "conditionWrong" : {
          "concept" : "RPI Ingresos por Mensualidad",
          "field" : "64dd68c484083a1767191f22",
          "operator" : "mayor",
          "value" : "1.99"
      }
  },
  {
      "name" : "Hipoteca Fuerte a tu medida",
      "flow" : "64bed8b0c6138d5cf132916d",
      "conditionWrong" : {
          "concept" : "Aforo 85 tradicional o 90 cuando es infonavit y confinamientos",
          "field" : "64dbe1e7067071a24e3d83c2",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Aforo 85",
                      "field" : "64dbe1e7067071a24e3d83c2",
                      "operator" : "menor",
                      "value" : "0.86"
                  },
                  {
                      "concept" : "¿Apoyo?",
                      "field" : "64dac1f2067071a24e24d588",
                      "operator" : "igual",
                      "value" : "No"
                  }
              ],
              [
                  {
                      "concept" : "Aforo 90",
                      "field" : "64dbe1e7067071a24e3d83c2",
                      "operator" : "menor",
                      "value" : "0.91"
                  },
                  {
                      "concept" : "¿Apoyo?",
                      "field" : "64dac1f2067071a24e24d588",
                      "operator" : "includesSome",
                      "value" : [
                          "Apoyo Infonavit",
                          "Cofinavit",
                          "Cuenta Infonavit y Crédito Bancario",
                          "FOVISSSTE para todos"
                      ]
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Naranja",
      "flow" : "64bed8b0c6138d5cf132916e",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "5"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Premier",
      "flow" : "64bed8b0c6138d5cf1329170",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "5"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "24"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca HSBC",
      "flow" : "64bed8b0c6138d5cf1329170",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "5"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "24"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Exclusiva",
      "flow" : "64bed8b0c6138d5cf1329170",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "5"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "24"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Santander",
      "flow" : "64bed8b0c6138d5cf1329171",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "0"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Integral",
      "flow" : "64bed8b0c6138d5cf1329171",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "0"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Free",
      "flow" : "64bed8b0c6138d5cf1329171",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "0"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca Free 80%",
      "flow" : "64bed8b0c6138d5cf1329171",
      "conditionWrong" : {
          "concept" : "Aforo maximo",
          "field" : "64dbe1e7067071a24e3d83c2",
          "operator" : "menor",
          "value" : "0.80"
      }
  },
  {
      "name" : "Valora",
      "flow" : "64bed8b0c6138d5cf1329172",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "¿Apoyo?",
                      "field" : "64dac1f2067071a24e24d588",
                      "operator" : "igual",
                      "value" : "No"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "¿Apoyo?",
                      "field" : "64dac1f2067071a24e24d588",
                      "operator" : "includesSome",
                      "value" : [
                          "Cofinavit",
                          "Apoyo Infonavit"
                      ]
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "0"
                  }
              ]
          ]
      }
  },
  {
      "name" : "Hipoteca 7x5",
      "flow" : "64bed8b0c6138d5cf1329172",
      "conditionWrong" : {
          "concept" : "Aforo 75",
          "field" : "64dbe1e7067071a24e3d83c2",
          "operator" : "menor",
          "value" : "0.76"
      }
  },
  {
      "name" : "Producto Desarrolladores",
      "flow" : "64bed8b0c6138d5cf1329172",
      "conditionWrong" : {
          "concept" : "Antiguedad de empleo",
          "field" : "64b72b72b9a4f845f01af8c3",
          "operator" : "conditionatedArraySome",
          "value" : "conditionatedArraySome",
          "conditions" : [
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "¿Apoyo?",
                      "field" : "64dac1f2067071a24e24d588",
                      "operator" : "igual",
                      "value" : "No"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Asalariado"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64b72b72b9a4f845f01af8c3",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "¿Apoyo?",
                      "field" : "64dac1f2067071a24e24d588",
                      "operator" : "includesSome",
                      "value" : [
                          "Cofinavit",
                          "Apoyo Infonavit"
                      ]
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Independiente"
                  },
                  {
                      "concept" : "Antiguedad de empleo",
                      "field" : "64d2c9b90a145f6ee0934129",
                      "operator" : "mayor",
                      "value" : "23"
                  }
              ],
              [
                  {
                      "concept" : "Tipo de ingresos",
                      "field" : "64b1ddafb1993273413802db",
                      "operator" : "igual",
                      "value" : "Socio Accionista"
                  },
                  {
                      "concept" : "Antiguedad de empresa",
                      "field" : "65401173bf4e5428824a7ce8",
                      "operator" : "mayor",
                      "value" : "23"
                  },
                  {
                      "concept" : "Porcentaje de Participación Accionaria",
                      "field" : "6540156ebf4e5428824a7ceb",
                      "operator" : "mayor",
                      "value" : "0"
                  }
              ]
          ]
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
    }
  ]
];