"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    content: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3, 5)
    },
    tableContent: {
      padding: theme.spacing(3, 5),
      width: '80%'
    }
  };
});
var _default = useStyles;
exports.default = _default;