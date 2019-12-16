"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    image: {
      height: 205,
      flex: 1
    },
    imageContainer: {
      overflow: 'auto',
      padding: theme.spacing(2)
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      border: 'solid 1px',
      height: 43,
      borderColor: theme.palette.background.main
    },
    buttonBar: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
      border: 'solid 1px',
      justifyContent: 'center',
      borderColor: theme.palette.background.main
    },
    button: {
      margin: theme.spacing(1),
      backgroundColor: '#4f9dd4',
      color: theme.palette.primary.contrastText,
      width: 27,
      height: 27,
      fontSize: 17,
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
      },
      '&:active': {
        backgroundColor: theme.palette.primary.dark,
        borderColor: theme.palette.primary.dark,
        color: theme.palette.primary.contrastText
      }
    }
  };
});
var _default = useStyles;
exports.default = _default;