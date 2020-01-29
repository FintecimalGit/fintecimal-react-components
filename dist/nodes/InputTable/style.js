"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      position: 'absolute',
      width: '100%',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#ffffff',
      '&:focus': {
        outline: 'unset'
      },
      borderRadius: '4px'
    },
    content: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      padding: theme.spacing(3, 5)
    },
    tableContent: {
      padding: theme.spacing(3, 5)
    }
  };
});
var _default = useStyles;
exports.default = _default;