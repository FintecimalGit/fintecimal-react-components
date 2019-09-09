"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/styles");

var _system = require("@material-ui/system");

var _utils = require("./commons/utils");

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
      padding: 10,
      marginTop: 8,
      marginRight: -1,
      borderLeft: '2px solid lightgray',
      borderTop: '2px solid lightgray',
      borderBottom: '2px solid lightgray',
      borderRadius: 4
    },
    rootError: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignContent: 'stretch',
      background: 'whitesmoke',
      padding: 10,
      marginTop: 8,
      marginRight: -1,
      borderLeft: '2px solid rgba(244,67,54,0.7)',
      borderTop: '2px solid rgba(244,67,54,0.7)',
      borderBottom: '2px solid rgba(244,67,54,0.7)',
      borderRadius: 4
    },
    rootFocus: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      alignContent: 'stretch',
      background: 'whitesmoke',
      padding: 10,
      marginTop: 8,
      marginRight: -1,
      borderLeft: '2px solid rgba(63,81,181,0.7)',
      borderTop: '2px solid rgba(63,81,181,0.7)',
      borderBottom: '2px solid rgba(63,81,181,0.7)',
      borderRadius: 4
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
      return classes.rootFocus;

    case _utils.status.ERROR:
      return classes.rootError;

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
    className: getClassByStatus(inputStatus, classes)
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