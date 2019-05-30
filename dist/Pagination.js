"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

require("../src/styles/Pagination.css");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

const imageDisable = 'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/arrow-left-menu-disable.svg';
const imageActive = 'https://s3.us-east-2.amazonaws.com/fintecimal/fintecimal-img/arrow-left.svg';

class Pagination extends _react.Component {
  checkNumber(sum) {
    const _this$props = this.props,
          actualPage = _this$props.actualPage,
          totalPage = _this$props.totalPage;
    const newCount = actualPage + sum;

    if (!(newCount < 1 || newCount > totalPage)) {
      this.props.onChangePagination(newCount);
    }
  }

  render() {
    const _this$props2 = this.props,
          totalPage = _this$props2.totalPage,
          actualPage = _this$props2.actualPage;
    return _react.default.createElement("div", {
      className: "fnt-pagination"
    }, _react.default.createElement("div", {
      className: "ftn-pagination-arrow-left",
      onClick: () => this.checkNumber(-1)
    }, _react.default.createElement("img", {
      alt: "",
      src: actualPage === 1 ? imageDisable : imageActive
    })), _react.default.createElement("div", {
      className: "ftn-pagination-body"
    }, _react.default.createElement("span", {
      className: "ftn-pagination-text"
    }, "P\xE1gina ", actualPage, " de ", totalPage)), _react.default.createElement("div", {
      className: "ftn-pagination-arrow-right",
      onClick: () => this.checkNumber(1)
    }, _react.default.createElement("img", {
      alt: "",
      src: actualPage >= totalPage ? imageDisable : imageActive
    })));
  }

}

;
Pagination.defaultProps = {
  totalPage: 5,
  actualPage: 1
};
var _default = Pagination;
exports.default = _default;