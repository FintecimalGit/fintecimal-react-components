"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    card: {
      boxShadow: 'none',
      position: 'relative',
      border: 'solid 1px #fbfbfb'
    },
    tooltipValidation: {
      display: 'inline-block',
      verticalAlign: 'middle',
      marginRight: '1rem',
      height: '30px'
    },
    img: {
      height: '100%',
      width: 'auto'
    },
    cardHeader: {
      backgroundColor: theme.palette.primary.contrastText,
      padding: theme.spacing(2),
      '& > div:first-child > span:first-child': {
        fontSize: '1rem',
        letterSpacing: '0.2px',
        fontWeight: 'bold'
      },
      '& > div:last-child': {
        alignSelf: 'end',
        '& > button:first-child': {
          padding: '4px'
        }
      }
    },
    iconButton: {
      '& > span > svg': {
        fontSize: '1.2rem'
      }
    },
    containerCarousel: {
      padding: theme.spacing(2, 2, 0, 2)
    },
    container: {
      padding: theme.spacing(2),
      '& > *:not(img)': {
        width: '100%',
        height: '534px'
      },
      '& > img': {
        display: 'inline-block',
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'fill'
      }
    }
  };
});
var _default = useStyles;
exports.default = _default;