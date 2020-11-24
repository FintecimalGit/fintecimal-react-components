"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      alignItems: 'center',
      alignContent: 'center',
      border: '1px solid #dfdfdf;',
      borderRadius: '5px',
      paddingTop: '20px',
      paddingBottom: '20px',
      paddingLeft: '20%',
      paddingRight: '20%'
    },
    button: {
      width: '100%',
      backgroundColor: '#510ed0',
      color: '#ffffff',
      textTransform: 'none',
      '&:hover': {
        backgroundColor: '#873eff',
        borderColor: '#873eff',
        boxShadow: 'none'
      }
    }
  };
});

exports.default = _default;