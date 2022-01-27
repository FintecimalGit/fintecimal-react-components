"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _DocumentButton = _interopRequireDefault(require("../nodes/DocumentButton"));

var _DocumentCrop = _interopRequireDefault(require("../DocumentCrop"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var FRONT_INDEX = 0; // Note: for reversePhoto flow

var BACK_INDEX = 1; // Note: for reversePhoto flow

var IneEditor = function IneEditor(_ref) {
  var accept = _ref.accept,
      disabled = _ref.disabled,
      isIncorrect = _ref.isIncorrect,
      onChange = _ref.onChange,
      values = _ref.values,
      title = _ref.title,
      handleOnDelete = _ref.handleOnDelete;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      indexSide = _useState4[0],
      setIndexSide = _useState4[1];

  var clasess = (0, _style.default)();
  var filterValues = (0, _react.useMemo)(function () {
    return values.filter(function (value) {
      return value !== '';
    });
  }, [values]);

  var handleOnDrop = function handleOnDrop(acceptedFiles, rejectedFiles, side) {
    if (rejectedFiles.length) {
      onChange(acceptedFiles, rejectedFiles, side);
      return;
    }

    if (acceptedFiles.length) {
      setFile(acceptedFiles[0]);
      setIndexSide(side);
    }
  };

  var onCrop = function onCrop(event, blob) {
    var name = indexSide ? 'Reverso' : 'Frontal';
    var fileCropped = new File([blob], name, {
      type: blob.type
    });
    setFile(null);
    onChange([fileCropped], [], indexSide);
  };

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_Card.default, {
    className: clasess.card
  }, _react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: title,
    action: !disabled && filterValues.length > 0 && _react.default.createElement(_IconButton.default, {
      className: clasess.iconButton,
      onClick: handleOnDelete
    }, _react.default.createElement(_Delete.default, null))
  }), _react.default.createElement("div", {
    className: clasess.container
  }, file ? _react.default.createElement(_DocumentCrop.default, {
    label: title,
    value: file,
    onCrop: onCrop,
    onBack: function onBack() {}
  }) : _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_DocumentButton.default, {
    text: "Frontal",
    side: FRONT_INDEX,
    isCompleted: Boolean(values[FRONT_INDEX]),
    accept: accept,
    disabled: disabled,
    isIncorrect: isIncorrect,
    onDrop: handleOnDrop
  }), _react.default.createElement(_DocumentButton.default, {
    text: "Reverso",
    side: BACK_INDEX,
    isCompleted: Boolean(values[BACK_INDEX]),
    accept: accept,
    disabled: disabled,
    isIncorrect: isIncorrect,
    onDrop: handleOnDrop
  })))));
};

IneEditor.propTypes = {
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  isIncorrect: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  values: _propTypes.default.array,
  title: _propTypes.default.string,
  handleOnDelete: _propTypes.default.func
};
IneEditor.defaultProps = {
  accept: '',
  onDrop: function onDrop() {},
  disabled: false,
  isIncorrect: false,
  onChange: function onChange() {},
  values: [],
  title: '',
  handleOnDelete: function handleOnDelete() {}
};
var _default = IneEditor;
exports.default = _default;