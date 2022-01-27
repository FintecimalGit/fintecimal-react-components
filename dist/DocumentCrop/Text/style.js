"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function () {
  return {
    lighter: {
      fontWeight: 'lighter'
    },
    normal: {
      fontWeight: 'normal'
    },
    bold: {
      fontWeight: 'bold'
    },
    disabled: {
      color: '#9E9E9E !important'
    },
    center: {
      textAlign: 'center'
    }
  };
});

exports.default = _default;