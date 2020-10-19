"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getExtensionFile = exports.ObjectNotEmpty = exports.createItemsFromCSV = exports.createHeadersFromCSV = exports.includesHeaders = exports.getHeadersFromCSV = exports.generateFieldsWithValue = exports.generateValueEmpty = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var generateValueEmpty = function generateValueEmpty(fieldArray) {
  return fieldArray.map(function (field) {
    return {
      id: field.id,
      name: field.name,
      label: field.label,
      type: field.type,
      value: '',
      required: field.required
    };
  });
};

exports.generateValueEmpty = generateValueEmpty;

var generateFieldsWithValue = function generateFieldsWithValue(fields, values) {
  return fields.reduce(function (acc, field) {
    acc.push(_objectSpread({}, field, {
      value: values[field.name]
    }));
    return acc;
  }, []);
};

exports.generateFieldsWithValue = generateFieldsWithValue;

var getHeadersFromCSV = function getHeadersFromCSV() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var firstRow = data[0];
  return Object.keys(firstRow).map(function (key) {
    return key;
  });
};

exports.getHeadersFromCSV = getHeadersFromCSV;

var includesHeaders = function includesHeaders(arr1, arr2) {
  return arr1.map(function (item) {
    return arr2.includes(item) ? null : item;
  }).filter(function (item) {
    return item;
  });
};

exports.includesHeaders = includesHeaders;

var createHeadersFromCSV = function createHeadersFromCSV(headersFromCSV, headersColumns) {
  return headersFromCSV.reduce(function (acc, header, index) {
    var headerFounded = headersColumns.find(function (headerColumn) {
      return headerColumn.name === header;
    });
    acc.push({
      id: index,
      name: header.replace(/\W/g, '_'),
      label: header.replaceAll('_', ' '),
      type: 'respuesta corta',
      required: headerFounded ? headerFounded.required : false
    });
    return acc;
  }, []);
};

exports.createHeadersFromCSV = createHeadersFromCSV;

var checkColumnsHasDataByRow = function checkColumnsHasDataByRow(row) {
  return Object.keys(row).some(function (r) {
    return row[r] !== '' && row[r] !== undefined;
  });
};

var createItemsFromCSV = function createItemsFromCSV(items, headers) {
  return items.reduce(function (acc, item) {
    var data = [];

    if (checkColumnsHasDataByRow(item)) {
      headers.map(function (header) {
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
};

exports.createItemsFromCSV = createItemsFromCSV;

var ObjectNotEmpty = function ObjectNotEmpty(obj) {
  return Object.keys(obj).length;
};

exports.ObjectNotEmpty = ObjectNotEmpty;

var getExtensionFile = function getExtensionFile(_ref) {
  var _ref$name = _ref.name,
      name = _ref$name === void 0 ? '' : _ref$name;
  return name.split('.').pop();
};

exports.getExtensionFile = getExtensionFile;