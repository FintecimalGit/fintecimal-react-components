"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _AppBar = _interopRequireDefault(require("@material-ui/core/AppBar"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _CloudDownloadOutlined = _interopRequireDefault(require("@material-ui/icons/CloudDownloadOutlined"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var NavigationBar = function NavigationBar(_ref) {
  var title = _ref.title,
      length = _ref.length,
      onDownloadFile = _ref.onDownloadFile,
      numPages = _ref.numPages,
      onEnterActualPage = _ref.onEnterActualPage,
      handleScale = _ref.handleScale,
      actualPage = _ref.actualPage,
      handleActualPage = _ref.handleActualPage;

  var _useState = (0, _react.useState)(100),
      _useState2 = _slicedToArray(_useState, 2),
      scale = _useState2[0],
      setScale = _useState2[1];

  var classes = (0, _style.default)();

  var onChangeScale = function onChangeScale(evt) {
    var newValue = +evt.target.value.split('.')[0];
    if (newValue !== 0 && !newValue) return;
    setScale(newValue);
  };

  var onEnterScale = function onEnterScale(evt, value) {
    if (evt.key !== 'Enter') return;

    if (value < 50) {
      setScale(50);
      return;
    }

    if (value > 200) {
      setScale(200);
      return;
    }

    handleScale(evt, value);
  };

  var getTitleTruncate = function getTitleTruncate(_title) {
    return "".concat(_title.substring(0, length), "...");
  };

  return _react.default.createElement(_AppBar.default, {
    position: "static",
    className: classes.container
  }, _react.default.createElement(_Toolbar.default, null, _react.default.createElement(_Typography.default, {
    variant: "h6",
    className: classes.title
  }, getTitleTruncate(title)), _react.default.createElement("div", {
    className: classes.pageIndicator
  }, _react.default.createElement("input", {
    type: "text",
    value: actualPage,
    onKeyPress: function onKeyPress(evt) {
      return onEnterActualPage(evt);
    },
    onChange: handleActualPage,
    className: classes.inputPage
  }), _react.default.createElement("span", null, " / ", numPages)), _react.default.createElement("div", {
    className: classes.pageIndicator
  }, _react.default.createElement("input", {
    type: "text",
    value: scale,
    onKeyPress: function onKeyPress(evt) {
      return onEnterScale(evt, scale);
    },
    onChange: onChangeScale,
    className: classes.inputPage
  }), _react.default.createElement("span", null, "%")), _react.default.createElement(_IconButton.default, {
    edge: "start",
    onClick: function onClick() {
      return onDownloadFile(url);
    },
    className: classes.menuButton,
    color: "inherit",
    "aria-label": "menu"
  }, _react.default.createElement(_CloudDownloadOutlined.default, null))));
};

NavigationBar.propTypes = {
  title: _propTypes.default.string.isRequired,
  length: _propTypes.default.number,
  onDownloadFile: _propTypes.default.func.isRequired,
  handleScale: _propTypes.default.func.isRequired,
  numPages: _propTypes.default.number,
  onEnterActualPage: _propTypes.default.func.isRequired,
  actualPage: _propTypes.default.number.isRequired,
  handleActualPage: _propTypes.default.func.isRequired
};
NavigationBar.defaultProps = {
  length: 20,
  numPages: 0
};
var _default = NavigationBar;
exports.default = _default;