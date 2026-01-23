"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fetchWithRetry = void 0;

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var fetchWithRetry =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(url) {
    var options,
        _options$maxRetries,
        maxRetries,
        _options$timeout,
        timeout,
        _options$sequential,
        sequential,
        lastError,
        attempt,
        _ret,
        triesMessage,
        message,
        _args3 = arguments;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            options = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : {};
            _options$maxRetries = options.maxRetries, maxRetries = _options$maxRetries === void 0 ? 3 : _options$maxRetries, _options$timeout = options.timeout, timeout = _options$timeout === void 0 ? 180000 : _options$timeout, _options$sequential = options.sequential, sequential = _options$sequential === void 0 ? false : _options$sequential;
            attempt = 0;

          case 3:
            if (!(attempt < maxRetries)) {
              _context3.next = 19;
              break;
            }

            _context3.prev = 4;
            return _context3.delegateYield(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee() {
              var controller, timeoutId, response;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      controller = new AbortController();
                      timeoutId = setTimeout(function () {
                        return controller.abort();
                      }, timeout);
                      _context.prev = 2;
                      _context.next = 5;
                      return fetch(url, {
                        signal: controller.signal
                      });

                    case 5:
                      response = _context.sent;
                      clearTimeout(timeoutId);

                      if (response.ok) {
                        _context.next = 9;
                        break;
                      }

                      throw new Error("HTTP error! status: ".concat(response.status));

                    case 9:
                      return _context.abrupt("return", {
                        v: response
                      });

                    case 12:
                      _context.prev = 12;
                      _context.t0 = _context["catch"](2);
                      clearTimeout(timeoutId);

                      if (!(_context.t0.name === 'AbortError')) {
                        _context.next = 17;
                        break;
                      }

                      throw new Error('Timeout al cargar el documento');

                    case 17:
                      if (!(_context.t0.message.includes('CONTENT_LENGTH_MISMATCH') || _context.t0.message.includes('Failed to fetch') || _context.t0.message.includes('NetworkError'))) {
                        _context.next = 19;
                        break;
                      }

                      throw new Error('Error de red al cargar el documento');

                    case 19:
                      throw _context.t0;

                    case 20:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, null, [[2, 12]]);
            })(), "t0", 6);

          case 6:
            _ret = _context3.t0;

            if (!(_typeof(_ret) === "object")) {
              _context3.next = 9;
              break;
            }

            return _context3.abrupt("return", _ret.v);

          case 9:
            _context3.next = 16;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t1 = _context3["catch"](4);
            lastError = _context3.t1;

            if (!(attempt < maxRetries - 1)) {
              _context3.next = 16;
              break;
            }

            return _context3.delegateYield(
            /*#__PURE__*/
            regeneratorRuntime.mark(function _callee2() {
              var delay;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      delay = sequential ? Math.min(2000 * Math.pow(2, attempt), 10000) : Math.min(1000 * Math.pow(2, attempt), 5000);
                      _context2.next = 3;
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, delay);
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            })(), "t2", 16);

          case 16:
            attempt++;
            _context3.next = 3;
            break;

          case 19:
            triesMessage = lastError && lastError.message ? lastError.message : 'Error desconocido';
            message = "Error al cargar el documento despu\xE9s de ".concat(maxRetries, " intentos: ").concat(triesMessage);
            throw new Error(message);

          case 22:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[4, 11]]);
  }));

  return function fetchWithRetry(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.fetchWithRetry = fetchWithRetry;