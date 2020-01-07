"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    paper: {
      maxWidth: '384px',
      height: '168px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxShadow: 'none !important',
      cursor: 'pointer',
      border: 'solid 1px #f8f8f8',
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
      color: theme.palette.tertiary.main,
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
    }
  };
});
var _default = useStyles;
exports.default = _default;