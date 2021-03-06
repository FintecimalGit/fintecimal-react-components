"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: theme.spacing(1)
    },
    datePicker: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1),
      width: '100%'
    }
  };
});

exports.default = _default;