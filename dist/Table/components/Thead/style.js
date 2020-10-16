"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(theme => ({
  header: {
    backgroundColor: '#FBFBFB',
    paddingBottom: theme.spacing(2)
  },
  th: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    padding: theme.spacing(2, 1.5),
    textAlign: 'left'
  },
  noPadding: {
    padding: 4
  },
  cleanTable: {
    display: 'flex',
    justifyContent: 'space-between',
    '& svg': {
      fontSize: '1rem',
      color: theme.palette.primary.main
    }
  }
}));

exports.default = _default;