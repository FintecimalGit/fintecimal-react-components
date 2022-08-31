"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var useStyles = (0, _styles.makeStyles)(function (theme) {
  return {
    container: _defineProperty({
      width: '100%',
      height: '100%',
      backgroundColor: '#FFF',
      padding: '16px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing: 'border-box'
    }, theme.breakpoints.up('sm'), {
      padding: '32px'
    }),
    title: _defineProperty({
      textAlign: 'center',
      fontWeight: 700,
      fontSize: '1.5rem',
      color: '#000'
    }, theme.breakpoints.up('sm'), {
      fontSize: '2rem'
    })
  };
});
var _default = useStyles;
exports.default = _default;