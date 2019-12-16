"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    tr: {
      borderBottom: 'solid 1px',
      borderBottomColor: (0, _colorManipulator.fade)('#F1F1F1', 0.5),
      '&:hover': {
        boxShadow: '0 24px 38px 3px rgba(0,0,0,0.14), 0 9px 46px 8px rgba(0,0,0,0.12), 0 11px 15px -7px rgba(0,0,0,0.2)',
        cursor: 'pointer'
      }
    },
    td: {
      color: theme.palette.text.primary,
      fontWeight: 'normal',
      padding: theme.spacing(2, 1.5),
      textTransform: 'lowercase',
      '&::first-letter': {
        textTransform: 'uppercase'
      }
    },
    noPadding: {
      padding: 4
    },
    editButton: {
      display: 'flex',
      justifyContent: 'space-between',
      '& svg': {
        fontSize: '1rem'
      }
    }
  };
});

exports.default = _default;