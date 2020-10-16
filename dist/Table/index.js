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

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var Table = ({
  headers,
  items,
  onClickRow,
  edit,
  onEdit,
  deleteRow,
  onDeleteRow,
  cleanTable,
  handleCleanTable
}) => {
  var classes = (0, _style.default)();
  var visibleCleanTable = (0, _react.useMemo)(() => cleanTable && items.length > 0, [items, cleanTable]);
  return /*#__PURE__*/_react.default.createElement("table", {
    className: classes.table
  }, /*#__PURE__*/_react.default.createElement(_Thead.default, {
    headers: headers,
    cleanTable: visibleCleanTable,
    handleCleanTable: handleCleanTable
  }), /*#__PURE__*/_react.default.createElement(_Tbody.default, {
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
  items: _propTypes.default.array,
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
  onClickRow: () => {},
  edit: false,
  onEdit: () => {},
  deleteRow: false,
  onDeleteRow: () => {},
  cleanTable: false,
  handleCleanTable: () => {}
};
var _default = Table;
exports.default = _default;