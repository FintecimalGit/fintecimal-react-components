"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS = {
  Rechazado: '#C25B5B',
  Cargado: '#5BC2C2',
  Pendiente: '#C1C1C1'
};

var StatusOnlyDocument = function StatusOnlyDocument(_ref) {
  var label = _ref.label,
      status = _ref.status;
  var classes = (0, _style.default)();
  return _react.default.createElement("div", {
    className: classes.header
  }, _react.default.createElement("p", {
    className: classes.label
  }, label), _react.default.createElement("p", {
    style: {
      color: STATUS[status]
    },
    className: classes.status
  }, status));
};

StatusOnlyDocument.propTypes = {
  label: _propTypes.default.string.isRequired,
  status: _propTypes.default.string.isRequired
};
var _default = StatusOnlyDocument;
exports.default = _default;