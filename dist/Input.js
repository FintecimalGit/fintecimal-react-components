"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../src/styles/Input.css");

require("../src/styles/InputSearch.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Input =
/*#__PURE__*/
function (_Component) {
  _inherits(Input, _Component);

  function Input(props) {
    var _this;

    _classCallCheck(this, Input);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Input).call(this, props));
    _this.state = {
      inputWithContent: 0,
      value: ''
    };
    return _this;
  }

  _createClass(Input, [{
    key: "hasContent",
    value: function hasContent(event) {
      var value = event.target.value;
      this.setState({
        inputWithContent: value.length
      }, this.props.onKeyUp({
        event: event,
        value: value
      }));
    }
  }, {
    key: "typeInput",
    value: function typeInput(aparience) {
      var className = 'fnt-input-';

      switch (aparience) {
        case 'search':
          return "".concat(className).concat(aparience);

        default:
          return "".concat(className, "basic");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          label = _this$props.label,
          name = _this$props.name,
          type = _this$props.type,
          id = _this$props.id,
          aparience = _this$props.aparience;
      var inputWithContent = this.state.inputWithContent;
      return _react.default.createElement("div", {
        style: {
          padding: "".concat(aparience === 'basic' ? '30px' : '0', " 0")
        }
      }, _react.default.createElement("input", {
        id: id,
        className: "".concat(this.typeInput(aparience), " ").concat(className),
        style: style,
        name: name,
        onKeyUp: function onKeyUp(e) {
          return _this2.hasContent(e);
        },
        onClick: this.props.onClick,
        type: type
      }), _react.default.createElement("label", {
        className: "".concat(this.typeInput(aparience), "-label ").concat(inputWithContent ? 'inputFill' : ''),
        name: name
      }, label));
    }
  }]);

  return Input;
}(_react.Component);

Input.defaultProps = {
  id: 'not-uid',
  className: '',
  style: {},
  label: 'Cualquier texto',
  placeholder: 'Introduce Texto',
  name: 'input',
  type: 'text',
  aparience: 'basic'
};
var _default = Input;
exports.default = _default;
