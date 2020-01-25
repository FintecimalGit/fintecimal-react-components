"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Fields = _interopRequireDefault(require("./Fields"));

var _Table = _interopRequireDefault(require("../../Table"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InputTable = function InputTable(_ref) {
  var options = _ref.options;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      information = _useState2[0],
      setInformation = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      dataTable = _useState4[0],
      setDataTable = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      header = _useState6[0],
      setHeader = _useState6[1];

  (0, _react.useEffect)(function () {
    if (Object.keys(header).length === 0) getHeaders(options);
    loadDataTable(information);
  }, [options, information]);

  var getHeaders = function getHeaders(option) {
    var obj = [];
    option[0].map(function (opt) {
      return obj.push({
        'key': opt.label,
        'value': opt.label
      });
    });
    setHeader(obj);
    setInformation(option);
  };

  var addNewRow = function addNewRow(value) {
    var newArray = [];
    Object.keys(value).forEach(function (key, index) {
      newArray.push({
        'id': index,
        'label': key,
        'value': value[key]
      });
    });
    setInformation([].concat(_toConsumableArray(information), [newArray]));
  };

  var loadDataTable = function loadDataTable(data) {
    var newValues = [];
    var newObject = {};
    data.forEach(function (element) {
      Object.keys(element).forEach(function (key) {
        if (element[key]['value'] !== '') newObject[element[key]['label']] = element[key]['value'];
      });
      if (Object.keys(newObject).length > 0) newValues.push(newObject);
      newObject = {};
    });
    setDataTable(newValues);
  };

  var DeleteRow = function DeleteRow(item, index) {
    var newInformation = _toConsumableArray(information);

    newInformation.splice(index, 1);
    setInformation(newInformation);
  };

  return _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_Fields.default, {
    fields: options[0],
    addNewRow: addNewRow,
    header: header
  }), _react.default.createElement("div", {
    className: classes.tableContent
  }, Object.keys(dataTable).length > 0 ? _react.default.createElement(_Table.default, {
    headers: header,
    items: dataTable,
    deleteRow: true,
    onDeleteRow: DeleteRow
  }) : null));
};

InputTable.propTypes = {
  options: _propTypes.default.array.isRequired
};
InputTable.defaultProps = {
  options: [[{
    'id': 0,
    'label': 'No.',
    'type': 'número',
    'value': '123'
  }, {
    'id': 1,
    'label': 'Fecha de pago',
    'type': 'respuesta corta',
    'value': '20 de enero'
  }, {
    'id': 2,
    'label': 'Monto sin iva',
    'type': 'número',
    'value': '1000'
  }, {
    'id': 3,
    'label': 'IVA',
    'type': 'número',
    'value': '160'
  }, {
    'id': 4,
    'label': 'Total a pagar',
    'type': 'número',
    'value': '1160'
  }]]
};
var _default = InputTable;
exports.default = _default;