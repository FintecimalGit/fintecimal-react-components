"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../src/styles/Dropdown.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown(props) {
    var _this;

    _classCallCheck(this, Dropdown);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Dropdown).call(this, props));
    _this.state = {
      activeOptions: false
    };
    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var ctx = this;
      document.addEventListener('click', function (e) {
        var _document$getElements = document.getElementsByClassName('fnt-dropdown-select'),
            _document$getElements2 = _slicedToArray(_document$getElements, 1),
            type = _document$getElements2[0];

        if (type !== e.target && !type.contains(e.target)) {
          ctx.setState({
            activeOptions: false
          });
        }
      });
    }
  }, {
    key: "clickSelect",
    value: function clickSelect(e) {
      this.setState(function (state, props) {
        return {
          activeOptions: !state.activeOptions
        };
      }, this.props.clickSelect(e));
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          width = _this$props.width,
          parentClass = _this$props.parentClass,
          parentStyle = _this$props.parentStyle,
          img = _this$props.img,
          imgArrowDown = _this$props.imgArrowDown,
          options = _this$props.options;
      var activeOptions = this.state.activeOptions;
      var listOptions = options.map(function (option, i) {
        return _react.default.createElement("div", {
          className: "fnt-dropdown-options-row",
          key: i,
          onClick: function onClick() {
            return _this2.props.onClickOption(option);
          }
        }, _react.default.createElement("p", {
          className: "fnt-dropdown-options-row-text"
        }, option.value));
      });
      return _react.default.createElement("div", {
        width: width,
        className: "fnt-dropdown ".concat(parentClass)
      }, _react.default.createElement("div", {
        className: "fnt-dropdown-select",
        style: parentStyle,
        onClick: function onClick(e) {
          return _this2.clickSelect(e);
        }
      }, _react.default.createElement("div", {
        className: "fnt-dropdown-select-container-img"
      }, _react.default.createElement("img", {
        className: "fnt-dropdown-select-img",
        alt: "",
        src: img
      })), _react.default.createElement("div", {
        className: "fnt-dropdown-select-container-text"
      }, _react.default.createElement("p", {
        className: "fnt-dropdown-select-text"
      }, "Usuario")), _react.default.createElement("div", {
        className: "fnt-dropdown-select-container-arrow"
      }, _react.default.createElement("img", {
        alt: "",
        src: imgArrowDown,
        className: "fnt-dropdown-select-arrow"
      }))), _react.default.createElement("div", {
        style: {
          display: activeOptions ? 'block' : 'none'
        },
        className: "fnt-dropdown-options"
      }, listOptions));
    }
  }]);

  return Dropdown;
}(_react.Component);

Dropdown.defaultProps = {
  parentClass: '',
  parentStyle: {},
  img: 'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/userIcon%403x.png',
  imgArrowDown: 'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/backIcon%403x.png',
  options: [{
    value: 'example',
    name: 'Ejemplo'
  }]
};
var _default = Dropdown;
exports.default = _default;