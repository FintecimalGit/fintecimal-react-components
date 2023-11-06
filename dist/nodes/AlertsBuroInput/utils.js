"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.includesHeaders = exports.getHeadersFromCSV = exports.getExtensionFile = exports.generateValueEmpty = exports.generateFieldsWithValue = exports.formatDateColumnsToSpanish = exports.createItemsFromCSV = exports.createHeadersFromCSV = exports.changeHideChildrens = exports.ObjectNotEmpty = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
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
    acc.push(_objectSpread(_objectSpread({}, field), {}, {
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
    var newField = _objectSpread({}, _field);
    if (value === parentValue || parentValue === '') {
      newField = _objectSpread(_objectSpread({}, newField), {}, {
        hide: false,
        required: hideRequired
      });
      acc.push(_objectSpread({}, newField));
    } else {
      acc.push(_objectSpread(_objectSpread({}, newField), {}, {
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