"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _colorManipulator = require("@material-ui/core/styles/colorManipulator");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    tr: {
      borderBottom: 'solid 1px #f1f1f1',
      '&:hover': {
        boxShadow: '0 11px 15px 2px rgba(141, 140, 140, 0.16), 0 9px 46px 8px rgba(225, 225, 225, 0.07), 0 24px 38px 25px rgba(3, 3, 3, 0.05)',
        backgroundColor: 'inherit',
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
    tableValue: _defineProperty({
      fontSize: '0.75rem'
    }, theme.breakpoints.up('sm'), {
      fontSize: '1rem'
    }),
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