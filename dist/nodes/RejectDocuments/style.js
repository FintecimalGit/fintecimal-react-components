"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    titleContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: theme.spacing(1.5)
    },
    title: {
      color: theme.palette.primary.main
    },
    titleLine: {
      width: '90%',
      display: 'inline-block !important'
    },
    rejectAction: {
      width: '10%',
      display: 'inline-flex',
      justifyContent: 'flex-end',
      '& > div': {
        padding: 0,
        '& > span': {
          margin: 0
        }
      }
    },
    rejectActionContainer: {
      position: 'relative',
      '& > div:not(:last-child)': {
        marginBottom: theme.spacing(3)
      },
      '&:hover > div:not(:last-child)': {
        boxShadow: '0 11px 15px 2px rgba(141, 140, 140, 0.16), 0 9px 46px 8px rgba(225, 225, 225, 0.07), 0 24px 38px 25px rgba(3, 3, 3, 0.05)'
      },
      '&:hover > $rejectAction': {
        display: 'flex !important'
      }
    },
    container: {
      padding: theme.spacing(2),
      '& > *': {
        width: '100%',
        height: '534px'
      }
    }
  };
});
var _default = useStyles;
exports.default = _default;