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
        boxShadow: '0 24px 38px 20px rgba(0,0,0,0.07), 0 23px 46px 20px rgba(0,0,0,0.01), 0 11px 46px 20px rgba(0,0,0,0.07)',
        cursor: 'pointer',
        '& > td': {
          color: theme.palette.primary.main
        }
      }
    },
    td: {
      fontWeight: 'normal',
      padding: theme.spacing(2, 1.5)
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