"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@material-ui/core/styles");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      backgroundColor: 'transparent',
      width: '100%',
      borderRadius: '20px',
      display: 'flex',
      alignItems: 'center',
      boxSizing: 'border-box',
      overflowX: 'auto'
    },
    flexText: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    signer: _defineProperty({
      flex: 1,
      backgroundColor: '#F8F8F8',
      padding: '6px 10px',
      cursor: 'pointer'
    }, theme.breakpoints.up('sm'), {
      padding: '10px 15px'
    }),
    current: {
      backgroundColor: '#E5E7F4'
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
      color: '#ed0505'
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
      color: '#1a9a2f'
    },
    divider: _defineProperty({
      margin: '0 40px'
    }, theme.breakpoints.up('sm'), {
      margin: '0 20px'
    })
  };
});
exports.default = _default;