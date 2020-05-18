"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GroupFields = _interopRequireDefault(require("./component/GroupFields"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DynamicFields = function DynamicFields(_ref) {
  var header = _ref.header,
      fields = _ref.fields,
      signers = _ref.signers,
      handleValue = _ref.handleValue;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      mFields = _useState2[0],
      setMFields = _useState2[1];

  var fillArray = function fillArray(data, length) {
    var res = [];

    for (var i = 0; i < length; i++) {
      res.push(data);
    }

    return res;
  };

  var generateData = function generateData() {
    if (fields.length > 0) return fields;
    var totalSigners = signers.length;
    return fillArray(header, totalSigners);
  };

  (0, _react.useEffect)(function () {
    if (header.length > 0) {
      var data = generateData();
      setMFields(data);
    }
  }, [header, fields]);

  var replaceValue = function replaceValue(fields, indexGroup) {
    var newFields = mFields;
    newFields[indexGroup] = _toConsumableArray(fields);
    console.log(newFields);
    return newFields;
  };

  var handleOnChange = function handleOnChange(fields, indexGroup) {
    var newFields = replaceValue(fields, indexGroup);
    handleValue(newFields);
  };

  var available = mFields.length > 0;
  return _react.default.createElement("div", {
    className: classes.content
  }, available && mFields.map(function (groupField, indexGroup) {
    var fullName = signers[indexGroup].fullName;
    return _react.default.createElement(_GroupFields.default, {
      key: indexGroup,
      index: indexGroup,
      fields: groupField,
      classes: classes,
      signerName: fullName,
      handleOnChange: handleOnChange
    });
  }));
};

DynamicFields.propTypes = {
  header: _propTypes.default.array.isRequired,
  fields: _propTypes.default.array,
  signers: _propTypes.default.array.isRequired,
  handleValue: _propTypes.default.func.isRequired
};
DynamicFields.defaultProps = {
  fields: []
};
var _default = DynamicFields;
exports.default = _default;