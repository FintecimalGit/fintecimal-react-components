"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.listWithoutCategories = exports.listWithCategories = void 0;
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