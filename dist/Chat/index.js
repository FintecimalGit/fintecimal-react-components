"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Send = _interopRequireDefault(require("@material-ui/icons/Send"));

var _style = _interopRequireDefault(require("./style"));

var _useLoading2 = _interopRequireDefault(require("./hooks/useLoading"));

var _messages = require("./constants/messages");

var _Message = require("./Components/Message");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var INITIAL_VALUES = [{
  message: '¿Me puedes decir si la fecha de emisión de la constacia ya tiene mas de un mes?',
  type: _messages.API_MESSAGE
}, {
  message: 'Sí, la fecha de emisión de la constancia de situación fiscal es el 25 de agosto de 2021. Al día de hoy, 17 de abril de 2023, han pasado aproximadamente 1 año y 7 meses desde la fecha de emisión, lo que es considerablemente más de un mes.',
  type: _messages.USER_MESSAGE
}, {
  message: '¿Me puedes decir si la fecha de emisión de la constacia ya tiene mas de un mes?',
  type: _messages.API_MESSAGE
}, {
  message: 'Sí, la fecha de emisión de la constancia de situación fiscal es el 25 de agosto de 2021. Al día de hoy, 17 de abril de 2023, han pasado aproximadamente 1 año y 7 meses desde la fecha de emisión, lo que es considerablemente más de un mes.',
  type: _messages.USER_MESSAGE
}, {
  message: '¿Me puedes decir si la fecha de emisión de la constacia ya tiene mas de un mes?',
  type: _messages.API_MESSAGE
}, {
  message: 'Sí, la fecha de emisión de la constancia de situación fiscal es el 25 de agosto de 2021. Al día de hoy, 17 de abril de 2023, han pasado aproximadamente 1 año y 7 meses desde la fecha de emisión, lo que es considerablemente más de un mes.',
  type: _messages.USER_MESSAGE
}, {
  message: '¿Me puedes decir si la fecha de emisión de la constacia ya tiene mas de un mes?',
  type: _messages.API_MESSAGE
}, {
  message: 'Sí, la fecha de emisión de la constancia de situación fiscal es el 25 de agosto de 2021. Al día de hoy, 17 de abril de 2023, han pasado aproximadamente 1 año y 7 meses desde la fecha de emisión, lo que es considerablemente más de un mes.',
  type: _messages.USER_MESSAGE
}];

var Chat = function Chat(_ref) {
  var textLimit = _ref.textLimit,
      placeHolder = _ref.placeHolder,
      buttonText = _ref.buttonText;

  var _useState = (0, _react.useState)(INITIAL_VALUES),
      _useState2 = _slicedToArray(_useState, 2),
      messages = _useState2[0],
      setMessages = _useState2[1];

  var _useState3 = (0, _react.useState)(''),
      _useState4 = _slicedToArray(_useState3, 2),
      query = _useState4[0],
      setQuery = _useState4[1];

  var classes = (0, _style.default)();

  var _useLoading = (0, _useLoading2.default)(),
      startLoading = _useLoading.startLoading,
      endLoading = _useLoading.endLoading,
      isLoading = _useLoading.isLoading;

  var wordsCount = (0, _react.useMemo)(function () {
    var cleanText = query.trim();
    if (cleanText === '') return 0;
    var words = cleanText.split(" ");
    return words.length;
  }, [query]);
  var formattedTextLimit = (0, _react.useMemo)(function () {
    var textLimitStr = textLimit.toString().split("").reverse().join("");
    var groups = textLimitStr.match(/.{1,3}/g);
    var result = groups.join(",").split("").reverse().join("");
    return result;
  }, [textLimit]);
  var textWordCount = (0, _react.useMemo)(function () {
    return "".concat(wordsCount, "/").concat(formattedTextLimit);
  }, [formattedTextLimit, wordsCount]);

  var handleChange = function handleChange(event) {
    setQuery(event.target.value);
  };

  var handleSubmit =
  /*#__PURE__*/
  function () {
    var _ref2 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(event) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              try {
                event.preventDefault();
                startLoading();
                endLoading();
              } catch (e) {
                endLoading();
              }

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleSubmit(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  return _react.default.createElement("div", {
    className: classes.messagesContainer
  }, _react.default.createElement("div", {
    className: classes.innerMessageContainer
  }, _react.default.createElement("div", {
    className: classes.chatMessages
  }, messages.map(function (_ref3) {
    var message = _ref3.message,
        type = _ref3.type;
    return _react.default.createElement(_Message.Message, {
      message: message,
      type: type
    });
  }))), _react.default.createElement("div", {
    className: classes.formContainer
  }, _react.default.createElement("form", {
    onSubmit: handleSubmit,
    className: classes.form
  }, _react.default.createElement("div", {
    className: classes.textContainer
  }, _react.default.createElement(_core.TextField, {
    id: "outlined-multiline-static",
    label: placeHolder,
    multiline: true,
    rows: 2,
    variant: "outlined",
    value: query,
    onChange: handleChange,
    className: classes.textField,
    classes: {
      root: classes.textFieldRoot
    }
  })), _react.default.createElement("div", {
    className: classes.buttonContainer
  }, _react.default.createElement("span", {
    className: classes.wordsCount
  }, textWordCount), _react.default.createElement(_core.Button, {
    variant: "contained",
    className: classes.button,
    endIcon: _react.default.createElement(_Send.default, null)
  }, buttonText)))));
};

Chat.propTypes = {
  textLimit: _propTypes.default.number,
  placeHolder: _propTypes.default.string,
  buttonText: _propTypes.default.string
};
Chat.defaultProps = {
  textLimit: 10,
  placeHolder: 'Ask ChatGPT...',
  buttonText: 'Generar'
};
var _default = Chat;
exports.default = _default;