"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _TextField = _interopRequireDefault(require("@material-ui/core/TextField"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _reactAutosuggest = _interopRequireDefault(require("react-autosuggest"));

var _style = _interopRequireDefault(require("./style"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var renderInputComponent = function renderInputComponent(inputProps) {
  var classes = inputProps.classes,
      _inputProps$inputRef = inputProps.inputRef,
      _inputRef = _inputProps$inputRef === void 0 ? function () {} : _inputProps$inputRef,
      ref = inputProps.ref,
      fullWidth = inputProps.fullWidth,
      other = _objectWithoutProperties(inputProps, ["classes", "inputRef", "ref", "fullWidth"]);

  return _react.default.createElement(_TextField.default, _extends({
    fullWidth: fullWidth,
    InputProps: {
      inputRef: function inputRef(node) {
        ref(node);

        _inputRef(node);
      },
      classes: {
        input: classes.input
      }
    }
  }, other));
};

var renderSuggestionsContainer = function renderSuggestionsContainer(options) {
  return _react.default.createElement(_Paper.default, _extends({}, options.containerProps, {
    square: true
  }), options.children);
};

var renderSectionTitle = function renderSectionTitle(section) {
  return _react.default.createElement(_Typography.default, {
    variant: "body1",
    color: "inherit",
    style: {
      fontWeight: 'inherit'
    }
  }, section.name);
};

var renderSuggestion = function renderSuggestion(suggestion) {
  return _react.default.createElement(_Typography.default, {
    variant: "subtitle1",
    color: "inherit",
    style: {
      fontWeight: 'inherit'
    }
  }, suggestion.name);
};

var Autocomplete = function Autocomplete(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      caseSensitive = _ref.caseSensitive,
      startWith = _ref.startWith,
      maxSuggestions = _ref.maxSuggestions,
      minimumLengthToSearch = _ref.minimumLengthToSearch,
      value = _ref.value,
      label = _ref.label,
      placeholder = _ref.placeholder,
      variant = _ref.variant,
      required = _ref.required,
      disabled = _ref.disabled,
      fullWidth = _ref.fullWidth,
      handleOnChangeWhen = _ref.handleOnChangeWhen;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(''),
      _useState2 = _slicedToArray(_useState, 2),
      localValue = _useState2[0],
      setLocalValue = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      suggestions = _useState4[0],
      setSuggestions = _useState4[1];

  var clearSugestions = function clearSugestions() {
    setSuggestions([]);
  };

  var handleOnChange = function handleOnChange(event, _ref2) {
    var newValue = _ref2.newValue,
        method = _ref2.method;
    setLocalValue(newValue);
    if (handleOnChangeWhen.includes(method)) onChange(newValue);
  };
  /**
   *
   * @param {String} str
   * @returns {String}
   */


  var escapeRegexCharacters = function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };
  /**
   * 
   * @param {String} _value
   * @returns {Array} 
   */


  var getSuggestions = function getSuggestions(_value) {
    var escapedValue = escapeRegexCharacters(_value.trim());
    var flags = caseSensitive ? '' : 'i';
    var startWithFlag = startWith ? '^' : '';
    var regex = new RegExp("".concat(startWithFlag).concat(escapedValue), flags);
    return options.map(function (option) {
      return {
        name: option.name,
        children: option.children.map(function (_children) {
          return _objectSpread({}, _children, {
            customValue: "".concat(option.name, " - ").concat(_children.name)
          });
        }).filter(function (_children) {
          return regex.test(_children.customValue);
        })
      };
    }).filter(function (option) {
      return option.children.length > 0;
    }).slice(0, maxSuggestions);
  };

  var onSuggestionsFetchRequested = function onSuggestionsFetchRequested(_ref3) {
    var _value = _ref3.value;

    var _suggestion = getSuggestions(_value);

    setSuggestions(_suggestion);
  };

  var onSuggestionsClearRequested = function onSuggestionsClearRequested() {
    clearSugestions();
  };
  /**
   * 
   * @param {Object} section
   * @returns {String} 
   */


  var getSuggestionValue = function getSuggestionValue(suggestion) {
    return suggestion.customValue;
  };
  /**
   * 
   * @param {Object} section
   * @returns {String} 
   */


  var getSectionSuggestions = function getSectionSuggestions(section) {
    return section.children;
  };
  /**
   * 
   * @param {String} _value
   * @returns {Boolean} 
   */


  var shouldRenderSuggestions = function shouldRenderSuggestions(_value) {
    return _value.trim().length >= minimumLengthToSearch;
  };

  (0, _react.useEffect)(function () {
    setLocalValue(value);
  }, [value]);
  return _react.default.createElement("div", null, _react.default.createElement(_reactAutosuggest.default, {
    multiSection: true,
    suggestions: suggestions,
    onSuggestionsFetchRequested: onSuggestionsFetchRequested,
    onSuggestionsClearRequested: onSuggestionsClearRequested,
    getSuggestionValue: getSuggestionValue,
    getSectionSuggestions: getSectionSuggestions,
    shouldRenderSuggestions: shouldRenderSuggestions,
    inputProps: {
      classes: classes,
      id: label,
      label: label,
      placeholder: placeholder,
      value: localValue,
      onChange: handleOnChange,
      variant: variant,
      required: required,
      disabled: disabled,
      fullWidth: fullWidth
    },
    renderInputComponent: renderInputComponent,
    theme: {
      container: classes.container,
      suggestionsContainerOpen: classes.suggestionsContainerOpen,
      sectionTitle: classes.sectionTitle,
      suggestionsList: classes.suggestionsList,
      suggestion: classes.suggestion
    },
    renderSuggestionsContainer: renderSuggestionsContainer,
    renderSectionTitle: renderSectionTitle,
    renderSuggestion: renderSuggestion
  }));
};

Autocomplete.propTypes = {
  // General Props
  option: _propTypes.default.arrayOf(_propTypes.default.shape({
    name: _propTypes.default.string.isRequired,
    children: _propTypes.default.arrayOf(_propTypes.default.shape({
      name: _propTypes.default.string.isRequired
    })).isRequired
  })),
  onChange: _propTypes.default.func,
  // Autosuggest props
  caseSensitive: _propTypes.default.bool,
  maxSuggestions: _propTypes.default.number,
  minimumLengthToSearch: _propTypes.default.number,
  value: _propTypes.default.string,
  // Input props
  label: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  variant: _propTypes.default.oneOf(['outlined', 'filled', 'standard']),
  required: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  fullWidth: _propTypes.default.bool,
  handleOnChangeWhen: _propTypes.default.array
};
Autocomplete.defaultProps = {
  // General Props
  option: [],
  onChange: function onChange() {},
  // Autosuggest props
  caseSensitive: false,
  startWith: false,
  maxSuggestions: 10,
  minimumLengthToSearch: 0,
  value: '',
  // Input props
  label: '',
  placeholder: '',
  variant: 'outlined',
  required: false,
  disabled: false,
  fullWidth: true,
  handleOnChangeWhen: ['click'] // Types['down', 'up', 'escape','enter', 'click', 'type']

};

var _default = (0, _react.memo)(Autocomplete);

exports.default = _default;