"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {},
    img: {
      maxWidth: '100%',
      height: '25vh',
      // FIX BIG IMAGE
      display: 'block'
    },
    actionContainer: {
      padding: theme.spacing(1)
    },
    button: {
      fontSize: '12px',
      textTransform: 'initial',
      color: '#FFF',
      borderRadius: '3px',
      '& > span > svg': {
        color: theme.palette.primary.main,
        paddingRight: theme.spacing(1)
      }
    }
  };
});

exports.default = _default;