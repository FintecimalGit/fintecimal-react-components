"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    test: {
      marginTop: '2rem',
      width: '100%',
      height: '80vh',
      position: 'relative'
    },
    container: {
      width: '100%',
      height: '100%',
      position: 'absolute'
    },
    iconButton: {
      position: 'absolute',
      right: '-0.75rem',
      top: '-0.75rem',
      backgroundColor: '#4F41F2',
      color: 'white',
      '&:hover': {
        opacity: '0.8'
      }
    }
  };
});

exports.default = _default;