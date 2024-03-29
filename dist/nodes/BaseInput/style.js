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
      flexWrap: 'wrap'
    },
    form: {
      alignSelf: 'stretch',
      '& .MuiOutlinedInput-root.Mui-disabled.Mui-error': {
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: "".concat(theme.palette.error.main, " !important")
        }
      }
    },
    label: {
      fontSize: 14,
      fontWeight: 500,
      opacity: 1
    },
    input: {
      flex: 1,
      fontSize: 14
    },
    notchedOutline: {
      borderWidth: 1,
      opacity: 0.7
    },
    status: {
      fontFamily: 'Open Sans',
      fontSize: '1rem',
      lineHeight: '1.25rem',
      fontWeight: '700'
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
    icon: {
      fontSize: 16
    }
  };
});

exports.default = _default;