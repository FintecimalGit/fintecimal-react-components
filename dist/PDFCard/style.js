"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    pdfContainer: {
      padding: theme.spacing(2)
    },
    pdf: {
      width: '100%',
      height: '419px',
      objectFit: 'fill'
    }
  };
});
var _default = useStyles;
exports.default = _default;