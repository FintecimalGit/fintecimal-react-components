"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _entry = require("react-pdf/dist/esm/entry.webpack");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _NavigationBar = _interopRequireDefault(require("./NavigationBar"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var IframeFallback = function IframeFallback(_ref) {
  var url = _ref.url,
      title = _ref.title,
      minHeight = _ref.minHeight;
  return _react.default.createElement("iframe", {
    title: title,
    src: url,
    style: {
      width: '100%',
      height: '100%',
      minHeight: minHeight || '600px',
      border: 'none',
      backgroundColor: '#202124',
      display: 'block'
    }
  });
};

var PdfViewer = function PdfViewer(_ref2) {
  var url = _ref2.url,
      onDownloadFile = _ref2.onDownloadFile,
      marginTop = _ref2.marginTop;
  var pageDataRef = (0, _react.useRef)({});
  var documentRef = (0, _react.useRef)(null);
  var stopScrollRef = (0, _react.useRef)(false);
  var scaleRef = (0, _react.useRef)(1);

  var _useState = (0, _react.useState)(1),
      _useState2 = _slicedToArray(_useState, 2),
      scale = _useState2[0],
      setScale = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      numPages = _useState4[0],
      setNumPages = _useState4[1];

  var _useState5 = (0, _react.useState)(1),
      _useState6 = _slicedToArray(_useState5, 2),
      actualPage = _useState6[0],
      setActualPage = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      loadFailed = _useState8[0],
      setLoadFailed = _useState8[1];

  var classes = (0, _style.default)();
  var memoizedUrl = (0, _react.useMemo)(function () {
    return {
      url: url
    };
  }, [url]);

  var getDocumentName = function getDocumentName(_url) {
    return _url.split('/').pop();
  };

  var iframeFallback = (0, _react.useMemo)(function () {
    return _react.default.createElement(IframeFallback, {
      url: url,
      title: getDocumentName(url),
      minHeight: "600px"
    });
  }, [url]);

  var onDocumentLoadSuccess = function onDocumentLoadSuccess(_ref3) {
    var pages = _ref3.numPages;

    if (!pages || pages === 0) {
      setLoadFailed(true);
      return;
    }

    setLoadFailed(false);
    setNumPages(pages);
  };

  var onDocumentLoadError = function onDocumentLoadError() {
    setLoadFailed(true);
  };

  var onPageLoadSuccess = function onPageLoadSuccess(_ref4) {
    var _pageIndex = _ref4._pageIndex,
        _pageInfo = _ref4._pageInfo;
    var index = _pageIndex;
    var view = _pageInfo.view;
    pageDataRef.current = _objectSpread({}, pageDataRef.current, _defineProperty({}, index, {
      width: view[2],
      height: view[3]
    }));
  };

  var handleActualPage = function handleActualPage(evt) {
    var newValue = +evt.target.value.split('.')[0];
    if (newValue !== 0 && !newValue || newValue > numPages) return;
    setActualPage(newValue);
  };

  var onEnterActualPage = function onEnterActualPage(evt) {
    if (evt.key === 'Enter') {
      var offsetTop = _toConsumableArray(Array(+actualPage).keys()).reduce(function (previousValue, currentValue) {
        if (!currentValue) return 0;
        return pageDataRef.current[currentValue].height * scale + previousValue + marginTop;
      }, 0);

      stopScrollRef.current = true;
      documentRef.current.scrollTop = offsetTop;
      evt.preventDefault();
    }
  };

  var handleScale = function handleScale(evt, value) {
    var newScale = Math.round(value * 100) / 10000;
    scaleRef.current = newScale;
    setScale(newScale);
  };

  var scrollDocument = function scrollDocument(evt) {
    if (stopScrollRef.current) {
      stopScrollRef.current = false;
      return;
    }

    var page1 = pageDataRef.current[1];
    if (!page1 || !page1.height) return;
    var value = +evt.target.scrollTop;
    var actual = Math.round(value / (page1.height * scaleRef.current + marginTop)) + 1;
    setActualPage(actual);
  };

  (0, _react.useEffect)(function () {
    if (documentRef.current) documentRef.current.addEventListener('scroll', scrollDocument);
    return function () {
      if (documentRef.current) documentRef.current.removeEventListener('scroll', scrollDocument);
    };
  }, [numPages]);

  if (loadFailed) {
    return iframeFallback;
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_NavigationBar.default, {
    actualPage: actualPage,
    handleActualPage: handleActualPage,
    handleScale: handleScale,
    onEnterActualPage: onEnterActualPage,
    numPages: numPages,
    onDownloadFile: onDownloadFile,
    title: getDocumentName(url)
  }), _react.default.createElement(_entry.Document, {
    file: memoizedUrl,
    onLoadSuccess: onDocumentLoadSuccess,
    onLoadError: onDocumentLoadError,
    error: iframeFallback,
    className: classes.container,
    inputRef: documentRef
  }, Array.from(new Array(numPages), function (el, index) {
    return _react.default.createElement(_entry.Page, {
      scale: scale,
      onLoadSuccess: onPageLoadSuccess,
      key: "page_".concat(index + 1),
      pageNumber: index + 1,
      className: classes.page
    });
  })));
};

PdfViewer.propTypes = {
  onDownloadFile: _propTypes.default.func.isRequired,
  url: _propTypes.default.string.isRequired,
  marginTop: _propTypes.default.number
};
PdfViewer.defaultProps = {
  marginTop: 16
};
var _default = PdfViewer;
exports.default = _default;
