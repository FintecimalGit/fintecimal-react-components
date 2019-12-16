"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      position: 'relative',
      display: 'inline-block',
      '&:hover $rejectContainer': {
        display: 'flex !important'
      }
    },
    rejectContainer: {
      position: 'absolute',
      padding: theme.spacing(0, 4),
      top: '0px',
      right: theme.spacing(-12),
      height: '100%',
      display: 'none',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      '&:hover': {
        display: 'flex !important'
      }
    },
    video: {
      width: '648px',
      height: '367px',
      objectFit: 'contain'
    }
  };
});
var _default = useStyles;
exports.default = _default;