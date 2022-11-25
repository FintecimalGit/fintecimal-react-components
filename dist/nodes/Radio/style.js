"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _core = require("@material-ui/core");

var _default = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap'
    },
    form: {
      alignSelf: 'stretch'
    },
    label: {
      fontSize: 14,
      fontWeight: 500,
      opacity: 1
    },
    option: {
      fontSize: 14,
      fontWeight: 400,
      padding: '6px 7px'
    },
    optionLabel: {
      marginTop: '10px',
      marginLeft: '0px'
    },
    input: {
      flex: 1,
      fontSize: 14
    },
    notchedOutline: {
      borderWidth: 1,
      opacity: 0.7
    },
    focusNotchedOutline: {
      borderWidth: 2,
      opacity: 1
    },
    asterisk: {
      color: theme.palette.error.main,
      fontSize: 14.2,
      verticalAlign: 'super'
    },
    icon: {
      fontSize: 20,
      marginRight: theme.spacing(2, 0)
    },
    item: {
      paddingLeft: theme.spacing(3)
    },
    category: {
      fontWeight: theme.typography.fontWeightBold,
      opacity: 1
    },
    selectMenu: {
      border: '2px solid red'
    },
    normal: {
      marginTop: 3,
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: '#D5DCE0',
      borderRadius: 4
    },
    focus: {
      marginTop: 3,
      borderColor: theme.palette.primary.main
    },
    error: {
      marginTop: 3,
      borderColor: theme.palette.status.danger.main
    },
    longPlaceHolder: {
      marginBottom: '10px'
    },
    smallRadioButton: {
      '& svg': {
        width: '0.75em',
        height: '0-75em'
      }
    }
  };
});

exports.default = _default;