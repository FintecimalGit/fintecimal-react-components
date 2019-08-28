"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cellphone = exports.number = exports.curp = exports.rfc = exports.email = exports.text = void 0;
var text = {
  label: 'Texto',
  errorMessages: {
    validation: 'Texto con formato no válido',
    empty: 'El campo es requerido'
  },
  type: 'text'
};
exports.text = text;
var email = {
  label: 'Correo electrónico',
  errorMessages: {
    validation: 'Correo electrónico con formato no válido',
    empty: 'El correo electrónico es requerido'
  },
  type: 'email'
};
exports.email = email;
var rfc = {
  label: 'RFC',
  errorMessages: {
    validation: 'RFC incompleto o con formato incorrecto',
    empty: 'El campo RFC es requerido'
  },
  type: 'text'
};
exports.rfc = rfc;
var curp = {
  label: 'CURP',
  errorMessages: {
    validation: 'CURP incompleto o con formato incorrecto',
    empty: 'El campo CURP es requerido'
  },
  type: 'text'
};
exports.curp = curp;
var number = {
  label: 'Número',
  errorMessages: {
    validation: 'Campo con formato incorrecto',
    empty: 'El campo es requerido'
  },
  type: 'text'
};
exports.number = number;
var cellphone = {
  label: 'Celular',
  errorMessages: {
    validation: 'El número no es válido',
    empty: 'El campo es requerido'
  },
  type: 'tel'
};
exports.cellphone = cellphone;