"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    card: {
      display: 'inline-block',
      boxShadow: '0 11px 15px 2px rgba(141, 140, 140, 0.16), 0 9px 46px 8px rgba(225, 225, 225, 0.07), 0 24px 38px 25px rgba(3, 3, 3, 0.05)',
      // estandar
      position: 'relative'
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