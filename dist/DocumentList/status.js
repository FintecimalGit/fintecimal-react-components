"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEQUENCE_STATUS = exports.REVISION = exports.PENDING = exports.REJECTED = exports.ACCEPTED = void 0;
var ACCEPTED = 'Aceptado';
exports.ACCEPTED = ACCEPTED;
var REJECTED = 'Rechazado';
exports.REJECTED = REJECTED;
var PENDING = 'Pendiente';
exports.PENDING = PENDING;
var REVISION = 'En Revisión';
exports.REVISION = REVISION;
var SEQUENCE_STATUS = {
  [ACCEPTED]: ACCEPTED,
  [REVISION]: ACCEPTED,
  [REJECTED]: REVISION,
  [PENDING]: REVISION
};
exports.SEQUENCE_STATUS = SEQUENCE_STATUS;