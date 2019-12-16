"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    'MuiCardHeader-avatar': {
      margin: 0
    },
    card: {
      width: 326
    },
    cardHeader: {
      paddingBottom: theme.spacing(1),
      '& > div:first-child': {
        marginRight: theme.spacing(1)
      }
    },
    avatar: {
      fontSize: '1em',
      width: '32px',
      height: '32px'
    },
    menuItem: {
      padding: 0,
      outline: 'none',
      overflow: 'initial'
    },
    iconButton: {
      padding: theme.spacing(1.5),
      '&:hover': {
        backgroundColor: 'transparent'
      }
    },
    closeIcon: {
      fontSize: '1rem'
    },
    cardContent: {
      paddingTop: 0,
      '& > div:not(:last-child)': {
        marginBottom: theme.spacing(1)
      },
      '& > div': {
        letterSpacing: '0.2px',
        lineHeight: '19px'
      },
      '& > div > div:last-child': {
        opacity: 0.8
      }
    }
  };
});

exports.default = _default;