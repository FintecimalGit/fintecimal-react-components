"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    parent: {
      position: 'relative'
    },
    label: {
      padding: theme.spacing(0.5),
      backgroundColor: '#666',
      fontSize: 12,
      color: theme.palette.primary.contrastText,
      position: 'absolute',
      left: "calc((100% - ".concat(theme.spacing(6), "px) / 2)"),
      top: 40
    }
  };
});
var _default = useStyles;
exports.default = _default;