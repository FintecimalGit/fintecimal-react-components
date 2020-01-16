"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SignerRolesStep = _interopRequireDefault(require("./SignerRolesStep"));

var _RemoveRedEyeRounded = _interopRequireDefault(require("@material-ui/icons/RemoveRedEyeRounded"));

var _style = _interopRequireDefault(require("./style"));

var _data = _interopRequireDefault(require("./data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react/no-array-index-key */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
var ListSignerRoles = function ListSignerRoles(_ref) {
  var options = _ref.options,
      selected = _ref.selected,
      onChangeHandler = _ref.onChangeHandler;
  var classes = (0, _style.default)();

  var getClassFromStatus = function getClassFromStatus(isSelect, complete) {
    if (isSelect) return classes.labelSelected;
    if (complete) return classes.labelComplete;
    return classes.label;
  };

  return _react.default.createElement("div", null, options.map(function (option, index) {
    var label = option.label,
        complete = option.complete,
        readOnly = option.readOnly,
        values = option.values;
    var isSelected = selected === index;
    return _react.default.createElement(_react.Fragment, {
      key: index
    }, _react.default.createElement("div", {
      className: classes.content,
      onClick: function onClick() {
        onChangeHandler(index);
      }
    }, isSelected && _react.default.createElement("div", {
      className: classes.selected
    }), _react.default.createElement("p", {
      className: getClassFromStatus(isSelected, complete)
    }, label), readOnly && _react.default.createElement(_RemoveRedEyeRounded.default, {
      className: classes.icon
    })), isSelected && values.map(function (steps, index_step) {
      return _react.default.createElement(_SignerRolesStep.default, {
        key: index_step,
        step: steps
      });
    }));
  }));
};

ListSignerRoles.propTypes = {
  options: _propTypes.default.array,
  selected: _propTypes.default.number,
  onChangeHandler: _propTypes.default.func
};
ListSignerRoles.defaultProps = {
  options: _data.default,
  selected: 0,
  onChangeHandler: function onChangeHandler() {}
};
var _default = ListSignerRoles;
exports.default = _default;