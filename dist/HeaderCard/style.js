"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    card: {
      boxShadow: 'none',
      position: 'relative',
      border: 'solid 1px #fbfbfb'
    },
    cardHeader: {
      backgroundColor: theme.palette.background.main,
      padding: theme.spacing(2),
      '& > div > span:first-child': {
        fontSize: '1rem',
        letterSpacing: '0.2px',
        fontWeight: 'bold'
      }
    }
  };
});
var _default = useStyles;
exports.default = _default;