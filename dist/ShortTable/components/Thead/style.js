"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    header: {
      backgroundColor: '#FBFBFB',
      paddingBottom: theme.spacing(2)
    },
    th: {
      color: theme.palette.primary.main,
      fontWeight: 'bold',
      padding: theme.spacing(2, 1.5),
      textAlign: 'left'
    },
    tableValue: _defineProperty({
      fontSize: '0.875rem'
    }, theme.breakpoints.up('sm'), {
      fontSize: '1rem'
    }),
    noPadding: {
      padding: 4
    },
    cleanTable: {
      display: 'flex',
      justifyContent: 'space-between',
      '& svg': {
        fontSize: '1rem',
        color: theme.palette.primary.main
      }
    }
  };
});

exports.default = _default;