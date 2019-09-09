"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateRegex = exports.formatText = exports.removeNan = exports.isTextLong = exports.defaultPlaceHolder = exports.isNumber = exports.isEmpty = exports.status = exports.textFormats = void 0;
var textFormats = {
  UPPER: 'upperCase',
  LOWER: 'lowerCase',
  NUMBER: 'number'
};
exports.textFormats = textFormats;
var status = {
  NORMAL: 'normal',
  FOCUS: 'focus',
  ERROR: 'error'
};
exports.status = status;

var isEmpty = function isEmpty(data) {
  return !data || data.length < 1;
};

exports.isEmpty = isEmpty;

var isNumber = function isNumber(data) {
  return !isNaN(Number(data));
};

exports.isNumber = isNumber;
var MAX_LENGTH_LABEL = 100;
var defaultPlaceHolder = 'Escribe aquí';
exports.defaultPlaceHolder = defaultPlaceHolder;

var isTextLong = function isTextLong(text) {
  return text.length > MAX_LENGTH_LABEL;
};

exports.isTextLong = isTextLong;

var removeNan = function removeNan(text) {
  while (text.length > 0) {
    if (isNumber(text)) return text;else {
      text = text.slice(0, text.length - 1);
    }
  }

  return '';
};

exports.removeNan = removeNan;

var formatText = function formatText(text, format) {
  if (!text || text.length < 1) return '';

  if (format === textFormats.UPPER) {
    return text.toUpperCase();
  }

  if (format === textFormats.LOWER) {
    return text.toLowerCase();
  }

  if (format === textFormats.NUMBER) {
    if (isNumber(text)) {
      return text;
    } else return removeNan(text);
  }
};

exports.formatText = formatText;

var validateRegex = function validateRegex(text, reg) {
  return reg.test(text);
};

exports.validateRegex = validateRegex;