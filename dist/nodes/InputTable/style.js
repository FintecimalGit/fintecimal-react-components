"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    content: {
      width: '100%',
      margin: 0
    },
    tableContent: {
      padding: theme.spacing(2, 0)
    }
  };
});
var _default = useStyles;
exports.default = _default;