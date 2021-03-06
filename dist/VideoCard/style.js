"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    videoContainer: {
      padding: theme.spacing(2)
    },
    video: {
      width: '100%',
      height: '367px',
      objectFit: 'contain'
    }
  };
});
var _default = useStyles;
exports.default = _default;