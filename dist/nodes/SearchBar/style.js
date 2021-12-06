"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _styles.makeStyles)(function (theme) {
  var _input;

  return {
    root: {
      width: '100%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'row',
      height: '54px'
    },
    border: {
      border: 'solid 1px',
      borderColor: 'rgba(0,0,0,0.12)',
      borderRadius: '4px'
    },
    inputContainer: {
      flex: '1px',
      backgroundColor: '#fff'
    },
    input: (_input = {
      width: '100%',
      height: '100%',
      boxSizing: 'border-box',
      fontSize: '1rem',
      padding: theme.spacing(0, 2),
      '&:active, &:focus': {
        borderColor: theme.palette.primary.main
      }
    }, _defineProperty(_input, "fontSize", 14.2), _defineProperty(_input, "letterSpacing", 0.25), _defineProperty(_input, "lineHeight", 20), _input),
    icon: {
      color: 'rgba(44,62,80,0.54)'
    },
    iconButton: {
      padding: theme.spacing(1.5)
    }
  };
});

exports.default = _default;