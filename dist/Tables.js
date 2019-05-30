"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../src/styles/Tables.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class Tables extends _react.Component {
  colsInRow(headers, style) {
    const arrayHeaders = Object.keys(headers);
    return arrayHeaders.map((type, i) => {
      return _react.default.createElement("div", {
        className: "fnt-tables-".concat(style, "-col")
      }, headers[type]);
    });
  }

  bodyTable(body) {
    return body.map((row, i) => {
      return _react.default.createElement("div", {
        className: "fnt-tables-body-row",
        onClick: () => this.props.onSelectRow(_objectSpread({}, row, {
          i
        }))
      }, this.colsInRow(row, 'body'));
    });
  }

  render() {
    const _this$props$table = this.props.table,
          headers = _this$props$table.headers,
          body = _this$props$table.body;
    return _react.default.createElement("div", {
      className: "fnt-tables"
    }, _react.default.createElement("div", {
      className: "fnt-tables-header-row"
    }, this.colsInRow(headers, 'header')), this.bodyTable(body));
  }

}

var _default = Tables;
exports.default = _default;