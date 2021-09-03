"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _SignerRolesStep = _interopRequireDefault(require("./SignerRolesStep"));

var _RemoveRedEyeRounded = _interopRequireDefault(require("@material-ui/icons/RemoveRedEyeRounded"));

var _style = _interopRequireDefault(require("./style"));

var _data = require("./data");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

/* eslint-disable react/no-array-index-key */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
var ListSignerRoles = function ListSignerRoles(_ref) {
  var options = _ref.options,
      selected = _ref.selected,
      onChangeHandler = _ref.onChangeHandler,
      onSelectSection = _ref.onSelectSection;
  var classes = (0, _style.default)();

  var getClassFromStatus = function getClassFromStatus(isSelect, complete, action) {
    if (isSelect) return classes.labelSelected;
    if (!action && complete) return classes.labelDisabled;else if (complete) return classes.labelComplete;
    return classes.label;
  };

  var handleOnSelectSection = function handleOnSelectSection(section) {
    return function () {
      onSelectSection(section);
    };
  };

  return _react.default.createElement("div", null, options.map(function (option, index) {
    var label = option.label,
        complete = option.complete,
        readOnly = option.readOnly,
        values = option.values,
        _option$action = option.action,
        action = _option$action === void 0 ? true : _option$action;
    var isSelected = selected === index;
    return _react.default.createElement(_react.Fragment, {
      key: index
    }, _react.default.createElement("div", {
      className: classes.content,
      onClick: function onClick() {
        action && onChangeHandler(index);
      }
    }, isSelected && _react.default.createElement("div", {
      className: classes.selected
    }), _react.default.createElement("p", {
      className: getClassFromStatus(isSelected, complete, action)
    }, label), readOnly && _react.default.createElement(_RemoveRedEyeRounded.default, {
      className: classes.icon
    })), isSelected && values.map(function (steps, index_step) {
      return _react.default.createElement(_SignerRolesStep.default, {
        key: index_step,
        step: steps,
        onSelectSection: handleOnSelectSection(steps)
      });
    }));
  }));
};

ListSignerRoles.propTypes = {
  options: _propTypes.default.array,
  selected: _propTypes.default.number,
  onChangeHandler: _propTypes.default.func,
  onSelectSection: _propTypes.default.func
};
ListSignerRoles.defaultProps = {
  options: _data.data,
  selected: 0,
  onChangeHandler: function onChangeHandler() {},
  onSelectSection: function onSelectSection() {}
};
var _default = ListSignerRoles;
exports.default = _default;