"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function () {
  return {
    container: {
      height: '59vh' // Note: This is For Responsive ImageEditor Component

    },
    containerAbsolute: {
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: '#000',
      display: 'flex',
      flexDirection: 'column'
    },
    header: {
      width: '100%',
      padding: '20px',

      /* BRUTE FORCE */
      '& *': {
        color: '#FFF',
        '& p:first-child': {
          fontWeight: 'lighter'
        }
      },
      flex: 0 // Note: This is For Responsive ImageEditor Component

    },
    documentContainer: {
      flex: 1,
      // Note: This is For Responsive ImageEditor Component

      /** BRUTE FORCE */
      '& > div:first-child, & > div:first-child > div:first-child': {
        height: '100%' // Note: This is For Responsive ImageEditor Component

      }
    }
  };
});

exports.default = _default;