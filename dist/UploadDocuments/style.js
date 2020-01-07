"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    titleContainer: {
      padding: theme.spacing(1.5, 0)
    },
    title: {
      color: theme.palette.primary.main
    }
  };
});

exports.default = _default;