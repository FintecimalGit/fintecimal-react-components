"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  var _ref;

  return _ref = {
    card: {
      boxShadow: 'none',
      position: 'relative',
      border: 'solid 1px #fbfbfb'
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
    containerCarousel: {
      padding: theme.spacing(2, 2, 0, 2)
    },
    ines: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
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
    containerInes: {
      padding: theme.spacing(2),
      '& > *:not(img)': {
        width: '100%'
      },
      '& > img': {
        display: 'inline-block',
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        objectFit: 'fill'
      }
    },
    grid: {
      width: '100%',
      height: '100%',
      display: 'grid',
      gridTemplateColumns: '50% 50%',
      gridTemplateRows: '1fr'
    },
    containerIneImg: {
      width: '100%'
    }
  }, _defineProperty(_ref, "containerCarousel", {
    padding: theme.spacing(2, 2, 0, 2)
  }), _defineProperty(_ref, "ineImg", {
    width: '100%',
    objectFit: 'contain',
    maxHeight: '229px'
  }), _ref;
});
var _default = useStyles;
exports.default = _default;