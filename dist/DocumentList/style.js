"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    dot: {
      height: '10px',
      width: '10px',
      borderRadius: '50%',
      display: 'inline-block',
      border: 'solid 2px',
      marginRight: theme.spacing(2),
      verticalAlign: 'middle'
    },
    dotOnHold: {
      backgroundColor: 'transparent',
      borderColor: '#7B7B7B'
    },
    dotPending: {
      backgroundColor: theme.palette.status.warning.main,
      borderColor: theme.palette.status.warning.main
    },
    dotSuccess: {
      backgroundColor: theme.palette.status.success.main,
      borderColor: theme.palette.status.success.main
    },
    dotDanger: {
      backgroundColor: theme.palette.status.danger.main,
      borderColor: theme.palette.status.danger.main
    },
    name: {
      color: theme.palette.text.primary
    },
    nameOnHole: {
      opacity: '0.5'
    },
    successIcon: {
      color: theme.palette.status.success.main
    },
    dangerIcon: {
      color: 'red'
    },
    listItem: {
      borderBottom: 'solid 1px #f1f1f1',
      '&:hover': {
        boxShadow: '0 11px 15px 2px rgba(141, 140, 140, 0.16), 0 9px 46px 8px rgba(225, 225, 225, 0.07), 0 24px 38px 25px rgba(3, 3, 3, 0.05)',
        // estandar
        backgroundColor: 'inherit',
        '& > div > span > span': {
          color: theme.palette.primary.main
        }
      }
    },
    noPadding: {
      padding: 0
    },
    statusName: {
      fontSize: '14px',
      letterSpacing: '0.29px',
      fontWeight: '600',
      paddingRight: theme.spacing(6.5)
    }
  };
});
var _default = useStyles;
exports.default = _default;