"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames2 = _interopRequireDefault(require("classnames"));

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Done = _interopRequireDefault(require("@material-ui/icons/Done"));

var _Clear = _interopRequireDefault(require("@material-ui/icons/Clear"));

var _HeaderCollapse = _interopRequireDefault(require("../HeaderCollapse"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DocumentList = function DocumentList(_ref) {
  var title = _ref.title,
      documents = _ref.documents,
      onClickDocument = _ref.onClickDocument,
      onDownload = _ref.onDownload,
      open = _ref.open,
      iconTooltip = _ref.iconTooltip;
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
      case 'En Espera':
      case 'En Revisión':
        return clasess.dotOnHold;

      case 'Pendiente':
        return clasess.dotPending;

      case 'Aceptado':
        return clasess.dotSuccess;

      case 'Rechazado':
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
      case 'Aceptado':
        return _react.default.createElement(_Done.default, {
          className: clasess.successIcon
        });

      case 'Rechazado':
        return _react.default.createElement(_Clear.default, {
          className: clasess.dangerIcon
        });

      case 'En Espera':
      case 'En Revisión':
      case 'Pendiente':
      default:
        return _react.default.createElement("span", {
          className: clasess.statusName
        }, status, " ");
    }
  };
  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */


  var isOnHold = function isOnHold(status) {
    return status === 'En Espera' || status === 'En Revisión';
  };
  /**
   *
   * @param {String} status
   * @returns {Boolean}
   */


  var isNotPending = function isNotPending(status) {
    return status !== 'Pendiente';
  };

  return _react.default.createElement(_HeaderCollapse.default, {
    open: open,
    title: title,
    onDownload: onDownload,
    iconTooltip: iconTooltip
  }, _react.default.createElement(_List.default, {
    className: clasess.noPadding
  }, documents.map(function (document, index) {
    return _react.default.createElement(_ListItem.default, {
      key: document.name,
      button: isNotPending(document.status),
      onClick: isNotPending(document.status) ? handleOnClickDocument(document, index) : function () {},
      className: clasess.listItem
    }, _react.default.createElement(_ListItemText.default, null, _react.default.createElement("span", {
      className: (0, _classnames2.default)(clasess.dot, getDotColorClass(document.status))
    }), _react.default.createElement("span", {
      className: (0, _classnames2.default)(clasess.name, _defineProperty({}, clasess.nameOnHole, isOnHold(document.status)))
    }, document.name)), _react.default.createElement("div", null, _react.default.createElement("span", null, getLabelStatus(document.status))));
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
  iconTooltip: _propTypes.default.string
};
DocumentList.defaultProps = {
  title: '',
  documents: [],
  onClickDocument: function onClickDocument() {},
  onDownload: function onDownload() {},
  open: false,
  iconTooltip: ''
};
var _default = DocumentList;
exports.default = _default;