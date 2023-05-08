"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changeHideChildrens = exports.formatDateColumnsToSpanish = exports.getExtensionFile = exports.ObjectNotEmpty = exports.createItemsFromCSV = exports.createHeadersFromCSV = exports.includesHeaders = exports.getHeadersFromCSV = exports.generateFieldsWithValue = exports.generateValueEmpty = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

var generateValueEmpty = function generateValueEmpty(fieldArray) {
  return fieldArray.map(function (field) {
    return {
      id: field.id,
      name: field.name,
      label: field.label,
      type: field.type,
      required: field.required,
      options: field.options || [],
      hide: field.parentValue ? true : field.hide || false,
      children: field.children || [],
      parentValue: field.parentValue,
      hideRequired: field.hideRequired || false,
      format: field.format || 'LL'
    };
  });
};

exports.generateValueEmpty = generateValueEmpty;

var generateFieldsWithValue = function generateFieldsWithValue(fields, values) {
  return fields.reduce(function (acc, field) {
    acc.push(_objectSpread2({}, field, {
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

var checkCellContainsMonths = function checkCellContainsMonths(cell) {
  return months.some(function (month) {
    return cell.includes(month);
  });
};

var formatDateColumnsToSpanish = function formatDateColumnsToSpanish(data) {
  return _toConsumableArray(data).map(function (flag) {
    Object.keys(flag).map(function (key) {
      if (checkCellContainsMonths(flag[key])) {
        months.map(function (month, i) {
          if (flag[key].includes(month)) flag[key] = flag[key].replace(month, meses[i]);
        });
      }
    });
    return flag;
  });
};

exports.formatDateColumnsToSpanish = formatDateColumnsToSpanish;

var changeHideChildrens = function changeHideChildrens(field, fieldsValues) {
  var newFields = _.cloneDeep(fieldsValues);

  var _field$value = field.value,
      value = _field$value === void 0 ? '' : _field$value,
      _field$children = field.children,
      children = _field$children === void 0 ? [] : _field$children;
  if (children.length === 0) return newFields;
  var fieldsValidated = newFields.reduce(function (acc, _field) {
    var id = _field.id,
        _field$parentValue = _field.parentValue,
        parentValue = _field$parentValue === void 0 ? '' : _field$parentValue,
        _field$hideRequired = _field.hideRequired,
        hideRequired = _field$hideRequired === void 0 ? false : _field$hideRequired;

    if (children.indexOf(id) === -1) {
      acc.push(_field);
      return acc;
    }

    var newField = _objectSpread2({}, _field);

    if (value === parentValue || parentValue === '') {
      newField = _objectSpread2({}, newField, {
        hide: false,
        required: hideRequired
      });
      acc.push(_objectSpread2({}, newField));
    } else {
      acc.push(_objectSpread2({}, newField, {
        hide: true,
        required: false
      }));
    }

    return acc;
  }, []);
  return fieldsValidated.sort(function (field, nextField) {
    return field.id > nextField.id ? 1 : -1;
  });
};

exports.changeHideChildrens = changeHideChildrens;