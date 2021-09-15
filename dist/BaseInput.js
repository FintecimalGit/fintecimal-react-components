"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _icons = require("@material-ui/icons");

var _LongPlaceHolder = _interopRequireDefault(require("./LongPlaceHolder"));

var _LongError = _interopRequireDefault(require("./LongError"));

var _utils = require("./commons/utils");

require("./styles/BaseInput.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _core.makeStyles)(function (theme) {
  return {
    root: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      margin: theme.spacing(1)
    },
    form: {
      alignSelf: 'stretch'
    },
    label: {
      fontSize: 14,
      fontWeight: 500,
      opacity: 1
    },
    input: {
      paddingTop: 25,
      paddingBottom: 12
    },
    notchedOutline: {
      borderWidth: 2,
      opacity: 0.7
    },
    focusNotchedOutline: {
      borderWidth: 3,
      opacity: 1
    },
    asterisk: {
      color: theme.palette.error.main,
      fontSize: 13,
      verticalAlign: 'super'
    },
    icon: {
      fontSize: 22
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
      disabled = _ref.disabled,
      statusOnly = _ref.statusOnly;
  var classes = useStyles();

  var selectLabel = function selectLabel() {
    if (error) {
      if ((0, _utils.isTextLong)(errorMessage)) {
        if ((0, _utils.isTextLong)(label)) return _utils.defaultPlaceHolder;
        return label;
      }

      return errorMessage;
    } else {
      if ((0, _utils.isTextLong)(label)) return _utils.defaultPlaceHolder;
      return label;
    }
  };

  var selectAdorment = function selectAdorment() {
    if (clear && !disabled) {
      return _react.default.createElement(_core.InputAdornment, {
        position: "end"
      }, _react.default.createElement(_core.IconButton, {
        "aria-label": "clear input",
        onClick: onClear,
        tabIndex: "-1"
      }, _react.default.createElement(_icons.Clear
      /*className={classes.icon}*/
      , null)));
    } else if (disabled && statusOnly) {
      return _react.default.createElement(_core.InputAdornment, {
        position: "end"
      }, _react.default.createElement("h3", null, "Cargado"));
    }
  };

  return _react.default.createElement("div", {
    className: classes.root
  }, (0, _utils.isTextLong)(label) && _react.default.createElement("div", null, _react.default.createElement(_LongPlaceHolder.default, {
    text: label
  })), _react.default.createElement(_core.FormControl, {
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
  }, selectLabel()), _react.default.createElement(_core.OutlinedInput, {
    id: "component-simple",
    value: value,
    onChange: handleChange,
    onBlur: onBlur,
    endAdornment: selectAdorment(),
    inputProps: {
      className: classes.input
    },
    classes: {
      notchedOutline: classes.notchedOutline,
      focused: classes.focusNotchedOutline
    },
    type: type,
    disabled: disabled
  })), error && (0, _utils.isTextLong)(errorMessage) && _react.default.createElement(_LongError.default, {
    text: errorMessage
  }));
};

BaseInput.defaultProps = {
  value: '',
  required: false,
  error: false,
  type: 'text',
  clear: true,
  errorMessage: '',
  disabled: false,
  statusOnly: false
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
  disabled: _propTypes.default.bool,
  status: _propTypes.default.bool
};
var _default = BaseInput;
exports.default = _default;