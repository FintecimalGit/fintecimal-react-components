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
      padding: theme.spacing(1.5),
      width: '100%'
    },
    title: {
      color: theme.palette.primary.main
    },
    titleLine: {
      width: '40%',
      display: 'inline-block !important'
    },
    rejectAction: {
      width: '60%',
      display: 'inline-flex',
      justifyContent: 'flex-center',
      '& > div': {
        padding: 0,
        '& > span': {
          margin: 0
        }
      }
    }
  };
});
var _default = useStyles;
exports.default = _default;