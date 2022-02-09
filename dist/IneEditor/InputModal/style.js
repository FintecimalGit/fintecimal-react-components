"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@material-ui/core/styles");

var _default = (0, _styles.makeStyles)(function (theme) {
  return {
    container: {
      display: 'flex',
      flexDirection: 'column',
      flex: '1',
      '& > *:first-child': {
        flex: 0
      },
      '& > *:last-child': {
        flex: 1
      }
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      '& > div': {
        margin: 0,
        '& > div': {
          margin: 0
        }
      }
    },
    actionContainer: {
      borderTop: '1px solid #F3F3F3',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      '& > button:first-child': {
        marginRight: theme.spacing(2)
      }
    },
    formInputContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'scroll',
      overflowX: 'hidden',
      height: '100%',
      maxHeight: '80vh',
      '& > div': {
        margin: '0px',
        width: '100%'
      }
    },
    fields: {
      '& > div': {
        margin: theme.spacing(2, 0)
      },
      '& > hr': {
        marginTop: '15px',
        marginBottom: '15px'
      }
    }
  };
});

exports.default = _default;