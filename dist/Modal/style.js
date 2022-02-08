"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      position: 'relative',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center'
    },
    paper: {
      width: '90vw',
      maxWidth: '461px',
      minHeight: '368px',
      maxHeight: '90vh',
      overflowY: 'auto',
      padding: theme.spacing(3),
      display: 'flex',
      flexDirection: 'column',
      margin: theme.spacing(1)
    },
    headerContainer: {
      width: '100%',
      display: 'inline-flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flex: 0,
      paddingBottom: theme.spacing(3)
    },
    iconButton: {
      padding: '0px',
      '&:hover': {
        color: theme.palette.primary.main,
        backgroundColor: 'transparent'
      }
    },
    bodyContainer: {
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
      alignItems: 'stretch'
    },
    bodyText: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
      flex: 1,
      padding: theme.spacing(3),
      backgroundColor: '#FBFBFB',
      borderRadius: '4px',
      textAlign: 'center',
      '& > :first-child': {
        paddingBottom: theme.spacing(2)
      }
    }
  };
});

exports.default = _default;