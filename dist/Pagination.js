"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("./styles/Pagination.css");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var imageDisable = 'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/arrow-left-menu-disable.svg';
var imageActive = 'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/arrow-left.svg';

var Pagination =
/*#__PURE__*/
function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, _getPrototypeOf(Pagination).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: "checkNumber",
    value: function checkNumber(sum) {
      var _this$props = this.props,
          actualPage = _this$props.actualPage,
          totalPage = _this$props.totalPage;
      var newCount = actualPage + sum;

      if (!(newCount < 1 || newCount > totalPage)) {
        this.props.onChangePagination(newCount);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props2 = this.props,
          totalPage = _this$props2.totalPage,
          actualPage = _this$props2.actualPage;
      return _react.default.createElement("div", {
        className: "fnt-pagination"
      }, _react.default.createElement("div", {
        className: "ftn-pagination-arrow-left",
        onClick: function onClick() {
          return _this.checkNumber(-1);
        }
      }, _react.default.createElement("img", {
        alt: "",
        src: actualPage === 1 ? imageDisable : imageActive
      })), _react.default.createElement("div", {
        className: "ftn-pagination-body"
      }, _react.default.createElement("span", {
        className: "ftn-pagination-text"
      }, "P\xE1gina ", actualPage, " de ", totalPage)), _react.default.createElement("div", {
        className: "ftn-pagination-arrow-right",
        onClick: function onClick() {
          return _this.checkNumber(1);
        }
      }, _react.default.createElement("img", {
        alt: "",
        src: actualPage >= totalPage ? imageDisable : imageActive
      })));
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.defaultProps = {
  totalPage: 5,
  actualPage: 1
};
var _default = Pagination;
exports.default = _default;