"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _style = _interopRequireDefault(require("./style"));

var _icons = require("@material-ui/icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var InputResponseChatgpt = function InputResponseChatgpt(_ref) {
  var value = _ref.value,
      handleChange = _ref.handleChange,
      configChatgpt = _ref.configChatgpt,
      avatarUrl = _ref.avatarUrl,
      defaultValue = _ref.defaultValue;
  var _configChatgpt$delay = configChatgpt.delay,
      delay = _configChatgpt$delay === void 0 ? 100 : _configChatgpt$delay,
      _configChatgpt$typeAn = configChatgpt.typeAnimationOnStart,
      typeAnimationOnStart = _configChatgpt$typeAn === void 0 ? false : _configChatgpt$typeAn;

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      displayMessage = _useState2[0],
      setDisplayMessage = _useState2[1];

  var classes = (0, _style.default)();

  var formattedValue = function formattedValue() {
    return value.replace(/\\n\n/g, '\n\n').replace(/\\n/g, '\n');
  };

  (0, _react.useEffect)(function () {
    if (value) {
      var newValue = formattedValue();
      setDisplayMessage(newValue);
    }
  }, [value]);
  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_core.Paper, {
    className: classes.root,
    elevation: 1
  }, _react.default.createElement(_core.Avatar, {
    alt: "Bot",
    src: avatarUrl,
    className: classes.avatar
  }), value ? _react.default.createElement(_core.Typography, {
    className: classes.message,
    variant: "body1"
  }, _react.default.createElement("pre", {
    className: classes.spanPre
  }, displayMessage)) : _react.default.createElement(_core.Typography, {
    className: classes.message,
    variant: "body1"
  }, defaultValue)));
};

InputResponseChatgpt.defaultProps = {
  avatarUrl: 'https://fintecimal-test.s3.amazonaws.com/img_bot_gpt.png',
  className: '',
  required: false,
  disabled: false,
  handleChange: function handleChange() {},
  value: '',
  configChatgpt: {},
  defaultValue: 'Aún no se ha recibido una respuesta de chatgpt'
};
var _default = InputResponseChatgpt;
exports.default = _default;