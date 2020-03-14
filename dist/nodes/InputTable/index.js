"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Fields = _interopRequireDefault(require("./Fields"));

var _Table = _interopRequireDefault(require("../../Table"));

var _utils = require("./utils");

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
  var value = _ref.value,
      handleChange = _ref.handleChange;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      fields = _useState2[0],
      setFields = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      information = _useState4[0],
      setInformation = _useState4[1];

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      dataTable = _useState6[0],
      setDataTable = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      header = _useState8[0],
      setHeader = _useState8[1];

  (0, _react.useEffect)(function () {
    getHeaders(value);
  }, [value]);
  (0, _react.useEffect)(function () {
    loadDataTable(information);
  }, [information]);

  var getHeaders = function getHeaders(option) {
    var headers = option[0].map(function (opt) {
      return {
        key: opt.label,
        value: opt.label
      };
    });
    setHeader(headers);
    setFields((0, _utils.generateValueEmpty)(option[0]));
    setInformation(validateExistValuesEmpty(option));
  };

  var validateExistValuesEmpty = function validateExistValuesEmpty(data) {
    var newData = [];
    data.map(function (arrayField) {
      var foundInformation = false;
      arrayField.map(function (field) {
        if (field.hasOwnProperty('value')) if (field.value !== '') foundInformation = true;
      });
      if (foundInformation) newData.push(arrayField);
    });
    return newData;
  };

  var addNewRow = function addNewRow(newData) {
    var newInformation = [].concat(_toConsumableArray(information), [newData]);
    handleChange(newInformation);
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
    handleChange(newInformation);
  };

  return _react.default.createElement("div", {
    className: classes.content
  }, _react.default.createElement(_Fields.default, {
    fieldValues: fields,
    addNewRow: addNewRow
  }), _react.default.createElement("div", {
    className: classes.tableContent
  }, _react.default.createElement(_Table.default, {
    headers: header,
    items: dataTable,
    deleteRow: true,
    onDeleteRow: DeleteRow
  })));
};

InputTable.propTypes = {
  value: _propTypes.default.array.isRequired,
  handleChange: _propTypes.default.func
};
InputTable.defaultProps = {
  value: _utils.defaultData,
  handleChange: function handleChange() {}
};
var _default = InputTable;
exports.default = _default;