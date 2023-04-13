"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Table = function Table(_ref) {
  var headers = _ref.headers,
      cleanTable = _ref.cleanTable,
      handleCleanTable = _ref.handleCleanTable,
      maxHeaders = _ref.maxHeaders,
      disabled = _ref.disabled;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      shortHeaders = _useState2[0],
      setShortHeaders = _useState2[1];

  var isLastIndex = function isLastIndex(array, currentIndex) {
    return currentIndex === array.length - 1;
  };

  var setShortValues = function setShortValues() {
    var newShortHeaders = headers.slice(0, maxHeaders);
    setShortHeaders(newShortHeaders);
  };

  (0, _react.useEffect)(function () {
    if (headers.length) {
      setShortValues();
    }
  }, [headers]);
  return _react.default.createElement("thead", {
    className: classes.header
  }, _react.default.createElement("tr", null, shortHeaders.map(function (_ref2, index) {
    var key = _ref2.key,
        value = _ref2.value;
    return _react.default.createElement("th", {
      key: "th-".concat(key, "-").concat(value),
      className: (0, _classnames2.default)(classes.th, _defineProperty({}, classes.cleanTable, cleanTable && isLastIndex(shortHeaders, index)))
    }, _react.default.createElement("span", {
      className: classes.tableValue
    }, value, ' '), isLastIndex(shortHeaders, index) && _react.default.createElement(_react.default.Fragment, null, cleanTable && _react.default.createElement(_Tooltip.default, {
      title: "Limpiar la tabla"
    }, _react.default.createElement(_IconButton.default, {
      className: classes.noPadding,
      onClick: handleCleanTable,
      disabled: disabled
    }, _react.default.createElement(_Delete.default, null)))));
  })));
};

Table.propTypes = {
  headers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })),
  cleanTable: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  handleCleanTable: _propTypes.default.func
};
Table.defaultProps = {
  headers: [],
  cleanTable: false,
  disabled: false,
  handleCleanTable: function handleCleanTable() {}
};
var _default = Table;
exports.default = _default;