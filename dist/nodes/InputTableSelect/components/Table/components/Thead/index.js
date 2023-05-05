"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _clsx2 = _interopRequireDefault(require("clsx"));

var _core = require("@material-ui/core");

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _useStyles = _interopRequireDefault(require("./useStyles"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Thead = function Thead(_ref) {
  var headers = _ref.headers,
      cleanTable = _ref.cleanTable,
      handleCleanTable = _ref.handleCleanTable;
  var classes = (0, _useStyles.default)();

  var isLastIndex = function isLastIndex(array, currentIndex) {
    return currentIndex === array.length - 1;
  };

  return _react.default.createElement("thead", {
    className: classes.header
  }, _react.default.createElement("tr", null, headers.map(function (_ref2, index) {
    var key = _ref2.key,
        value = _ref2.value;
    return _react.default.createElement("th", {
      key: "th-".concat(key, "-").concat(value),
      className: (0, _clsx2.default)(classes.th, _defineProperty({}, classes.cleanTable, cleanTable && isLastIndex(headers, index)))
    }, _react.default.createElement("span", {
      className: classes.tableValue
    }, value, ' '), isLastIndex(headers, index) && _react.default.createElement(_core.Box, null, cleanTable && _react.default.createElement(_Tooltip.default, {
      title: "Limpiar la tabla"
    }, _react.default.createElement(_IconButton.default, {
      className: classes.noPadding,
      onClick: handleCleanTable
    }, _react.default.createElement(_Delete.default, null)))));
  })));
};

Thead.propTypes = {
  headers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  })),
  cleanTable: _propTypes.default.bool,
  handleCleanTable: _propTypes.default.func
};
Thead.defaultProps = {
  headers: [],
  cleanTable: false,
  handleCleanTable: function handleCleanTable() {}
};

var _default = (0, _react.memo)(Thead);

exports.default = _default;