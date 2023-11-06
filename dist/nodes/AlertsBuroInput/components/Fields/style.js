"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@material-ui/core/styles");
var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      margin: theme.spacing(2)
    },
    button: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: theme.spacing(2)
    }
  };
});
var _default = useStyles;
exports.default = _default;