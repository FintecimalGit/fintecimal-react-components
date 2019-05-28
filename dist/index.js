"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Input = _interopRequireDefault(require("./Input"));

var _Button = _interopRequireDefault(require("./Button"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _Tables = _interopRequireDefault(require("./Tables"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  Input: _Input.default,
  Button: _Button.default,
  Pagination: _Pagination.default,
  Tables: _Tables.default
};
exports.default = _default;