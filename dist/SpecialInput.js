"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

require("../styles/BaseInput.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      alignItems: 'center',
      margin: theme.spacing(1)
    },
    icon: {
      flex: 1
    },
    form: {
      flex: 20
    },
    label: {
      fontFamily: '"Open Sans", sans-serif',
      fontSize: 14,
      fontWeight: 600,
      opacity: 1,
      color: 'gray'
    },
    input: {
      paddingTop: 25,
      paddingBottom: 12
    },
    notchedOutline: {
      //borderLeft: '1px solid lightgray',
      borderRight: '2px solid lightgray',
      borderTop: '2px solid lightgray',
      borderBottom: '2px solid lightgray',
      opacity: 0.7
    },
    focusNotchedOutline: {
      borderWidth: 3,
      borderColor: '#0099ff',
      opacity: 1
    },
    asterisk: {
      color: 'red',
      fontSize: 11,
      verticalAlign: 'super'
    },
    adornment: {
      marginTop: 12
    }
  };
});

var BaseInput = function BaseInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      handleChange = _ref.handleChange,
      required = _ref.required,
      error = _ref.error,
      errorMessage = _ref.errorMessage,
      type = _ref.type,
      clear = _ref.clear,
      onBlur = _ref.onBlur,
      onClear = _ref.onClear,
      onKeyDown = _ref.onKeyDown,
      children = _ref.children,
      onFocus = _ref.onFocus,
      startAdornment = _ref.startAdornment;
  var classes = useStyles();
  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement("div", {
    className: classes.icon
  }, children), _react.default.createElement(_core.FormControl, {
    className: classes.form,
    margin: "normal",
    required: required,
    error: error
  }, _react.default.createElement(_core.InputLabel, {
    className: classes.label,
    htmlFor: "component-simple",
    variant: "filled",
    classes: {
      asterisk: classes.asterisk
    }
  }, error && errorMessage || label), _react.default.createElement(_core.OutlinedInput, {
    id: "component-simple",
    value: value,
    onChange: handleChange,
    onBlur: onBlur,
    onFocus: onFocus,
    startAdornment: startAdornment && _react.default.createElement(_core.InputAdornment, {
      position: "start",
      className: classes.adornment
    }, startAdornment),
    endAdornment: clear && _react.default.createElement(_core.InputAdornment, {
      position: "end"
    }, _react.default.createElement(_core.IconButton, {
      "aria-label": "clear input",
      onClick: onClear
    }, _react.default.createElement(_icons.Clear, null))),
    inputProps: {
      className: classes.input
    },
    classes: {
      notchedOutline: classes.notchedOutline,
      focused: classes.focusNotchedOutline
    },
    type: type
  })));
};

BaseInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: ''
};
BaseInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),
  required: _propTypes.default.bool,
  error: _propTypes.default.bool,
  type: _propTypes.default.string,
  clear: _propTypes.default.bool,
  errorMessage: _propTypes.default.string,
  handleChange: _propTypes.default.func.isRequired,
  onBlur: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  startAdornment: _propTypes.default.string
};
var _default = BaseInput;
exports.default = _default;