"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExtensionFile = exports.ObjectNotEmpty = exports.createItemsFromCSV = exports.createHeadersFromCSV = exports.includesHeaders = exports.getHeadersFromCSV = exports.generateFieldsWithValue = exports.generateValueEmpty = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generateValueEmpty = fieldArray => fieldArray.map(field => ({
  id: field.id,
  name: field.name,
  label: field.label,
  type: field.type,
  value: '',
  required: field.required
}));

exports.generateValueEmpty = generateValueEmpty;

var generateFieldsWithValue = (fields, values) => fields.reduce((acc, field) => {
  acc.push(_objectSpread(_objectSpread({}, field), {}, {
    value: values[field.name]
  }));
  return acc;
}, []);

exports.generateFieldsWithValue = generateFieldsWithValue;

var getHeadersFromCSV = (data = []) => {
  var firstRow = data[0];
  return Object.keys(firstRow).map(key => key);
};

exports.getHeadersFromCSV = getHeadersFromCSV;

var includesHeaders = (arr1, arr2) => arr1.map(item => arr2.includes(item) ? null : item).filter(item => item);

exports.includesHeaders = includesHeaders;

var createHeadersFromCSV = (headersFromCSV, headersColumns) => headersFromCSV.reduce((acc, header, index) => {
  var headerFounded = headersColumns.find(headerColumn => headerColumn.name === header);
  acc.push({
    id: index,
    name: header.replace(/\W/g, '_'),
    label: header.replaceAll('_', ' '),
    type: 'respuesta corta',
    required: headerFounded ? headerFounded.required : false
  });
  return acc;
}, []);

exports.createHeadersFromCSV = createHeadersFromCSV;

var checkColumnsHasDataByRow = row => Object.keys(row).some(r => row[r] !== '' && row[r] !== undefined);

var createItemsFromCSV = (items, headers) => items.reduce((acc, item) => {
  var data = [];

  if (checkColumnsHasDataByRow(item)) {
    headers.map(header => {
      data.push({
        name: header.replace(/\W/g, '_'),
        label: header.replaceAll('_', ' '),
        value: item[header]
      });
    });
    acc.push(data);
  }

  return acc;
}, []);

exports.createItemsFromCSV = createItemsFromCSV;

var ObjectNotEmpty = obj => Object.keys(obj).length;

exports.ObjectNotEmpty = ObjectNotEmpty;

var getExtensionFile = ({
  name = ''
}) => name.split('.').pop();

exports.getExtensionFile = getExtensionFile;