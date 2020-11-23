"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = _interopRequireDefault(require("@material-ui/core/Button"));

var _Description = _interopRequireDefault(require("@material-ui/icons/Description"));

var _ReactTypeformEmbed = _interopRequireDefault(require("./components/ReactTypeformEmbed"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var ButtonDocuPass = function ButtonDocuPass(_ref) {
  var text = _ref.text,
      size = _ref.size,
      url = _ref.url;
  var classes = (0, _style.default)();
  var typeformEmbed = (0, _react.useRef)();

  var handleClick = function handleClick() {
    return typeformEmbed.current.typeform.open();
  };

  return _react.default.createElement("div", null, _react.default.createElement(_ReactTypeformEmbed.default, {
    popup: true,
    autoOpen: false,
    url: url,
    hideHeaders: true,
    hideFooter: true,
    ref: typeformEmbed
  }), _react.default.createElement(_Button.default, {
    className: classes.button,
    variant: "contained",
    size: size,
    onClick: handleClick,
    startIcon: _react.default.createElement(_Description.default, null)
  }, text));
};

ButtonDocuPass.defaultProps = {
  text: "DocuPass",
  size: "large",
  url: "http://localhost:8080/portal/test"
};
ButtonDocuPass.propTypes = {
  text: _propTypes.default.string,
  size: _propTypes.default.string,
  url: _propTypes.default.string
};
var _default = ButtonDocuPass;
exports.default = _default;