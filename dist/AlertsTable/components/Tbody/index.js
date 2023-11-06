"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _classnames3 = _interopRequireDefault(require("classnames"));
var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));
var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));
var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));
var _RemoveRedEyeRounded = _interopRequireDefault(require("@material-ui/icons/RemoveRedEyeRounded"));
var _style = _interopRequireDefault(require("./style"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; } /* eslint-disable react/no-array-index-key */
var Table = function Table(_ref) {
  var headers = _ref.headers,
    items = _ref.items,
    onClickRow = _ref.onClickRow,
    edit = _ref.edit,
    onEdit = _ref.onEdit,
    deleteRow = _ref.deleteRow,
    onDeleteRow = _ref.onDeleteRow,
    maxHeaders = _ref.maxHeaders,
    disabled = _ref.disabled,
    isEditable = _ref.isEditable,
    onViewRow = _ref.onViewRow;
  var classes = (0, _style.default)();
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    shortItems = _useState2[0],
    setShortItems = _useState2[1];
  var _useState3 = (0, _react.useState)([]),
    _useState4 = _slicedToArray(_useState3, 2),
    shortHeaders = _useState4[0],
    setShortHeaders = _useState4[1];

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
  var setShortValues = function setShortValues() {
    var newShortHeaders = headers.slice(0, maxHeaders);
    var newShortItems = items.map(function (item) {
      var names = Object.keys(item).slice(0, maxHeaders);
      var values = Object.values(item).slice(0, maxHeaders);
      var newItem = names.reduce(function (acc, name, index) {
        acc[name] = values[index];
        return acc;
      }, {});
      return newItem;
    });
    setShortHeaders(newShortHeaders);
    setShortItems(newShortItems);
  };
  (0, _react.useEffect)(function () {
    if (items.length && headers.length) {
      setShortValues();
    }
  }, [items, headers]);
  return /*#__PURE__*/_react.default.createElement("tbody", null, items.map(function (item, index) {
    return /*#__PURE__*/_react.default.createElement("tr", {
      key: "tr-".concat(index),
      className: classes.tr,
      onClick: handleOnClickRow(item, index)
    }, shortHeaders.map(function (_ref2, headerIndex) {
      var key = _ref2.key;
      return /*#__PURE__*/_react.default.createElement("td", {
        key: "td-".concat(key, "-").concat(shortItems[key], "-").concat(index),
        className: (0, _classnames3.default)(classes.td, _defineProperty({}, classes.editButton, edit && isLastIndex(shortHeaders, headerIndex)), _defineProperty({}, classes.editButton, deleteRow && isLastIndex(shortHeaders, headerIndex)))
      }, /*#__PURE__*/_react.default.createElement("span", {
        className: classes.tableValue
      }, item[key]));
    }));
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
  disabled: _propTypes.default.bool,
  isEditable: _propTypes.default.bool,
  onViewRow: _propTypes.default.func
};
Table.defaultProps = {
  headers: [],
  items: [],
  onClickRow: function onClickRow() {},
  edit: false,
  onEdit: function onEdit() {},
  deleteRow: false,
  onDeleteRow: function onDeleteRow() {},
  disabled: false,
  isEditable: true,
  onViewRow: function onViewRow() {}
};
var _default = Table;
exports.default = _default;