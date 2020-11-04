"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAddress = void 0;

var _axios = _interopRequireDefault(require("axios"));

var _keys = require("./keys");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getAddress =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(_ref) {
    var value, _getServer, baseURL, url, _ref3, data;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            value = _ref.value;
            _context.prev = 1;

            if (value) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", []);

          case 4:
            _getServer = (0, _keys.getServer)(), baseURL = _getServer.baseURL;
            url = "".concat(baseURL, "/api/googleapis/places?name=").concat(value, "&showDetails=true");
            _context.next = 8;
            return _axios.default.get(url);

          case 8:
            _ref3 = _context.sent;
            data = _ref3.data;
            return _context.abrupt("return", data);

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](1);
            return _context.abrupt("return", null);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 13]]);
  }));

  return function getAddress(_x) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getAddress = getAddress;