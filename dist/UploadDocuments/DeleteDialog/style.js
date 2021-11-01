"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    dialogContainer: {
      zIndex: '9999 !important'
    },
    iconContainer: {
      textAlign: 'center',
      marginTop: theme.spacing(1)
    },
    icon: {
      fontSize: '3rem',
      color: 'red'
    },
    allowedFormat: {
      fontSize: '1rem',
      fontWeight: 700,
      lineHeight: '1rem'
    },
    dialogContentText: {
      marginBottom: '0 !important',
      textAlign: 'center'
    }
  };
});

exports.default = _default;