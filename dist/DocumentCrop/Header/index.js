"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _ArrowBack = _interopRequireDefault(require("@material-ui/icons/ArrowBack"));

var _Text = _interopRequireWildcard(require("../Text"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var Header = function Header(_ref) {
  var title = _ref.title,
      description = _ref.description,
      enableOnBack = _ref.enableOnBack,
      onBack = _ref.onBack,
      disabled = _ref.disabled;
  var classes = (0, _style.default)();
  return _react.default.createElement("div", {
    className: classes.container
  }, enableOnBack && _react.default.createElement("div", {
    className: classes.onBackContainer
  }, _react.default.createElement(_IconButton.default, {
    className: classes.iconButton,
    onClick: onBack,
    disabled: disabled
  }, _react.default.createElement(_ArrowBack.default, {
    className: classes.icon
  }))), _react.default.createElement("div", null, _react.default.createElement(_Text.default, {
    type: _Text.TYPES.HEADER,
    color: _Text.COLORS.SECONDARY,
    fontWeigth: _Text.FONT_WEIGHTS.NORMAL
  }, title), _react.default.createElement(_Text.default, {
    type: _Text.TYPES.HEADER,
    color: _Text.COLORS.PRIMARY
  }, description)));
};

Header.propTypes = {
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  enableOnBack: _propTypes.default.bool,
  onBack: _propTypes.default.func,
  disabled: _propTypes.default.bool
};
Header.defaultProps = {
  title: '',
  description: '',
  enableOnBack: false,
  onBack: function onBack() {},
  disabled: false
};

var _default = (0, _react.memo)(Header);

exports.default = _default;