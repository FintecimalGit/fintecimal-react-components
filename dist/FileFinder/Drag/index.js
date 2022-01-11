"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactDnd = require("react-dnd");

var _FileThumbnail = _interopRequireDefault(require("../../FileThumbnail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Drag = function Drag(_ref) {
  var file = _ref.file,
      index = _ref.index,
      moveCard = _ref.moveCard,
      handleOnClick = _ref.handleOnClick,
      selected = _ref.selected,
      dragType = _ref.dragType;

  var dropMonitor = function dropMonitor(item, monitor) {
    var dragIndex = monitor.getItem().index;
    var hoverIndex = index;

    if (dragIndex === hoverIndex) {
      return;
    }

    moveCard(dragIndex, hoverIndex);
    monitor.getItem().index = hoverIndex;
  };

  var _useDrop = (0, _reactDnd.useDrop)(function () {
    return {
      accept: dragType,
      drop: dropMonitor,
      collect: function collect(monitor) {
        return {
          canDrop: !!monitor.canDrop()
        };
      }
    };
  }, [index]),
      _useDrop2 = _slicedToArray(_useDrop, 2),
      canDrop = _useDrop2[0].canDrop,
      drop = _useDrop2[1];

  var _useDrag = (0, _reactDnd.useDrag)(function () {
    return {
      type: dragType,
      item: {
        index: index
      },
      collect: function collect(monitor) {
        return {
          isDragging: !!monitor.isDragging()
        };
      }
    };
  }, [index]),
      _useDrag2 = _slicedToArray(_useDrag, 2),
      isDragging = _useDrag2[0].isDragging,
      drag = _useDrag2[1];

  return drag(drop(_react.default.createElement("div", null, _react.default.createElement(_FileThumbnail.default, {
    file: file,
    onClick: handleOnClick(index),
    selected: selected
  }))));
};

Drag.propTypes = {
  file: _propTypes.default.instanceOf(File),
  moveCard: _propTypes.default.func.isRequired,
  index: _propTypes.default.number.isRequired,
  selected: _propTypes.default.bool,
  handleOnClick: _propTypes.default.func,
  dragType: _propTypes.default.string
};
Drag.defaultProps = {
  file: new File([''], '', {
    type: ''
  }),
  selected: false,
  handleOnClick: function handleOnClick() {},
  dragType: 'file'
};
var _default = Drag;
exports.default = _default;