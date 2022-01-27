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
      backgroundColor: theme.palette.primary.contrastText,
      padding: theme.spacing(2),
      '& > div:first-child > span:first-child': {
        fontSize: '1rem',
        letterSpacing: '0.2px',
        fontWeight: 'bold'
      },
      '& > div:last-child': {
        alignSelf: 'end',
        '& > button:first-child': {
          padding: '4px'
        }
      }
    },
    iconButton: {
      '& > span > svg': {
        fontSize: '1.2rem'
      }
    },
    container: {
      padding: theme.spacing(2),
      width: '100%',
      display: 'flex',
      flexDirection: 'row'
    }
  };
});
var _default = useStyles;
exports.default = _default;