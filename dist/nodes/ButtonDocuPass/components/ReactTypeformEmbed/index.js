"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var typeformEmbed = _interopRequireWildcard(require("@typeform/embed"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var styleDefault = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  overflow: 'hidden'
};

var ReactTypeformEmbed =
/*#__PURE__*/
function (_Component) {
  _inherits(ReactTypeformEmbed, _Component);

  function ReactTypeformEmbed() {
    _classCallCheck(this, ReactTypeformEmbed);

    return _possibleConstructorReturn(this, _getPrototypeOf(ReactTypeformEmbed).apply(this, arguments));
  }

  _createClass(ReactTypeformEmbed, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          url = _this$props.url,
          hideHeaders = _this$props.hideHeaders,
          hideFooter = _this$props.hideFooter,
          opacity = _this$props.opacity,
          buttonText = _this$props.buttonText,
          popup = _this$props.popup,
          mode = _this$props.mode,
          autoOpen = _this$props.autoOpen,
          autoClose = _this$props.autoClose,
          onSubmit = _this$props.onSubmit,
          size = _this$props.size;
      var options = {
        hideHeaders: hideHeaders,
        hideFooter: hideFooter,
        opacity: opacity,
        buttonText: buttonText,
        mode: mode,
        autoOpen: autoOpen,
        autoClose: autoClose,
        onSubmit: onSubmit,
        size: size
      }; // Popup Mode

      if (popup) {
        // Load Typeform embed popup
        this.typeform = typeformEmbed.makePopup(url, options); // Widget Mode (default)
      } else {
        var elm = this.typeformElm; // Load Typeform embed widget

        typeformEmbed.makeWidget(elm, url, options);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var style = Object.assign({}, styleDefault, this.props.style);
      return _react.default.createElement("div", {
        className: "ReactTypeformEmbed",
        ref: function ref(tf) {
          _this.typeformElm = tf;
        },
        style: style
      });
    }
  }]);

  return ReactTypeformEmbed;
}(_react.Component);

ReactTypeformEmbed.propTypes = {
  style: _propTypes.default.object,
  url: _propTypes.default.string.isRequired,
  popup: _propTypes.default.bool,
  hideHeaders: _propTypes.default.bool,
  hideFooter: _propTypes.default.bool,
  // Widget options
  opacity: _propTypes.default.number,
  buttonText: _propTypes.default.string,
  // Popup options
  mode: _propTypes.default.string,
  autoOpen: _propTypes.default.bool,
  autoClose: _propTypes.default.number,
  onSubmit: _propTypes.default.func,
  size: _propTypes.default.number
}; // Default values taken from official Typeform docs
// https://developer.typeform.com/embed/modes/

ReactTypeformEmbed.defaultProps = {
  style: {},
  popup: false,
  hideHeaders: false,
  hideFooter: false,
  onSubmit: function onSubmit() {
    return console.info('sin onsubmit');
  },
  // Widget options
  opacity: 100,
  buttonText: 'Start',
  // Popup options
  mode: 'popup',
  // options: "popup", "drawer_left", "drawer_right"
  autoOpen: false,
  autoClose: 1,
  size: 80
};
var _default = ReactTypeformEmbed;
exports.default = _default;