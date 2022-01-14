"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    root: {
      cursor: 'pointer',
      width: '100%',
      '&:hover $selector': {
        display: 'flex'
      }
    },
    imageContainer: {
      position: 'relative',
      width: '100%',
      minHeight: '66px',
      height: '8vw',
      border: 'solid 1px #E0E0E0',
      borderRadius: '4px'
    },
    isOver: {
      border: "1px dashed ".concat(theme.palette.primary.main)
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'fill'
    },
    selector: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      display: 'none',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(255, 255, 255, 0.75)',
      '& > svg': {
        fontSize: '1rem'
      }
    },
    typography: {
      paddingTop: theme.spacing(1),
      opacity: 0.5,
      wordWrap: 'break-word'
    },
    typographySelected: {
      opacity: 1
    }
  };
});
var _default = useStyles;
exports.default = _default;