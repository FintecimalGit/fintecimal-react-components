"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(_ref) {
  var headers = _ref.headers;
  var classes = (0, _style.default)();
  return _react.default.createElement("thead", {
    className: classes.header
  }, _react.default.createElement("tr", null, headers.map(function (_ref2) {
    var key = _ref2.key,
        value = _ref2.value;
    return _react.default.createElement("th", {
      key: "th-".concat(key, "-").concat(value),
      className: classes.th
    }, value);
  })));
};

Table.propTypes = {
  headers: _propTypes.default.arrayOf(_propTypes.default.shape({
    key: _propTypes.default.string,
    value: _propTypes.default.string
  }))
};
Table.defaultProps = {
  headers: []
};
var _default = Table;
exports.default = _default;