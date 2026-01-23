"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _reactFlipToolkit = require("react-flip-toolkit");

var _reactDndHtml5Backend = require("react-dnd-html5-backend");

var _reactDnd = require("react-dnd");

var _SearchBar = _interopRequireDefault(require("../nodes/SearchBar"));

var _Add = _interopRequireDefault(require("./Add"));

var _Drag = _interopRequireDefault(require("./Drag"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileFinder = function FileFinder(_ref) {
  var files = _ref.files,
      current = _ref.current,
      onClick = _ref.onClick,
      search = _ref.search,
      onSearch = _ref.onSearch,
      placeholder = _ref.placeholder,
      disabled = _ref.disabled,
      multiple = _ref.multiple,
      accept = _ref.accept,
      onDrop = _ref.onDrop,
      flipId = _ref.flipId,
      moveCard = _ref.moveCard,
      dragType = _ref.dragType,
      disabledAdd = _ref.disabledAdd;

  var handleOnClick = function handleOnClick(index) {
    return function (file) {
      onClick(index, file);
    };
  };

  var handleOnEnter = function handleOnEnter(event) {
    var value = event.target.value;
    onSearch(value);
  };

  return _react.default.createElement(_reactDnd.DndProvider, {
    backend: _reactDndHtml5Backend.HTML5Backend
  }, _react.default.createElement(_reactFlipToolkit.Flipper, {
    flipKey: flipId,
    spring: "stiff"
  }, _react.default.createElement(_Grid.default, {
    container: true,
    spacing: 3
  }, files.map(function (file, index) {
    return _react.default.createElement(_Grid.default, {
      key: index,
      item: true,
      sm: 3
    }, _react.default.createElement(_reactFlipToolkit.Flipped, {
      key: "".concat(file.lastModified).concat(file.size),
      flipId: "".concat(file.lastModified).concat(file.size)
    }, _react.default.createElement("div", null, _react.default.createElement(_Drag.default, {
      dragType: dragType,
      file: file,
      key: "".concat(file.lastModified).concat(file.size),
      index: index,
      moveCard: moveCard,
      handleOnClick: handleOnClick,
      selected: index === current,
      enableDragDrop: !disabled
    }))));
  }), !disabledAdd && _react.default.createElement(_Grid.default, {
    item: true,
    sm: 3
  }, _react.default.createElement(_Add.default, {
    multiple: multiple,
    accept: accept,
    onDrop: onDrop
  })))));
};

FileFinder.propTypes = {
  files: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.instanceOf(File), _propTypes.default.shape({
    name: _propTypes.default.string,
    isLoading: _propTypes.default.bool,
    error: _propTypes.default.bool,
    url: _propTypes.default.string
  })])),
  current: _propTypes.default.number,
  onClick: _propTypes.default.func,
  search: _propTypes.default.string,
  onSearch: _propTypes.default.func,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  disabledAdd: _propTypes.default.bool,
  multiple: _propTypes.default.bool,
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  flipId: _propTypes.default.string,
  moveCard: _propTypes.default.func,
  dragType: _propTypes.default.string
};
FileFinder.defaultProps = {
  files: [],
  current: 0,
  onClick: function onClick() {},
  search: '',
  onSearch: function onSearch() {},
  placeholder: '',
  disabled: false,
  disabledAdd: false,
  multiple: false,
  accept: '',
  onDrop: function onDrop() {},
  flipId: '1',
  moveCard: function moveCard() {},
  dragType: ''
};
var _default = FileFinder;
exports.default = _default;