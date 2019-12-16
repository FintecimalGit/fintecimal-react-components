"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    paginator: {
      width: '100%',
      display: 'inline-flex',
      justifyContent: 'center'
    },
    iconButton: {
      padding: theme.spacing(1),
      '& > span': {
        fontSize: '0.8rem',
        width: '1rem',
        height: '1rem'
      },
      '& > span > svg': {
        fontSize: '0.8rem'
      }
    },
    iconButtonActive: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark
      }
    }
  };
});

exports.default = _default;