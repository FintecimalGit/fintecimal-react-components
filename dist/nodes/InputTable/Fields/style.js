"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    content_inputs: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: theme.spacing(3)
    },
    content: {
      width: '40%'
    }
  };
});
var _default = useStyles;
exports.default = _default;