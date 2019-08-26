"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = makeStyles(function (theme) {
  return {
    root: {
      display: 'flex',
      flexWrap: 'wrap'
    },
    formControl: {
      margin: theme.spacing(1)
    }
  };
});

var BaseInput = function BaseInput(_ref) {
  var label = _ref.label,
      value = _ref.value,
      handleChange = _ref.handleChange;
  var classes = useStyles();
  return _react.default.createElement(_core.FormControl, {
    className: classes.formControl
  }, _react.default.createElement(_core.InputLabel, {
    htmlFor: "component-simple"
  }, label), _react.default.createElement(_core.Input, {
    id: "component-simple",
    value: value,
    onChange: handleChange
  }));
};

BaseInput.defaultPropTypes = {
  value: ''
};
BaseInput.propTypes = {
  label: _propTypes.default.string.isRequired,
  value: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string])
};
var _default = BaseInput;
exports.default = _default;