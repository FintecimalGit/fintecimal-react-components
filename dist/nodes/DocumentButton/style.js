"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    listItem: {
      padding: theme.spacing(1.5, 2),
      borderRadius: '10px',
      backgroundColor: '#FFF'
    },
    listItemCompleted: {
      boxShadow: '0px 10px 15px #ECECEC'
    },
    error: {
      borderColor: theme.palette.error.main,
      borderWidth: '1px',
      borderStyle: 'solid'
    },
    cursorPointer: {
      cursor: 'pointer'
    },
    listItemAvatar: {
      minWidth: '0px',
      paddingRight: theme.spacing(2),
      display: 'flex'
    },
    iconButton: {
      padding: theme.spacing(1)
    },
    icon: {
      color: '#C1C6D6'
    },
    iconDelete: {
      fontSize: '1rem'
    },
    iconCompleted: {
      color: '#5BC2C2'
    },
    iconError: {
      color: theme.palette.error.main,
      opacity: 0.7
    },
    hidden: {
      display: 'none'
    }
  };
});

exports.default = _default;