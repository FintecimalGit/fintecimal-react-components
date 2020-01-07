"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      minWidth: 573,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch'
    },
    titleContainer: {},
    interactionContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'stretch'
    },
    interaction: {
      flex: 1,
      margin: theme.spacing(0, 1)
    },
    title: {
      color: theme.palette.primary.main,
      fontSize: 16,
      fontWeight: 'bold'
    }
  };
});
var _default = useStyles;
exports.default = _default;