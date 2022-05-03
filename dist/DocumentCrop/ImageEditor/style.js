"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {},
    cancel: {
      top: 2,
      left: 2,
      position: 'absolute',
      width: '70px',
      backgroundColor: 'transparent'
    },
    img: {
      maxWidth: '100%',
      height: '25vh',
      // FIX BIG IMAGE
      display: 'block'
    },
    actionContainer: {
      padding: theme.spacing(1),
      backgroundColor: 'transparent',
      maxHeight: '58vh',
      overflowY: 'auto'
    },
    actions: {
      top: 0,
      right: 10,
      position: 'absolute',
      width: '70px',
      backgroundColor: 'transparent'
    },
    button: {
      fontSize: '12px',
      textTransform: 'initial',
      color: '#FFF',
      borderRadius: '3px',
      '& > span > svg': {
        color: theme.palette.primary.main
      }
    }
  };
});

exports.default = _default;