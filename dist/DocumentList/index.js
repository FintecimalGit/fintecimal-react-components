"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _Done = _interopRequireDefault(require("@material-ui/icons/Done"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _HeaderCollapse = _interopRequireDefault(require("../HeaderCollapse"));

var _style = _interopRequireDefault(require("./style"));

var _status = require("./status");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentList = function DocumentList(_ref) {
  var title = _ref.title,
      documents = _ref.documents,
      onClickDocument = _ref.onClickDocument,
      onDownload = _ref.onDownload,
      open = _ref.open,
      iconTooltip = _ref.iconTooltip,
      onDownloadSecondary = _ref.onDownloadSecondary,
      iconTooltipSec = _ref.iconTooltipSec;
  var clasess = (0, _style.default)();
  /**
   *
   * @param {Object} document
   */

  var handleOnClickDocument = function handleOnClickDocument(document, index) {
    return function () {
      onClickDocument(document, index);
    };
  };
  /**
   *
   * @param {String} status
   * @returns {String}
   */


  var getDotColorClass = function getDotColorClass(status) {
    switch (status) {
      case _status.REVISION:
        return clasess.dotReview;

      case _status.PENDING:
        return clasess.dotPending;

      case _status.ACCEPTED:
        return clasess.dotSuccess;

      case _status.REJECTED:
        return clasess.dotDanger;

      default:
        return clasess.dotOnHold;
    }
  };
  /**
   *
   * @param {String} status
   * @returns {String|DOMElement}
   */


  var getLabelStatus = function getLabelStatus(status) {
    switch (status) {
      case _status.ACCEPTED:
        return /*#__PURE__*/_react.default.createElement(_Done.default, {
          className: clasess.successIcon
        });

      case _status.REJECTED:
        return /*#__PURE__*/_react.default.createElement(_Clear.default, {
          className: clasess.dangerIcon
        });

      case _status.REVISION:
      case _status.PENDING:
      default:
        return /*#__PURE__*/_react.default.createElement("span", {
          className: clasess.statusName
        }, status, ' ');
    }
  };
  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */


  var isOnHold = function isOnHold(status) {
    return status === _status.PENDING || status === _status.REVISION;
  };
  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */


  var isNotPending = function isNotPending(status) {
    return status !== _status.PENDING;
  };

  var createMessageContent = function createMessageContent(status, progress) {
    var qty = progress.qty,
        total = progress.total;
    var next_status = _status.SEQUENCE_STATUS[status];

    switch (status) {
      case _status.ACCEPTED:
        return '';

      case _status.REJECTED:
        return "Es necesario corregir ".concat(total - qty, " firma(s) para regresar el estatus ").concat(next_status);

      case _status.REVISION:
        return "Faltan ".concat(total - qty, " firmante(s) para el siguiente estatus ").concat(next_status);

      case _status.PENDING:
        return "Faltan ".concat(total - qty, " firmante(s) para el siguiente estatus ").concat(next_status);

      default:
        return '';
    }
  };

  var getTitleProgress = function getTitleProgress(document) {
    var status = document.status,
        _document$progress = document.progress,
        progress = _document$progress === void 0 ? {} : _document$progress;
    if (!status || !progress) return;
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_Typography.default, {
      variant: "h6",
      color: "inherit"
    }, " ", status, " "), /*#__PURE__*/_react.default.createElement("span", null, createMessageContent(status, progress)));
  };

  return /*#__PURE__*/_react.default.createElement(_HeaderCollapse.default, {
    open: open,
    title: title,
    onDownload: onDownload,
    iconTooltip: iconTooltip,
    onDownloadSecondary: onDownloadSecondary,
    iconTooltipSec: iconTooltipSec
  }, /*#__PURE__*/_react.default.createElement(_List.default, {
    className: clasess.noPadding
  }, documents.map(function (document, index) {
    return /*#__PURE__*/_react.default.createElement(_Tooltip.default, {
      key: document.name,
      title: getTitleProgress(document)
    }, /*#__PURE__*/_react.default.createElement(_ListItem.default, {
      button: isNotPending(document.status),
      onClick: isNotPending(document.status) ? handleOnClickDocument(document, index) : function () {},
      className: clasess.listItem
    }, /*#__PURE__*/_react.default.createElement(_ListItemText.default, null, /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _classnames.default)(clasess.dot, getDotColorClass(document.status))
    }), /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _classnames.default)(clasess.name, {
        [clasess.nameOnHole]: isOnHold(document.status)
      })
    }, document.name)), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("span", null, getLabelStatus(document.status)))));
  })));
};

DocumentList.propTypes = {
  title: _propTypes.default.string,
  documents: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    status: _propTypes.default.string.isRequired
  })).isRequired,
  onClickDocument: _propTypes.default.func,
  onDownload: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([null]), _propTypes.default.func]),
  open: _propTypes.default.bool,
  iconTooltip: _propTypes.default.string,
  onDownloadSecondary: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.oneOf([null]), _propTypes.default.func]),
  iconTooltipSec: _propTypes.default.string
};
DocumentList.defaultProps = {
  title: '',
  documents: [],
  onClickDocument: function onClickDocument() {},
  onDownload: function onDownload() {},
  open: false,
  iconTooltip: '',
  onDownloadSecondary: null,
  iconTooltipSec: ''
};
var _default = DocumentList;
exports.default = _default;