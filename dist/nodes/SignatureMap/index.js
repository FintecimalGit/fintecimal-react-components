"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _moment = _interopRequireDefault(require("moment"));

var _index = require("../index");

var _geoCoding = _interopRequireDefault(require("./geoCoding"));

var _HeaderCard = _interopRequireDefault(require("../../HeaderCard"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var DEFAULT_LOCATION = {
  lat: 20.694292,
  lng: -103.375275
};

var firstUpperCase = function firstUpperCase(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

var buildFormatDate = function buildFormatDate(date) {
  if (date === '') {
    return date;
  }

  var localDate = (0, _moment.default)(new Date(date));
  localDate.locale('es');
  var formatDate = localDate.format('dddd DD/MM/YYYY');

  var _formatDate$split = formatDate.split(' '),
      _formatDate$split2 = _toArray(_formatDate$split),
      day = _formatDate$split2[0],
      rest = _formatDate$split2.slice(1);

  var _rest = _slicedToArray(rest, 1),
      info = _rest[0];

  var newDate = "".concat(firstUpperCase(day), ", ").concat(info);
  return newDate;
};

var SignatureMap = function SignatureMap(_ref) {
  var location = _ref.location,
      title = _ref.title,
      date = _ref.date;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      locationName = _useState2[0],
      setLocationName = _useState2[1];

  var getStreetName = function getStreetName(street) {
    var _street$split = street.split(','),
        _street$split2 = _slicedToArray(_street$split, 1),
        _street$split2$ = _street$split2[0],
        name = _street$split2$ === void 0 ? '' : _street$split2$;

    return name;
  };

  var fetchLocation =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var data, _ref3, _ref3$results, results, _results, _results$, address, _address$formatted_ad, formatted_address, name;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _geoCoding.default)(location);

            case 2:
              data = _context.sent;
              _ref3 = data || {}, _ref3$results = _ref3.results, results = _ref3$results === void 0 ? [] : _ref3$results;
              _results = _slicedToArray(results, 1), _results$ = _results[0], address = _results$ === void 0 ? {} : _results$; // eslint-disable-next-line camelcase

              _address$formatted_ad = address.formatted_address, formatted_address = _address$formatted_ad === void 0 ? '' : _address$formatted_ad;
              name = getStreetName(formatted_address);
              setLocationName(name);

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function fetchLocation() {
      return _ref2.apply(this, arguments);
    };
  }();

  (0, _react.useEffect)(function () {
    fetchLocation();
  }, [location]);
  var formatDate = buildFormatDate(date);
  return _react.default.createElement(_HeaderCard.default, {
    title: title
  }, _react.default.createElement("div", {
    className: classes.container
  }, _react.default.createElement(_index.Maps, {
    position: location
  }), _react.default.createElement("div", {
    className: classes.footer
  }, _react.default.createElement("div", null, _react.default.createElement("span", null, "Ubicaci\xF3n:"), _react.default.createElement("span", null, locationName)), _react.default.createElement("div", null, _react.default.createElement("span", null, "Fecha:"), _react.default.createElement("span", null, formatDate)))));
};

SignatureMap.propTypes = {
  title: _propTypes.default.string,
  location: _propTypes.default.shape({
    lat: _propTypes.default.number,
    lng: _propTypes.default.number
  }),
  date: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.instanceOf(Date)])
};
SignatureMap.defaultProps = {
  title: 'Ubicación de video',
  location: DEFAULT_LOCATION,
  date: new Date()
};
var _default = SignatureMap;
exports.default = _default;