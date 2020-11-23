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
    button: {
      backgroundColor: '#510ed0',
      color: '#ffffff',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#873eff',
        borderColor: '#873eff',
        boxShadow: 'none'
      }
    }
  };
});

exports.default = _default;