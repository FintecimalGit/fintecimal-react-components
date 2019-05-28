"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../styles/Input.css");

require("../styles/InputSearch.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

class Input extends _react.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWithContent: 0
    };
  }

  hasContent(e) {
    this.setState({
      inputWithContent: e.target.value.length
    });
    this.props.onChange(e);
  }

  typeInput(aparience) {
    let className = 'fnt-input-';

    switch (aparience) {
      case 'search':
        return "".concat(className).concat(aparience);

      default:
        return "".concat(className, "basic");
    }
  }

  render() {
    const _this$props = this.props,
          className = _this$props.className,
          style = _this$props.style,
          label = _this$props.label,
          name = _this$props.name,
          type = _this$props.type,
          id = _this$props.id,
          aparience = _this$props.aparience;
    const inputWithContent = this.state.inputWithContent;
    return _react.default.createElement("div", {
      style: {
        padding: "".concat(aparience === 'basic' ? '30px' : '0', " 0")
      }
    }, _react.default.createElement("input", {
      id: id,
      className: "".concat(this.typeInput(aparience), " ").concat(className),
      style: style,
      name: name,
      onChange: e => this.hasContent(e),
      onKeyDown: e => this.props.onKeyDown(e),
      onClick: this.props.onClick,
      type: type
    }), _react.default.createElement("label", {
      className: "".concat(this.typeInput(aparience), "-label ").concat(inputWithContent ? 'inputFill' : ''),
      name: name
    }, label));
  }

}

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