"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    list: {
      padding: 0,
      '&:hover': {
        boxShadow: '0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.14)'
      },
      '&:hover $rejectionActions': {
        display: 'inline-block !important'
      },
      borderRadius: '4px'
    },
    listBorder: {
      border: 'solid 1px',
      borderColor: theme.palette.status.danger.main
    },
    listItemSecondaryContainer: {
      position: 'relative'
    },
    listItemSecondaryText: {
      fontWeight: 'bold',
      letterSpacing: '0.2px'
    },
    rejectionActions: {
      position: 'absolute',
      display: 'none',
      top: '-50px',
      right: '0px',
      '&:hover': {
        display: 'inline-block !important'
      }
    }
  };
});

exports.default = _default;