"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var useClickOutside = function useClickOutside(ref, callback) {
  var onClick = function onClick(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      callback();
    }
  };

  (0, _react.useEffect)(function () {
    document.addEventListener('click', onClick);
    return function () {
      document.removeEventListener('click', onClick);
    };
  });
};

var _default = useClickOutside;
exports.default = _default;