"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = ({
  headers,
  cleanTable,
  handleCleanTable
}) => {
  var classes = (0, _style.default)();

  var isLastIndex = (array, currentIndex) => currentIndex === array.length - 1;

  return /*#__PURE__*/_react.default.createElement("thead", {
    className: classes.header
  }, /*#__PURE__*/_react.default.createElement("tr", null, headers.map(({
    key,
    value
  }, index) => /*#__PURE__*/_react.default.createElement("th", {
    key: "th-".concat(key, "-").concat(value),
    className: (0, _classnames.default)(classes.th, {
      [classes.cleanTable]: cleanTable && isLastIndex(headers, index)
    })
  }, /*#__PURE__*/_react.default.createElement("span", null, value, ' '), isLastIndex(headers, index) && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, cleanTable && /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
    title: "Limpiar la tabla"
  }, /*#__PURE__*/_react.default.createElement(_IconButton.default, {
    className: classes.noPadding,
    onClick: handleCleanTable
  }, /*#__PURE__*/_react.default.createElement(_Delete.default, null))))))));
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
  handleCleanTable: () => {}
};
var _default = Table;
exports.default = _default;