"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var email = {
  label: 'Correo electrónico',
  errorMessages: {
    validation: 'Correo con formato no válido',
    empty: 'El correo electrónico es requerido'
  },
  type: 'email'
};
var rfc = {
  label: 'RFC',
  errorMessages: {
    validation: 'RFC no válido',
    empty: 'El campo RFC es requerido'
  },
  type: 'text'
};
var _default = {
  rfc: rfc,
  email: email
};
exports.default = _default;