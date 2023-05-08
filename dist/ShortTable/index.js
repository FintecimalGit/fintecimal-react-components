"use strict";

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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ShortTable = function ShortTable(_ref) {
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
  return _react.default.createElement("table", {
    className: classes.table
  }, _react.default.createElement(_Thead.default, {
    disabled: disabled,
    headers: headers,
    cleanTable: visibleCleanTable,
    handleCleanTable: handleCleanTable,
    maxHeaders: maxHeaders,
    isEditable: isEditable
  }), _react.default.createElement(_Tbody.default, {
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

ShortTable.propTypes = {
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
ShortTable.defaultProps = {
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
var _default = ShortTable;
exports.default = _default;