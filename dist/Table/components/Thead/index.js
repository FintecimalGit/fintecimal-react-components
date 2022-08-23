"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Table = function Table(_ref) {
  var headers = _ref.headers,
      cleanTable = _ref.cleanTable,
      handleCleanTable = _ref.handleCleanTable;
  var classes = (0, _style.default)();

  var isLastIndex = function isLastIndex(array, currentIndex) {
    return currentIndex === array.length - 1;
  };

  return /*#__PURE__*/_react.default.createElement("thead", {
    className: classes.header
  }, /*#__PURE__*/_react.default.createElement("tr", null, headers.map(function (_ref2, index) {
    var key = _ref2.key,
        value = _ref2.value;
    return /*#__PURE__*/_react.default.createElement("th", {
      key: "th-".concat(key, "-").concat(value),
      className: (0, _classnames2.default)(classes.th, _defineProperty({}, classes.cleanTable, cleanTable && isLastIndex(headers, index)))
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: classes.tableValue
    }, value, ' '), isLastIndex(headers, index) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cleanTable && /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      title: "Limpiar la tabla"
    }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
      className: classes.noPadding,
      onClick: handleCleanTable
    }, /*#__PURE__*/_react.default.createElement(_Delete.default, null)))));
  })));
};

Table.propTypes = {
  headers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })),
  cleanTable: _propTypes.default.bool,
  handleCleanTable: _propTypes.default.func
};
Table.defaultProps = {
  headers: [],
  cleanTable: false,
  handleCleanTable: function handleCleanTable() {}
};
var _default = Table;
exports.default = _default;