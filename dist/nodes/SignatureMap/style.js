"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _default = (0, _core.makeStyles)(function (theme) {
  return {
    container: {
      padding: theme.spacing(2)
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      border: "solid 1px ".concat(theme.border),
      borderRadius: '4px',
      height: 321,
      boxSizing: 'border-box',
      letterSpacing: 0.2
    },
    header: {
      height: 51,
      display: 'flex',
      alignItems: 'center'
    },
    title: {
      padding: theme.spacing(2),
      fontWeight: 'bold',
      fontSize: 16,
      color: theme.palette.text.primary
    },
    map: {
      flex: 1,
      padding: theme.spacing(2)
    },
    footer: {
      display: 'flex',
      flexDirection: 'row',
      fontSize: '1rem',
      fontWeight: 500,
      color: theme.palette.text.primary,
      marginTop: theme.spacing(2),
      '& > div': {
        flex: '50%',
        display: 'inline-flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        '& > span': {
          display: 'inline-block',
          padding: theme.spacing(2),
          '&:first-child': {
            backgroundColor: '#fdfdfd'
          }
        }
      }
    }
  };
});

exports.default = _default;