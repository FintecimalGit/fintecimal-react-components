"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Add = _interopRequireDefault(require("@material-ui/icons/Add"));

var _Remove = _interopRequireDefault(require("@material-ui/icons/Remove"));

var _GetApp = _interopRequireDefault(require("@material-ui/icons/GetApp"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var HeaderCollapse = function HeaderCollapse(_ref) {
  var open = _ref.open,
      toggleOpen = _ref.toggleOpen,
      title = _ref.title,
      children = _ref.children,
      container = _ref.container,
      onDownload = _ref.onDownload;
  var clasess = (0, _style.default)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setOpen = _useState2[1];

  var toggleOpenIsOpen = function toggleOpenIsOpen() {
    toggleOpen();
    setOpen(!isOpen);
  };

  var handleOnDownload = function handleOnDownload(event) {
    event.preventDefault();
    event.stopPropagation();
    onDownload(event);
  };

  (0, _react.useEffect)(function () {
    setOpen(open);
  }, [open]);
  return _react.default.createElement(_List.default, null, _react.default.createElement(_ListItem.default, {
    button: !container,
    onClick: toggleOpenIsOpen,
    className: clasess.listItem
  }, _react.default.createElement(_ListItemText.default, {
    className: clasess.listItemText,
    primary: title
  }), onDownload && _react.default.createElement(_IconButton.default, {
    className: clasess.iconButtonContainer,
    onClick: handleOnDownload
  }, _react.default.createElement(_GetApp.default, null)), !container && _react.default.createElement("div", {
    className: clasess.iconContainer
  }, isOpen ? _react.default.createElement(_Remove.default, null) : _react.default.createElement(_Add.default, null))), _react.default.createElement(_Collapse.default, {
    in: isOpen || container,
    timeout: "auto",
    unmountOnExit: true
  }, children));
};

HeaderCollapse.propTypes = {
  open: _propTypes.default.bool,
  toggleOpen: _propTypes.default.func,
  title: _propTypes.default.string,
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.node, _propTypes.default.string]),
  container: _propTypes.default.bool,
  onDownload: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([null])])
};
HeaderCollapse.defaultProps = {
  open: false,
  toggleOpen: function toggleOpen() {},
  title: '',
  children: '',
  container: false,
  onDownload: null
};
var _default = HeaderCollapse;
exports.default = _default;