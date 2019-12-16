"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    listItem: {
      borderRadius: '4px',
      backgroundColor: '#fbfbfb',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.03)'
      }
    },
    listItemText: {
      '& > span': {
        textTransform: 'capitalize',
        color: theme.palette.primary.main,
        fontWeight: 'bold',
        fontSize: '1rem'
      }
    },
    iconButtonContainer: {
      margin: theme.spacing(0, 1),
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.03)'
      },
      '& > span > svg': {
        color: theme.palette.primary.main,
        fontSize: '1rem'
      }
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '24px',
      height: '20px',
      borderRadius: '2px',
      border: 'solid 1px #f1f1f1',
      '& > svg': {
        color: theme.palette.primary.main,
        fontSize: '1rem'
      }
    }
  };
});
var _default = useStyles;
exports.default = _default;