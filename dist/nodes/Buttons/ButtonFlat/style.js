"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _default = (0, _core.makeStyles)(function (theme) {
  return {
    button: {
      color: theme.palette.text.secondary,
      textTransform: 'capitalize',
      '&:hover': {
        color: theme.palette.text.primary,
        backgroundColor: 'transparent'
      },
      '&:active': {
        color: theme.palette.text.primary,
        backgroundColor: 'transparent'
      }
    }
  };
});

exports.default = _default;