"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _LivenessCarousel = _interopRequireDefault(require("./LivenessCarousel"));

var _style = _interopRequireDefault(require("./style"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Card = _interopRequireDefault(require("@material-ui/core/Card"));

var _CardHeader = _interopRequireDefault(require("@material-ui/core/CardHeader"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _LivenessVideo = _interopRequireDefault(require("./LivenessVideo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
  var participants = _ref.participants,
      verify = _ref.verify,
      title = _ref.title;
  var clasess = (0, _style.default)();

  var _useState = (0, _react.useState)(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentIndex = _useState2[0],
      setCurrentIndex = _useState2[1];

  var participantsCarousel = (0, _react.useMemo)(function () {
    return participants.map(function (_ref2) {
      var _id = _ref2._id,
          label = _ref2.label,
          status = _ref2.status,
          score = _ref2.score,
          completed = _ref2.completed;
      return {
        _id: _id,
        label: label,
        status: status,
        score: score,
        completed: completed
      };
    });
  }, [participants]);
  var currentParticipant = (0, _react.useMemo)(function () {
    return participants[currentIndex];
  }, [currentIndex, participants]);
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
    onClick: function onClick(index) {
      return setCurrentIndex(index);
    },
    signers: participantsCarousel
  })), _react.default.createElement("div", {
    className: clasess.containerInes
  }, _react.default.createElement("div", {
    className: clasess.grid
  }, _react.default.createElement("div", null, _react.default.createElement(_LivenessVideo.default, {
    video: currentParticipant.video
  })), _react.default.createElement("div", null, _react.default.createElement("div", {
    className: clasess.containerIneImg
  }, _react.default.createElement("img", {
    className: clasess.ineImg,
    src: currentParticipant.ines[0]
  })), _react.default.createElement("div", {
    className: clasess.containerIneImg
  }, _react.default.createElement("img", {
    className: clasess.ineImg,
    src: currentParticipant.ines[1]
  }))))));
};

Liveness.propTypes = {
  verify: _propTypes.default.object,
  title: _propTypes.default.string,
  participants: _propTypes.default.arrayOf(_propTypes.default.shape({
    _id: _propTypes.default.string,
    label: _propTypes.default.string,
    status: _propTypes.default.string,
    score: _propTypes.default.number,
    ines: _propTypes.default.shape({
      front: _propTypes.default.string,
      reverse: _propTypes.default.string
    }),
    videoUrl: _propTypes.default.string
  }))
};
Liveness.defaultProps = {
  participants: [],
  title: '',
  verify: {
    status: -1
  }
};
var _default = Liveness;
exports.default = _default;