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
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    datePicker: {
      width: '100%',
      '& > label': {
        fontSize: 14,
        fontWeight: 500,
        opacity: 1
      },
      '& > div > input': {
        fontSize: 14,
        flex: '1px'
      }
    }
  };
});

exports.default = _default;