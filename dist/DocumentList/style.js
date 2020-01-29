"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _ref;

  return _ref = {
    dot: {
      height: '10px',
      width: '10px',
      borderRadius: '50%',
      display: 'inline-block',
      border: 'solid 2px',
      marginRight: theme.spacing(2),
      verticalAlign: 'middle'
    },
    dotPending: {
      backgroundColor: 'transparent',
      borderColor: 'transparent'
    }
  }, _defineProperty(_ref, "dotPending", {
    backgroundColor: '#000',
    borderColor: '#000'
  }), _defineProperty(_ref, "dotSuccess", {
    backgroundColor: '#53d5c5',
    borderColor: '#53d5c5'
  }), _defineProperty(_ref, "dotDanger", {
    backgroundColor: 'red',
    borderColor: 'red'
  }), _defineProperty(_ref, "name", {
    color: theme.palette.text.primary
  }), _defineProperty(_ref, "nameOnHole", {
    opacity: '0.5'
  }), _defineProperty(_ref, "successIcon", {
    color: '#53d5c5'
  }), _defineProperty(_ref, "dangerIcon", {
    color: 'red'
  }), _defineProperty(_ref, "listItem", {
    borderBottom: 'solid 1px #f1f1f1',
    '&:hover': {
      boxShadow: '0 11px 15px 2px rgba(141, 140, 140, 0.16), 0 9px 46px 8px rgba(225, 225, 225, 0.07), 0 24px 38px 25px rgba(3, 3, 3, 0.05)',
      // estandar
      backgroundColor: 'inherit'
    }
  }), _defineProperty(_ref, "noPadding", {
    padding: 0
  }), _defineProperty(_ref, "statusName", {
    fontSize: '14px',
    letterSpacing: '0.29px',
    fontWeight: '600',
    paddingRight: theme.spacing(6.5)
  }), _ref;
});
var _default = useStyles;
exports.default = _default;