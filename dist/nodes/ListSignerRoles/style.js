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
      paddingBottom: theme.spacing(2),
      alignItems: 'center',
      position: 'relative',
      cursor: 'pointer',
      '&:last-child': {
        paddingBottom: 0
      }
    },
    selected: {
      backgroundColor: theme.palette.secondary.main,
      width: '4px',
      height: '30px',
      position: 'absolute',
      // top: 0,
      left: 0
    },
    label: {
      flex: '1 1 auto',
      margin: 0,
      fontSize: 18,
      paddingLeft: theme.spacing(3),
      textTransform: 'lowercase',
      '&::first-letter': {
        textTransform: 'capitalize'
      },
      fontWeight: 'normal',
      color: theme.palette.primary.main
    },
    labelSelected: {
      flex: '1 1 auto',
      margin: 0,
      fontSize: 18,
      paddingLeft: theme.spacing(3),
      textTransform: 'lowercase',
      '&::first-letter': {
        textTransform: 'capitalize'
      },
      fontWeight: 'bold',
      color: theme.palette.tertiary.main
    },
    labelComplete: {
      flex: '1 1 auto',
      margin: 0,
      fontSize: 18,
      paddingLeft: theme.spacing(3),
      textTransform: 'lowercase',
      '&::first-letter': {
        textTransform: 'capitalize'
      },
      color: theme.palette.tertiary.main
    },
    labelDisabled: {
      flex: '1 1 auto',
      margin: 0,
      fontSize: 18,
      paddingLeft: theme.spacing(3),
      textTransform: 'lowercase',
      '&::first-letter': {
        textTransform: 'capitalize'
      },
      color: theme.palette.primary.disabled
    },
    icon: {
      flex: '0 0 auto',
      paddingRight: 20,
      fontSize: '1.5rem'
    }
  };
});
var _default = useStyles;
exports.default = _default;