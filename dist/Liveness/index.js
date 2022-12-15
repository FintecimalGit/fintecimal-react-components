"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _LivenessCarousel = _interopRequireDefault(require("./LivenessCarousel"));

var _style = _interopRequireDefault(require("./style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _LivenessVideo = _interopRequireDefault(require("./LivenessVideo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STATUS = {
  0: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Reject_validation.png",
    label: "No se pudo hacer la validacion automatica"
  },
  1: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Accept_validation.png",
    label: "Documento Validado"
  },
  2: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Reject_validation.png",
    label: "Documento No Valido"
  }
};

var Liveness = function Liveness(_ref) {
  var signers = _ref.signers,
      ines = _ref.ines,
      video = _ref.video,
      verify = _ref.verify,
      title = _ref.title;
  var clasess = (0, _style.default)();
  return _react.default.createElement(_Card.default, {
    className: clasess.card
  }, _react.default.createElement(_CardHeader.default, {
    className: clasess.cardHeader,
    title: title,
    action: _react.default.createElement(_react.default.Fragment, null, verify.status !== -1 ? _react.default.createElement(_Tooltip.default, {
      title: STATUS[verify.status].label,
      placement: "top",
      arrow: true
    }, _react.default.createElement("span", {
      className: clasess.tooltipValidation
    }, _react.default.createElement("img", {
      className: clasess.img,
      src: STATUS[verify.status].image
    }))) : "")
  }), _react.default.createElement("div", {
    className: clasess.containerCarousel
  }, _react.default.createElement(_LivenessCarousel.default, {
    signers: signers
  })), _react.default.createElement("div", {
    className: clasess.containerInes
  }, _react.default.createElement("div", {
    className: clasess.grid
  }, _react.default.createElement("div", null, _react.default.createElement(_LivenessVideo.default, {
    video: video
  })), _react.default.createElement("div", null, _react.default.createElement("div", {
    className: clasess.containerIneImg
  }, _react.default.createElement("img", {
    className: clasess.ineImg,
    src: ines.front
  })), _react.default.createElement("div", {
    className: clasess.containerIneImg
  }, _react.default.createElement("img", {
    className: clasess.ineImg,
    src: ines.reverse
  }))))));
};

Liveness.propTypes = {
  verify: _propTypes.default.object,
  signers: _propTypes.default.arrayOf(_propTypes.default.shape({
    _id: _propTypes.default.string,
    label: _propTypes.default.string,
    status: _propTypes.default.string
  })),
  ines: _propTypes.default.shape({
    front: _propTypes.default.string,
    reverse: _propTypes.default.string
  }),
  videoUrl: _propTypes.default.string
};
Liveness.defaultProps = {
  signers: [],
  verify: {
    status: -1
  },
  ines: {
    front: '',
    reverse: ''
  },
  videoUrl: ''
};
var _default = Liveness;
exports.default = _default;