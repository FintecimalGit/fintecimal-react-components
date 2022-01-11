"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    dropZoneContainer: {
      boxSizing: 'border-box',
      widows: '100%',
      padding: theme.spacing(0.5),
      minHeight: '66px',
      height: '8vw',
      backgroundColor: '#fbfbfb',
      borderRadius: '4px',
      border: '1px solid #fbfbfb'
    },
    dropZone: {
      boxSizing: 'border-box',
      width: '100%',
      borderRadius: '4px',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      boxShadow: 'none',
      backgroundColor: '#fbfbfb'
    },
    typography: {
      textAlign: 'center'
    }
  };
});
var _default = useStyles;
exports.default = _default;