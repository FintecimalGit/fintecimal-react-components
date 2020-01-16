"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _default = data = [{
  label: 'representante legal',
  selected: false,
  complete: true,
  readOnly: true,
  values: []
}, {
  label: 'director de finanzas',
  selected: false,
  complete: true,
  readOnly: false,
  values: []
}, {
  label: 'director de cuentas',
  selected: true,
  complete: false,
  readOnly: false,
  values: [{
    label: 'AAAA - 1',
    complete: true
  }, {
    label: 'AAAA - 2',
    complete: false
  }]
}, {
  label: 'cobranza',
  selected: false,
  complete: false,
  readOnly: true,
  values: []
}];

exports.default = _default;