"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    videoContainer: {
      height: '100%',
      padding: theme.spacing(2)
    },
    video: {
      backgroundColor: '#F8F8F8',
      width: '100%',
      height: '100%',
      objectFit: 'contain',
      border: '1px solid black'
    }
  };
});
var _default = useStyles;
exports.default = _default;