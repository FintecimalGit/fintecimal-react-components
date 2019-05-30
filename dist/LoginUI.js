"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../src/styles/LoginUI.css");

var _lib = _interopRequireDefault(require("../lib"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const Input = _lib.default.Input,
      Button = _lib.default.Button;

class LoginUI extends _react.Component {
  render() {
    return _react.default.createElement("div", {
      className: "fnt-login-ui-body"
    }, _react.default.createElement("div", {
      className: "fnt-login-ui-form"
    }, _react.default.createElement("div", {
      className: "fnt-login-ui-form-img-content"
    }, _react.default.createElement("img", {
      width: "120px",
      alt: "",
      src: "http://fintecimal-test.herokuapp.com/admin/images/fintecimal-logo.png"
    })), _react.default.createElement("div", {
      className: "fnt-login-ui-form-input-content"
    }, _react.default.createElement(Input, {
      type: 'email',
      onChange: e => this.props.onChangeEmail(e),
      onKeyDown: e => this.props.onKeyDownEmail(e)
    }), _react.default.createElement(Input, {
      type: 'password',
      onChange: e => this.props.onChangePassword(e),
      onKeyDown: e => this.props.onKeyDownPassword(e)
    })), _react.default.createElement("div", {
      className: "fnt-login-ui-btn-container"
    }, _react.default.createElement(Button, {
      textBtn: "Entrar",
      style: {
        width: '100%'
      },
      onClick: e => this.props.onClickBtnSend(e)
    }))), _react.default.createElement("div", {
      className: "fnt-login-ui-background-top"
    }), _react.default.createElement("div", {
      className: "fnt-login-ui-background-bottom"
    }));
  }

}

var _default = LoginUI;
exports.default = _default;