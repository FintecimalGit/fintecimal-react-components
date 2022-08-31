"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HiddenDocument = function HiddenDocument(_ref) {
  var title = _ref.title;
  var classes = (0, _style.default)();
  return /*#__PURE__*/_react.default.createElement(_core.Box, {
    className: classes.container
  }, /*#__PURE__*/_react.default.createElement(_core.Typography, {
    className: classes.title,
    component: "span"
  }, title));
};

var _default = HiddenDocument;
exports.default = _default;