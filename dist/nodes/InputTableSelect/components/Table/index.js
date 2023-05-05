"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _useStyles = _interopRequireDefault(require("./useStyles"));

var _Thead = _interopRequireDefault(require("./components/Thead"));

var _Tbody = _interopRequireDefault(require("./components/Tbody"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Table = function Table(_ref) {
  var headers = _ref.headers,
      items = _ref.items,
      onClickRow = _ref.onClickRow,
      edit = _ref.edit,
      onEdit = _ref.onEdit,
      deleteRow = _ref.deleteRow,
      onDeleteRow = _ref.onDeleteRow,
      cleanTable = _ref.cleanTable,
      handleCleanTable = _ref.handleCleanTable;
  var classes = (0, _useStyles.default)();
  var visibleCleanTable = (0, _react.useMemo)(function () {
    return cleanTable && items.length > 0;
  }, [items, cleanTable]);
  return _react.default.createElement("table", {
    className: classes.table
  }, _react.default.createElement(_Thead.default, {
    headers: headers,
    cleanTable: visibleCleanTable,
    handleCleanTable: handleCleanTable
  }), _react.default.createElement(_Tbody.default, {
    headers: headers,
    items: items,
    onClickRow: onClickRow,
    edit: edit,
    onEdit: onEdit,
    deleteRow: deleteRow,
    onDeleteRow: onDeleteRow
  }));
};

Table.propTypes = {
  headers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })),
  items: _propTypes.default.arrayOf(_propTypes.default.string),
  onClickRow: _propTypes.default.func,
  edit: _propTypes.default.bool,
  onEdit: _propTypes.default.func,
  deleteRow: _propTypes.default.bool,
  onDeleteRow: _propTypes.default.func,
  cleanTable: _propTypes.default.bool,
  handleCleanTable: _propTypes.default.func
};
Table.defaultProps = {
  headers: [],
  items: [],
  onClickRow: function onClickRow() {},
  edit: false,
  onEdit: function onEdit() {},
  deleteRow: false,
  onDeleteRow: function onDeleteRow() {},
  cleanTable: false,
  handleCleanTable: function handleCleanTable() {}
};

var _default = (0, _react.memo)(Table);

exports.default = _default;