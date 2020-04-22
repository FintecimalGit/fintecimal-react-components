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
    },
    rejectBody: {
      width: '292px',
      height: '48px',
      borderRadius: '4px',
      border: 'solid 1px #979797',
      backgroundColor: '#f5f5f5',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    rejectIcon: {
      margin: '8px',
      float: 'left',
      width: '24px',
      height: '24px',
      boxShadow: '0 24px 38px 3px rgba(0, 0, 0, 0.14)',
      border: 'solid 1px #8a2b2b',
      backgroundColor: '#ffffff',
      borderRadius: '50%',
      position: 'relative',
      '& > svg': {
        color: '#8a2b2b',
        fontSize: '1em',
        position: 'absolute',
        right: '50%',
        top: '50%',
        transform: 'scale(-1, 1) translate(-50%, -50%)'
      }
    },
    rejectText: {
      fontSize: '12px'
    },
    undoButton: {
      marginLeft: '30px',
      textTransform: 'none',
      fontWeight: 'normal'
    }
  };
});

exports.default = _default;