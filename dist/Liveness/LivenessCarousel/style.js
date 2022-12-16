"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    container: _defineProperty({
      backgroundColor: '#E5E7F4',
      width: '100%',
      borderRadius: '20px',
      padding: '6px 10px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      overflowX: 'auto',
      cursor: 'pointer'
    }, theme.breakpoints.up('sm'), {
      padding: '10px 15px'
    }),
    flexText: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    signer: {
      flex: 1
    },
    label: _defineProperty({
      fontWeight: 600,
      fontSize: '0.75rem',
      lineHeight: '1rem',
      color: '#000F8F',
      display: 'block',
      whiteSpace: 'nowrap'
    }, theme.breakpoints.up('sm'), {
      fontSize: '1rem',
      lineHeight: '1.25rem'
    }),
    status: _defineProperty({
      fontWeight: 700,
      fontSize: '0.625rem',
      lineHeight: '1rem',
      color: '#FF5F00'
    }, theme.breakpoints.up('sm'), {
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    }),
    score: _defineProperty({
      fontWeight: 700,
      display: 'inline-block',
      marginLeft: '1rem',
      fontSize: '0.625rem',
      lineHeight: '2rem',
      color: '#FF5F00'
    }, theme.breakpoints.up('sm'), {
      fontSize: '0.875rem',
      lineHeight: '1.25rem'
    }),
    completed: {
      color: '#1A9A9A'
    },
    divider: _defineProperty({
      margin: '0 40px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 20px'
    })
  };
});

exports.default = _default;