"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable react/no-array-index-key */
var Table = ({
  headers,
  items,
  onClickRow,
  edit,
  onEdit,
  deleteRow,
  onDeleteRow
}) => {
  var classes = (0, _style.default)();
  /**
   *
   * @param {Number} currentIndex
   * @param {Array} array
   */

  var isLastIndex = (array, currentIndex) => currentIndex === array.length - 1;
  /**
   * 
   * @param {Any} item 
   * @param {Number} index 
   */


  var handleOnClickRow = (item, index) => () => {
    onClickRow(item, index);
  };
  /**
   * 
   * @param {Any} item 
   * @param {Number} index 
   */


  var handleOnEdit = (item, index) => event => {
    event.preventDefault();
    event.stopPropagation();
    onEdit(item, index, event);
  };

  var handleOnDelete = (item, index) => event => {
    event.preventDefault();
    event.stopPropagation();
    onDeleteRow(item, index, event);
  };

  return /*#__PURE__*/_react.default.createElement("tbody", null, items.map((item, index) => /*#__PURE__*/_react.default.createElement("tr", {
    key: "tr-".concat(index),
    className: classes.tr,
    onClick: handleOnClickRow(item, index)
  }, headers.map(({
    key
  }, headerIndex) => /*#__PURE__*/_react.default.createElement("td", {
    key: "td-".concat(key, "-").concat(item[key], "-").concat(index),
    className: (0, _classnames.default)(classes.td, {
      [classes.editButton]: edit && isLastIndex(headers, headerIndex)
    }, {
      [classes.editButton]: deleteRow && isLastIndex(headers, headerIndex)
    })
  }, /*#__PURE__*/_react.default.createElement("span", null, item[key]), isLastIndex(headers, headerIndex) && /*#__PURE__*/_react.default.createElement("div", null, edit && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: classes.noPadding,
    onClick: handleOnEdit(item, index)
  }, /*#__PURE__*/_react.default.createElement(_Edit.default, null)), deleteRow && /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: classes.noPadding,
    onClick: handleOnDelete(item, index)
  }, /*#__PURE__*/_react.default.createElement(_Delete.default, null))))))));
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
  onDeleteRow: _propTypes.default.func
};
Table.defaultProps = {
  headers: [],
  items: [],
  onClickRow: () => {},
  edit: false,
  onEdit: () => {},
  deleteRow: false,
  onDeleteRow: () => {}
};
var _default = Table;
exports.default = _default;