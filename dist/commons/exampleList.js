"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.longListWithoutCategories = exports.listWithoutCategories = exports.listWithCategories = void 0;
var listWithCategories = [{
  type: 'string',
  name: 'Category 1',
  children: [{
    type: 'string',
    name: 'Child 1'
  }, {
    type: 'string',
    name: 'Child 2'
  }, {
    type: 'string',
    name: 'Child 3'
  }]
}, {
  type: 'string',
  name: 'Category 2',
  children: [{
    type: 'string',
    name: 'Child 1'
  }, {
    type: 'string',
    name: 'Child 2'
  }, {
    type: 'string',
    name: 'Child 3'
  }]
}, {
  type: 'string',
  name: 'Category 3',
  children: [{
    type: 'string',
    name: 'Child 1'
  }, {
    type: 'string',
    name: 'Child 2'
  }, {
    type: 'string',
    name: 'Child 3'
  }]
}];
exports.listWithCategories = listWithCategories;
var listWithoutCategories = [{
  type: 'string',
  name: 'Todos TODOS'
}, {
  type: 'string',
  name: 'Completo COMPLETO'
}, {
  type: 'string',
  name: 'Inactivo INACTIVO'
}, {
  type: 'string',
  name: 'Pendiente PENDIENTE'
}];
exports.listWithoutCategories = listWithoutCategories;
var longListWithoutCategories = [{
  type: 'string',
  name: 'La estructura organizacional está alineada con los objetivos del negocio y el entorno de control interno es sólido.'
}, {
  type: 'string',
  name: 'La estructura organizacional se encuentra de alguna manera inconsistente con respecto a los actuales objetivos del negocio. Se observan varios cambios organizacionales que han tenido ciertos impactos en la capacidad del deudor para operar y entregar sus productos de forma coordinada y eficiente.'
}, {
  type: 'string',
  name: 'Existen claras debilidades en la estructura organizacional que ponen en alto riesgo la capacidad de generar flujos de efectivo sostenible para enfrentar sus obligaciones de deuda.'
}, {
  type: 'string',
  name: 'Sin información.'
}];
exports.longListWithoutCategories = longListWithoutCategories;