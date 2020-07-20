"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _style = _interopRequireDefault(require("./style"));

var _UploadID = _interopRequireDefault(require("./UploadID"));

var _PreviewID = _interopRequireDefault(require("./PreviewID"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var IDCardUpload = function IDCardUpload(_ref) {
  var title = _ref.title,
      onDrop = _ref.onDrop,
      labelPrimary = _ref.labelPrimary,
      labelSecondary = _ref.labelSecondary;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      primaryFile = _useState2[0],
      setPrimaryFile = _useState2[1];

  var _useState3 = (0, _react.useState)(null),
      _useState4 = _slicedToArray(_useState3, 2),
      secondaryFile = _useState4[0],
      setSecondaryFile = _useState4[1];

  var handleDropPrimary = function handleDropPrimary(acceptedFiles) {
    setPrimaryFile(acceptedFiles[0]);
    onDrop(acceptedFiles);
  };

  var handleDropSecondary = function handleDropSecondary(acceptedFiles) {
    setSecondaryFile(acceptedFiles[0]);
    onDrop(acceptedFiles);
  };

  var handleDeletePrimary = function handleDeletePrimary(file) {
    setPrimaryFile(false);
    onDelete(file);
  };

  var handleDeleteSecondary = function handleDeleteSecondary(file) {
    setSecondaryFile(false);
    onDelete(file);
  };

  return _react.default.createElement("div", {
    className: classes.root
  }, _react.default.createElement("div", {
    className: classes.titleContainer
  }, _react.default.createElement("p", {
    className: classes.title
  }, title)), _react.default.createElement("div", {
    className: classes.interactionContainer
  }, primaryFile ? _react.default.createElement(_PreviewID.default, {
    file: primaryFile,
    onDelete: handleDeletePrimary,
    label: labelPrimary,
    className: classes.interaction
  }) : _react.default.createElement(_UploadID.default, {
    onDrop: handleDropPrimary,
    className: classes.interaction,
    label: labelPrimary
  }), secondaryFile ? _react.default.createElement(_PreviewID.default, {
    file: secondaryFile,
    onDelete: handleDeleteSecondary,
    label: labelSecondary,
    className: classes.interaction
  }) : _react.default.createElement(_UploadID.default, {
    onDrop: handleDropSecondary,
    className: classes.interaction,
    label: labelSecondary
  })));
};

IDCardUpload.defaultProps = {
  title: 'Identificación',
  labelPrimary: 'Frente',
  labelSecondary: 'Reverso',
  multiple: false,
  accept: '',
  onDrop: function onDrop() {},
  onDelete: function onDelete() {}
};
IDCardUpload.propTypes = {
  labelPrimary: _propTypes.default.string,
  labelSecondary: _propTypes.default.string,
  title: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  onDelete: _propTypes.default.func
};
var _default = IDCardUpload;
exports.default = _default;