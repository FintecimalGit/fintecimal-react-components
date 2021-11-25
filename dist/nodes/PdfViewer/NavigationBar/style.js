"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      flexGrow: 1
    },
    container: {
      height: '72px !important'
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    pageIndicator: {
      flexGrow: 1
    },
    inputPage: {
      width: '28px',
      border: 'none',
      borderBottom: '1px solid white',
      color: 'white',
      backgroundColor: 'transparent',
      textAlign: 'center',
      fontSize: '1rem',
      outline: 'none'
    },
    title: {
      flexGrow: 1
    }
  };
});

exports.default = _default;