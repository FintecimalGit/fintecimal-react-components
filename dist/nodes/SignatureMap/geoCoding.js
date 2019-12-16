"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var URL = ' https://maps.googleapis.com/maps/api';
var MAP_KEY = process.env.MAP_KEY;

var getGeocoding = function getGeocoding(_ref) {
  var lat, lng, _ref2, data;

  return regeneratorRuntime.async(function getGeocoding$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          lat = _ref.lat, lng = _ref.lng;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(_axios.default.get("".concat(URL, "/geocode/json?latlng=").concat(lat, ",").concat(lng, "&key=").concat(MAP_KEY)));

        case 4:
          _ref2 = _context.sent;
          data = _ref2.data;
          return _context.abrupt("return", _objectSpread({}, data));

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](1);
          return _context.abrupt("return", null);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

var _default = getGeocoding;
exports.default = _default;