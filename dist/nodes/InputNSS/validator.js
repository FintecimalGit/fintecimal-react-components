"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidNss = exports.nssValidator = void 0;

var _utils = require("../../commons/utils");

var MAX_SINGLE_DIGIT = 9;
var nssValidator = {
  label: 'Número de seguridad social',
  errorMessages: {
    validation: 'Número de seguridad social no válido',
    empty: 'El campo es requerido'
  },
  type: 'text'
};
exports.nssValidator = nssValidator;

var luhn = function luhn(nssValue) {
  var sum = 0;
  var isEvenPosition = false;

  for (var i = nssValue.length - 1; i >= 0; i -= 1) {
    var digit = parseInt(nssValue.charAt(i), 10);

    if (isEvenPosition) {
      digit *= 2;

      if (digit > MAX_SINGLE_DIGIT) {
        digit -= MAX_SINGLE_DIGIT;
      }
    }

    isEvenPosition = !isEvenPosition;
    sum += digit;
  }

  return sum % 10 === 0;
};

var isValidNss = function isValidNss(data) {
  if ((0, _utils.isEmpty)(data)) return false;
  var regE = /^(\d{2})(\d{2})(\d{2})\d{5}$/;
  var valid = data.match(regE);
  if (!valid) return false;
  var yearAlta = parseInt(valid[2], 10);
  var yearNac = parseInt(valid[3], 10);

  var adjustYear = function adjustYear(year) {
    var currentYear = new Date().getFullYear();
    var currentCenturyStart = Math.floor(currentYear / 100) * 100;
    var yearModulo = currentYear % 100;

    if (year <= yearModulo) {
      return currentCenturyStart + year;
    }

    return currentCenturyStart - 100 + year;
  };

  var adjustedYearAlta = adjustYear(yearAlta);
  var adjustedYearNac = adjustYear(yearNac);
  if (adjustedYearNac > adjustedYearAlta) return false;
  return luhn(data);
};

exports.isValidNss = isValidNss;