"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _default = (0, _core.makeStyles)(function (theme) {
  return {
    button: {
      borderColor: theme.palette.primary.dark,
      color: theme.palette.primary.main,
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
      },
      '&:active': {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
      }
    }
  };
});

exports.default = _default;