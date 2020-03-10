"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      height: '48px'
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
      flex: 1
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
      paddingBottom: 3,
      paddingRight: 2
    },
    notchedOutline: {
      borderRight: '1px solid lightgray',
      borderTop: '1px solid lightgray',
      borderBottom: '1px solid lightgray',
      opacity: 0.7
    },
    focusNotchedOutline: {
      borderWidth: 2,
      opacity: 1
    },
    asterisk: {
      color: theme.palette.error.main,
      fontSize: 14.2,
      verticalAlign: 'super'
    },
    close: {
      fontSize: theme.spacing(2)
    },
    adornment: {//marginTop: 12
    }
  };
});

exports.default = _default;