"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    dropZoneContainer: {
      boxSizing: 'border-box',
      widows: '100%',
      padding: theme.spacing(2),
      backgroundColor: '#fbfbfb',
      borderRadius: '4px',
      border: '1px solid #fbfbfb'
    },
    dropZone: {
      boxSizing: 'border-box',
      width: '100%',
      height: '204.33px',
      borderRadius: '4px',
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

exports.default = _default;