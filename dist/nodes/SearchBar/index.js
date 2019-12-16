"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Search = _interopRequireDefault(require("@material-ui/icons/Search"));

var _style = _interopRequireDefault(require("./style"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER_KEY = 13;

var Search = function Search(_ref) {
  var onEnter = _ref.onEnter,
      placeholder = _ref.placeholder;
  var classes = (0, _style.default)();

  var onKeyup = function onKeyup(event) {
    var keyCode = event.keyCode;
    if (keyCode === ENTER_KEY) onEnter(event);
  };

  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.root, classes.border)
  }, _react.default.createElement(_core.InputBase, {
    onKeyUp: onKeyup,
    placeholder: placeholder,
    classes: {
      root: classes.inputContainer,
      input: classes.input
    },
    inputProps: {
      'aria-label': 'search'
    },
    endAdornment: _react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, _react.default.createElement(_Search.default, {
      className: classes.icon
    }))
  }));
};

Search.propTypes = {
  onEnter: _propTypes.default.func,
  placeholder: _propTypes.default.string.isRequired
};
Search.defaultProps = {
  onEnter: function onEnter() {}
};
var _default = Search;
exports.default = _default;