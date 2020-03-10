"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _utils = require("../../commons/utils");

var _classnames = _interopRequireDefault(require("classnames"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignContent: 'stretch',
      background: 'whitesmoke',
      padding: 13,
      marginRight: -1,
      borderRadius: 4,
      border: 'solid 1px rgba(0, 0, 0, 0.2)',
      borderRight: 'none'
    },
    error: {
      borderColor: theme.palette.status.danger.main
    },
    focus: {
      borderWidth: 2,
      borderColor: theme.palette.primary.main
    },
    img: {
      flex: '1 1',
      alignSelf: 'stretch',
      marginBottom: 3,
      width: 24
    },
    text: {
      flex: '0 1',
      alignSelf: 'stretch',
      fontWeight: 'bold',
      margin: 0,
      fontSize: 11
    }
  };
});

var getClassByStatus = function getClassByStatus(inputStatus, classes) {
  switch (inputStatus) {
    case _utils.status.FOCUS:
      return classes.focus;

    case _utils.status.ERROR:
      return classes.error;

    default:
      return classes.root;
  }
};

var IconText = function IconText(_ref) {
  var imgSrc = _ref.imgSrc,
      text = _ref.text,
      inputStatus = _ref.inputStatus;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: (0, _classnames.default)(classes.root, getClassByStatus(inputStatus, classes))
  }, _react.default.createElement("img", {
    src: imgSrc,
    className: classes.img
  }), _react.default.createElement("p", {
    className: classes.text
  }, text));
};

IconText.defaultProps = {
  inputStatus: _utils.status.NORMAL
};
IconText.propTypes = {
  imgSrc: _propTypes.default.string.isRequired,
  text: _propTypes.default.string.isRequired,
  inputStatus: _propTypes.default.string
};
var _default = IconText;
exports.default = _default;