"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Thead = _interopRequireDefault(require("./components/Thead"));
var _Tbody = _interopRequireDefault(require("./components/Tbody"));
var _style = _interopRequireDefault(require("./style"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var AlertsTable = function AlertsTable(_ref) {
  var headers = _ref.headers,
    items = _ref.items,
    onClickRow = _ref.onClickRow,
    edit = _ref.edit,
    onEdit = _ref.onEdit,
    deleteRow = _ref.deleteRow,
    onDeleteRow = _ref.onDeleteRow,
    cleanTable = _ref.cleanTable,
    handleCleanTable = _ref.handleCleanTable,
    maxHeaders = _ref.maxHeaders,
    disabled = _ref.disabled,
    isEditable = _ref.isEditable,
    handleViewRow = _ref.handleViewRow;
  var classes = (0, _style.default)();
  var visibleCleanTable = (0, _react.useMemo)(function () {
    return cleanTable && items.length > 0;
  }, [items, cleanTable]);
  return /*#__PURE__*/_react.default.createElement("table", {
    className: classes.table
  }, /*#__PURE__*/_react.default.createElement(_Thead.default, {
    disabled: disabled,
    headers: headers,
    cleanTable: visibleCleanTable,
    handleCleanTable: handleCleanTable,
    maxHeaders: maxHeaders,
    isEditable: isEditable
  }), /*#__PURE__*/_react.default.createElement(_Tbody.default, {
    headers: headers,
    items: items,
    onClickRow: onClickRow,
    edit: edit,
    onEdit: onEdit,
    deleteRow: deleteRow,
    onDeleteRow: onDeleteRow,
    maxHeaders: maxHeaders,
    disabled: disabled,
    isEditable: isEditable,
    onViewRow: handleViewRow
  }));
};
AlertsTable.propTypes = {
  headers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })),
  items: _propTypes.default.array,
  onClickRow: _propTypes.default.func,
  edit: _propTypes.default.bool,
  onEdit: _propTypes.default.func,
  deleteRow: _propTypes.default.bool,
  onDeleteRow: _propTypes.default.func,
  cleanTable: _propTypes.default.bool,
  handleCleanTable: _propTypes.default.func,
  maxHeaders: _propTypes.default.number,
  disabled: _propTypes.default.bool,
  isEditable: _propTypes.default.bool,
  handleViewRow: _propTypes.default.func
};
AlertsTable.defaultProps = {
  headers: [],
  items: [],
  onClickRow: function onClickRow() {},
  edit: false,
  onEdit: function onEdit() {},
  deleteRow: false,
  onDeleteRow: function onDeleteRow() {},
  cleanTable: false,
  handleCleanTable: function handleCleanTable() {},
  maxHeaders: 0,
  disabled: false,
  isEditable: true,
  handleViewRow: function handleViewRow() {}
};
var _default = AlertsTable;
exports.default = _default;