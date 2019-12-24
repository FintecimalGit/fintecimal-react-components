"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _HeaderCard = _interopRequireDefault(require("../HeaderCard"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PDFCard = function PDFCard(_ref) {
  var title = _ref.title,
      pdf = _ref.pdf;
  var clasess = (0, _style.default)();
  return _react.default.createElement(_HeaderCard.default, {
    title: title
  }, _react.default.createElement("div", {
    className: clasess.pdfContainer
  }, _react.default.createElement("iframe", {
    src: pdf,
    className: clasess.pdf
  })));
};

PDFCard.propTypes = {
  title: _propTypes.default.string,
  pdf: _propTypes.default.string
};
PDFCard.defaultProps = {
  title: '',
  pdf: ''
};
var _default = PDFCard;
exports.default = _default;