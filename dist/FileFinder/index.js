"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Grid = _interopRequireDefault(require("@material-ui/core/Grid"));

var _SearchBar = _interopRequireDefault(require("../nodes/SearchBar"));

var _FileThumbnail = _interopRequireDefault(require("../FileThumbnail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileFinder = function FileFinder(_ref) {
  var files = _ref.files,
      current = _ref.current,
      onClick = _ref.onClick,
      search = _ref.search,
      onSearch = _ref.onSearch,
      placeholder = _ref.placeholder;

  var handleOnClick = function handleOnClick(index) {
    return function (file) {
      onClick(index, file);
    };
  };

  var handleOnEnter = function handleOnEnter(event) {
    var value = event.target.value;
    onSearch(value);
  };

  return _react.default.createElement(_Grid.default, {
    container: true,
    spacing: 3
  }, _react.default.createElement(_Grid.default, {
    item: true,
    sm: 12
  }, _react.default.createElement(_SearchBar.default, {
    placeholder: placeholder,
    onEnter: handleOnEnter,
    value: search
  })), files.map(function (file, index) {
    return _react.default.createElement(_Grid.default, {
      key: index,
      item: true,
      sm: 3
    }, _react.default.createElement(_FileThumbnail.default, {
      file: file,
      onClick: handleOnClick(index),
      selected: index === current
    }));
  }));
};

FileFinder.propTypes = {
  files: _propTypes.default.arrayOf(_propTypes.default.instanceOf(File)),
  current: _propTypes.default.number,
  onClick: _propTypes.default.func,
  search: _propTypes.default.string,
  onSearch: _propTypes.default.func,
  placeholder: _propTypes.default.string
};
FileFinder.defaultProps = {
  files: [],
  current: 0,
  onClick: function onClick() {},
  search: '',
  onSearch: function onSearch() {},
  placeholder: ''
};
var _default = FileFinder;
exports.default = _default;