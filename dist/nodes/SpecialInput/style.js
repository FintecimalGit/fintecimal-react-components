"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    form: {
      flex: 20,
      alignSelf: 'stretch'
    },
    label: {
      fontSize: 14,
      fontWeight: 500,
      opacity: 1
    },
    input: {
      fontSize: 14
    },
    notchedOutline: {
      borderWidth: 1,
      opacity: 0.7
    },
    focusNotchedOutline: {
      borderWidth: 2,
      opacity: 1
    },
    inputBox: {
      alignSelf: 'stretch',
      display: 'flex',
      flexDirection: 'row',
      alignContent: 'stretch',
      alignItems: 'center',
      margin: 0
    },
    icon: {
      alignSelf: 'stretch',
      display: 'flex',
      alignItems: 'stretch',
      maxHeight: '54px'
    },
    asterisk: {
      color: theme.palette.error.main,
      fontSize: 14.2,
      verticalAlign: 'super'
    },
    close: _defineProperty({
      fontSize: theme.spacing(2)
    }, "fontSize", 16),
    adornment: {
      fontSize: 14
    }
  };
});

exports.default = _default;