"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _styles = require("@material-ui/core/styles");
var _colorManipulator = require("@material-ui/core/styles/colorManipulator");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    tr: {
      borderBottom: 'solid 1px #f1f1f1',
      '&:hover': {
        boxShadow: '0 11px 15px 2px rgba(141, 140, 140, 0.16), 0 9px 46px 8px rgba(225, 225, 225, 0.07), 0 24px 38px 25px rgba(3, 3, 3, 0.05)',
        backgroundColor: 'inherit',
        cursor: 'pointer',
        '& > td': {
          color: theme.palette.primary.main
        }
      }
    },
    td: {
      fontWeight: 'normal',
      padding: theme.spacing(2, 1.5)
    },
    tableValue: _defineProperty({
      fontSize: '0.75rem'
    }, theme.breakpoints.up('sm'), {
      fontSize: '1rem'
    }),
    noPadding: {
      padding: 4
    },
    editButton: {
      display: 'flex',
      justifyContent: 'space-between',
      '& svg': {
        fontSize: '1rem'
      }
    }
  };
});
exports.default = _default;