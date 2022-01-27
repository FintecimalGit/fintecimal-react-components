"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      display: 'flex',
      flexDirection: 'row'
    },
    onBackContainer: {
      paddingRight: theme.spacing(2)
    },
    iconButton: {
      padding: theme.spacing(1)
    },
    icon: {
      color: theme.palette.primary.main,
      fontSize: '1rem'
    }
  };
});

exports.default = _default;