"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _clsx3 = _interopRequireDefault(require("clsx"));

var _useStyles = _interopRequireDefault(require("./useStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TBody = function TBody(_ref) {
  var headers = _ref.headers,
      items = _ref.items,
      onClickRow = _ref.onClickRow,
      edit = _ref.edit,
      onEdit = _ref.onEdit,
      deleteRow = _ref.deleteRow,
      onDeleteRow = _ref.onDeleteRow;
  var classes = (0, _useStyles.default)();
  /**
   *
   * @param {Number} currentIndex
   * @param {Array} array
   */

  var isLastIndex = function isLastIndex(array, currentIndex) {
    return currentIndex === array.length - 1;
  };
  /**
   *
   * @param {Any} item
   * @param {Number} index
   */


  var handleOnClickRow = function handleOnClickRow(item, index) {
    return function () {
      onClickRow(item, index);
    };
  };
  /**
   *
   * @param {Any} item
   * @param {Number} index
   */


  var handleOnEdit = function handleOnEdit(item, index) {
    return function (event) {
      event.preventDefault();
      event.stopPropagation();
      onEdit(item, index, event);
    };
  };

  var handleOnDelete = function handleOnDelete(item, index) {
    return function (event) {
      event.preventDefault();
      event.stopPropagation();
      onDeleteRow(item, index, event);
    };
  };

  return _react.default.createElement("tbody", null, items.map(function (item, index) {
    return _react.default.createElement("tr", {
      key: "tr-".concat(index),
      className: classes.tr,
      onClick: handleOnClickRow(item, index)
    }, headers.map(function (_ref2, headerIndex) {
      var key = _ref2.key;
      return _react.default.createElement("td", {
        key: "td-".concat(key, "-").concat(item[key], "-").concat(index),
        className: (0, _clsx3.default)(classes.td, _defineProperty({}, classes.editButton, edit && isLastIndex(headers, headerIndex)), _defineProperty({}, classes.editButton, deleteRow && isLastIndex(headers, headerIndex)))
      }, _react.default.createElement("span", {
        className: classes.tableValue
      }, item[key]), isLastIndex(headers, headerIndex) && _react.default.createElement("div", null, edit && _react.default.createElement(_IconButton.default, {
        className: classes.noPadding,
        onClick: handleOnEdit(item, index)
      }, _react.default.createElement(_Edit.default, null)), deleteRow && _react.default.createElement(_IconButton.default, {
        className: classes.noPadding,
        onClick: handleOnDelete(item, index)
      }, _react.default.createElement(_Delete.default, null))));
    }));
  }));
};

TBody.propTypes = {
  headers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })),
  // eslint-disable-next-line react/forbid-prop-types
  items: _propTypes.default.any,
  onClickRow: _propTypes.default.func,
  edit: _propTypes.default.bool,
  onEdit: _propTypes.default.func,
  deleteRow: _propTypes.default.bool,
  onDeleteRow: _propTypes.default.func
};
TBody.defaultProps = {
  headers: [],
  items: [],
  onClickRow: function onClickRow() {},
  edit: false,
  onEdit: function onEdit() {},
  deleteRow: false,
  onDeleteRow: function onDeleteRow() {}
};

var _default = (0, _react.memo)(TBody);

exports.default = _default;