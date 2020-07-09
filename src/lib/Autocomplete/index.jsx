import React, { useState, memo, useEffect } from 'react';
import PropTypes from 'prop-types';

import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Autosuggest from 'react-autosuggest';

import useStyles from './style';

const renderInputComponent = (inputProps) => {
  const {
    classes,
    inputRef = () => {},
    ref,
    fullWidth,
    ...other
  } = inputProps;

  return (
    <TextField
      fullWidth={fullWidth}
      InputProps={{
        inputRef: node => {
          ref(node);
          inputRef(node);
        },
        classes: {
          input: classes.input,
        },
      }}
      {...other}
    />
  );
};

const renderSuggestionsContainer = (options) => (
  <Paper {...options.containerProps} square>
    {options.children}
  </Paper>
);

const renderSectionTitle = (section)  => (
  <Typography
    variant="body1"
    color="inherit"
    style={{ fontWeight: 'inherit' }}
  >
    { section.name }
  </Typography>
);

const renderSuggestion = (suggestion)  => (
  <Typography
    variant="subtitle1"
    color="inherit"
    style={{ fontWeight: 'inherit' }}
  >
    { suggestion.name }
  </Typography>
);

const Autocomplete = ({
  // General props
  options,
  handleChange,

  // Autosuggest props
  caseSensitive,
  startWith,
  maxSuggestions,
  minimumLengthToSearch,
  value,

  // Input props
  label,
  placeholder,
  variant,
  required,
  disabled,
  fullWidth,
  handleOnChangeWhen
}) => {
  const classes = useStyles();

  const [localValue, setLocalValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [multiSection, setMultiSection] = useState(false);

  const clearSugestions = () => {
    setSuggestions([]);
  }

  const handleOnChange = (event, { newValue, method }) => {
    setLocalValue(newValue);
    if (handleOnChangeWhen.includes(method)) handleChange(newValue);
  };

  /**
   *
   * @param {String} str
   * @returns {String}
   */
  const escapeRegexCharacters = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  /**
   * 
   * @param {Array} _options
   * @param {RegExp} regex
   * @returns {Array} 
   */
  const getSuggestionsByChildren = (_options, regex) => {
    return _options
      .map((option) => ({
        name: option.name,
        children: (
          option.children
            .map((_children) => ({
              ..._children,
              customValue: `${option.name} - ${_children.name}`
            }))
            .filter((_children) => regex.test( _children.customValue))
        )
      }))
      .filter(option => option.children.length > 0)
  };

  /**
   * 
   * @param {Array} _options
   * @param {RegExp} regex
   * @returns {Array} 
   */
  const getSuggestionsByName = (_options, regex) => {
    return _options
      .filter((option) => regex.test(option.name))
  };

  /**
   * 
   * @param {String} _value
   * @returns {Array} 
   */
  const getSuggestions = (_value) => {
    const escapedValue = escapeRegexCharacters(_value.trim());
    
    const flags = caseSensitive ? '' : 'i';
    const startWithFlag = startWith ? '^' : '';
    const regex = new RegExp( `${startWithFlag}${escapedValue}`, flags);

    const _options = multiSection ? getSuggestionsByChildren(options, regex) : getSuggestionsByName(options, regex);

    return _options.slice(0, maxSuggestions);
  };

  const onSuggestionsFetchRequested = ({ value: _value }) => {
    const _suggestion = getSuggestions(_value);
    setSuggestions(_suggestion);
  };

  const onSuggestionsClearRequested = () => {
    clearSugestions();
  };

  /**
   * 
   * @param {Object} section
   * @returns {String} 
   */
  const getSuggestionValue = (suggestion)  => multiSection ? suggestion.customValue : suggestion.name;
  
  /**
   * 
   * @param {Object} section
   * @returns {String} 
   */
  const getSectionSuggestions = (section)  => section.children;

  /**
   * 
   * @param {String} _value
   * @returns {Boolean} 
   */
  const shouldRenderSuggestions = (_value) => _value.trim().length >= minimumLengthToSearch;

  useEffect(() => {
    setLocalValue(value);
  }, [value]);

  useEffect(() => {
    const _multiSection = options.some((option) => option.children);
    setMultiSection(_multiSection);
  }, [options]);

  return (
    <div>
      <Autosuggest
        multiSection={multiSection}

        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        getSectionSuggestions={getSectionSuggestions}
        shouldRenderSuggestions={shouldRenderSuggestions}

        inputProps={{
          classes,
          id: label,
          label: label,
          placeholder: placeholder,
          value: localValue,
          onChange: handleOnChange,
          variant: variant,
          required: required,
          disabled: disabled,
          fullWidth: fullWidth,
        }}
        renderInputComponent={renderInputComponent}

        theme={{
          container: classes.container,
          suggestionsContainerOpen: classes.suggestionsContainerOpen,
          sectionTitle: classes.sectionTitle,
          suggestionsList: classes.suggestionsList,
          suggestion: classes.suggestion,
        }}
        renderSuggestionsContainer={renderSuggestionsContainer}
        renderSectionTitle={renderSectionTitle}
        renderSuggestion={renderSuggestion}
      />
    </div>
  );
};

Autocomplete.propTypes = {
  // General Props
  option: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })),
  })),
  handleChange: PropTypes.func,

  // Autosuggest props
  caseSensitive: PropTypes.bool,
  maxSuggestions: PropTypes.number,
  minimumLengthToSearch: PropTypes.number,
  value: PropTypes.string,

  // Input props
  label: PropTypes.string,
  placeholder: PropTypes.string,
  variant: PropTypes.oneOf(['outlined', 'filled', 'standard']),
  required: PropTypes.bool,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  handleOnChangeWhen: PropTypes.array,
};

Autocomplete.defaultProps = {
  // General Props
  option: [],
  handleChange: () => {},

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
  handleOnChangeWhen: ['click'], // Types['down', 'up', 'escape','enter', 'click', 'type']
};

export default memo(Autocomplete);
