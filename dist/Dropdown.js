"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../src/styles/Dropdown.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

class Dropdown extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeOptions: false
    };
  }

  componentDidMount() {
    const ctx = this;
    document.addEventListener('click', e => {
      const _document$getElements = document.getElementsByClassName('fnt-dropdown-select'),
            _document$getElements2 = _slicedToArray(_document$getElements, 1),
            type = _document$getElements2[0];

      if (type !== e.target && !type.contains(e.target)) {
        ctx.setState({
          activeOptions: false
        });
      }
    });
  }

  clickSelect(e) {
    this.setState((state, props) => {
      return {
        activeOptions: !state.activeOptions
      };
    }, this.props.clickSelect(e));
  }

  render() {
    const _this$props = this.props,
          width = _this$props.width,
          parentClass = _this$props.parentClass,
          parentStyle = _this$props.parentStyle,
          img = _this$props.img,
          imgArrowDown = _this$props.imgArrowDown,
          options = _this$props.options;
    const activeOptions = this.state.activeOptions;
    const listOptions = options.map((option, i) => {
      return _react.default.createElement("div", {
        className: "fnt-dropdown-options-row",
        key: i,
        onClick: () => this.props.onClickOption(option)
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
      onClick: e => this.clickSelect(e)
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

}

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