"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderCard = function HeaderCard(_ref) {
  var title = _ref.title,
      subheader = _ref.subheader,
      children = _ref.children;
  var clasess = (0, _style.default)();
  return _react.default.createElement(_Card.default, {
    className: clasess.card
  }, _react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: title,
    subheader: subheader
  }), children);
};

HeaderCard.propTypes = {
  title: _propTypes.default.string,
  subHeader: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node, _propTypes.default.string])
};
HeaderCard.defaultProps = {
  title: '',
  subHeader: '',
  children: ''
};
var _default = HeaderCard;
exports.default = _default;