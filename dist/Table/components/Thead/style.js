"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    header: {
      backgroundColor: '#FBFBFB',
      paddingBottom: theme.spacing(2)
    },
    th: {
      color: theme.palette.text.primary,
      fontWeight: 'bold',
      padding: theme.spacing(2, 1.5),
      textAlign: 'left'
    }
  };
});

exports.default = _default;