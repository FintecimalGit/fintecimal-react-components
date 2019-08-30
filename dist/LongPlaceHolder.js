"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    longText: {
      alignSelf: 'stretch',
      color: 'gray',
      fontSize: 11,
      textAlign: 'justify',
      marginBottom: 0
    }
  };
});

var LongPlaceHolder = function LongPlaceHolder(_ref) {
  var text = _ref.text;
  var classes = useStyles();
  return _react.default.createElement("p", {
    className: classes.longText
  }, text);
};

LongPlaceHolder.propTypes = {
  text: _propTypes.default.string.isRequired
};
var _default = LongPlaceHolder;
exports.default = _default;