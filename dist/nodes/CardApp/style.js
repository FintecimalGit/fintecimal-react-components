"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      height: '183px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'none !important',
      cursor: 'pointer',
      border: 'solid 1px #f8f8f8',
      paddingTop: '15px',
      borderRadius: theme.spacing(0.5),
      '&:hover': {
        boxShadow: '0px 0px 15px 0px rgba(0,0,0,0.1) !important',
        '& $badge': {
          color: theme.palette.primary.contrastText,
          backgroundColor: theme.palette.secondary.main
        },
        '& $title': {
          fontWeight: 'bold'
        }
      }
    },
    title: {
      margin: theme.spacing(2),
      color: '#4c5c68',
      fontSize: '20px'
    },
    badge: {
      right: 5,
      top: 23,
      backgroundColor: theme.palette.background.main,
      borderColor: theme.palette.secondary.main,
      border: '2px solid',
      color: theme.palette.secondary.main
    },
    icon: {
      fontSize: 50
    },
    image: {
      width: '80px'
    },
    iconNotification: {
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      margin: theme.spacing(2),
      alignSelf: 'flex-end'
    },
    buttonNotification: {
      alignSelf: 'flex-end',
      padding: '5px',
      borderRadius: '50% !important'
    }
  };
});
var _default = useStyles;
exports.default = _default;