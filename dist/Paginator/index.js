"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _FirstPage = _interopRequireDefault(require("@material-ui/icons/FirstPage"));

var _NavigateBefore = _interopRequireDefault(require("@material-ui/icons/NavigateBefore"));

var _NavigateNext = _interopRequireDefault(require("@material-ui/icons/NavigateNext"));

var _LastPage = _interopRequireDefault(require("@material-ui/icons/LastPage"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Paginator = function Paginator(_ref) {
  var currentPage = _ref.currentPage,
      totalPages = _ref.totalPages,
      step = _ref.step,
      onPageChange = _ref.onPageChange;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(currentPage),
      _useState2 = _slicedToArray(_useState, 2),
      page = _useState2[0],
      setPage = _useState2[1];

  var pages = (0, _react.useMemo)(function () {
    var mod = page % step;
    var initial = page - mod;
    var final = initial + step;
    var acumulator = 0;
    var values = [];

    while (acumulator < totalPages) {
      var nextAcumulator = acumulator + step;

      if (initial === acumulator && final === nextAcumulator) {
        Array(step - 1).fill(null).forEach(function (value, index) {
          var element = initial + index + 1;
          if (element <= totalPages) values.push(initial + index + 1);
        });
      }

      if (values.length === 0) values.push(1);
      if (nextAcumulator <= totalPages) values.push(nextAcumulator);
      acumulator = nextAcumulator;
    }

    return values;
  }, [page, totalPages]);

  var onFirstPage = function onFirstPage() {
    var firstPage = 1;
    setPage(firstPage);
    onPageChange(firstPage);
  };

  var onBeforePage = function onBeforePage() {
    var beforePage = page > 1 ? page - 1 : 1;
    setPage(beforePage);
    onPageChange(beforePage);
  };

  var onSelectPage = function onSelectPage(selectedPage) {
    return function () {
      setPage(selectedPage);
      onPageChange(selectedPage);
    };
  };

  var onNextPage = function onNextPage() {
    var nextPage = page < totalPages ? page + 1 : totalPages;
    setPage(nextPage);
    onPageChange(nextPage);
  };

  var onLastPage = function onLastPage() {
    var lastPage = totalPages;
    setPage(lastPage);
    onPageChange(lastPage);
  };

  (0, _react.useEffect)(function () {
    setPage(currentPage);
  }, [currentPage]);
  return _react.default.createElement("div", {
    className: classes.paginator
  }, _react.default.createElement(_IconButton.default, {
    className: classes.iconButton,
    onClick: onFirstPage
  }, _react.default.createElement(_FirstPage.default, null)), _react.default.createElement(_IconButton.default, {
    className: classes.iconButton,
    onClick: onBeforePage
  }, _react.default.createElement(_NavigateBefore.default, null)), pages.map(function (_page) {
    return _react.default.createElement(_IconButton.default, {
      key: _page,
      className: (0, _classnames2.default)(classes.iconButton, _defineProperty({}, classes.iconButtonActive, page === _page)),
      onClick: onSelectPage(_page)
    }, _react.default.createElement("span", null, _page));
  }), _react.default.createElement(_IconButton.default, {
    className: classes.iconButton,
    onClick: onNextPage
  }, _react.default.createElement(_NavigateNext.default, null)), _react.default.createElement(_IconButton.default, {
    className: classes.iconButton,
    onClick: onLastPage
  }, _react.default.createElement(_LastPage.default, null)));
};

Paginator.propTypes = {
  currentPage: _propTypes.default.number,
  totalPages: _propTypes.default.number,
  step: _propTypes.default.number,
  onPageChange: _propTypes.default.func
};
Paginator.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  step: 10,
  onPageChange: function onPageChange() {}
};
var _default = Paginator;
exports.default = _default;