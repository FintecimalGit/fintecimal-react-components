"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _core = require("@material-ui/core");

var _Delete = _interopRequireDefault(require("@material-ui/icons/Delete"));

var _classnames = _interopRequireDefault(require("classnames"));

var _style = _interopRequireDefault(require("./style"));

var _ImageActions = _interopRequireDefault(require("../../ImageActions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var PreviewID = function PreviewID(_ref) {
  var file = _ref.file,
      onDelete = _ref.onDelete,
      label = _ref.label,
      className = _ref.className;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      url = _useState2[0],
      setUrl = _useState2[1];

  var readFile = function readFile() {
    var reader = new FileReader();

    reader.onloadend = function () {
      setUrl(reader.result);
    };

    reader.readAsDataURL(file);
  };

  var constructImage = function constructImage() {
    return {
      url: url,
      name: label
    };
  };

  var handleOnDelete = function handleOnDelete() {
    onDelete(file);
  };

  (0, _react.useEffect)(function () {
    readFile();
  }, [file]);
  return _react.default.createElement(_core.Card, {
    className: (0, _classnames.default)(classes.card, className)
  }, _react.default.createElement(_core.CardHeader, {
    className: classes.cardHeader,
    title: label,
    action: _react.default.createElement(_core.IconButton, {
      className: classes.iconButton,
      onClick: handleOnDelete
    }, _react.default.createElement(_Delete.default, null))
  }), _react.default.createElement(_ImageActions.default, {
    image: constructImage()
  }));
};

PreviewID.propTypes = {
  className: _propTypes.default.string,
  label: _propTypes.default.string,
  file: _propTypes.default.instanceOf(File),
  onDelete: _propTypes.default.func
};
PreviewID.defaultProps = {
  className: '',
  label: '',
  file: new File([''], 'No Soportado', {
    type: ''
  }),
  onDelete: function onDelete() {}
};
var _default = PreviewID;
exports.default = _default;