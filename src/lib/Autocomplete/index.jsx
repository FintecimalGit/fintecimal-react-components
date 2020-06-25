import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Autosuggest from 'react-autosuggest';

import './style.css';

const AutoComplete = ({
  options,
  caseSensitive,
  startWith,
  maxSuggestions,
}) => {
  console.log({ options });

  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const clearSugestions = () => {
    setSuggestions([]);
  }

  const onChange = (event, { newValue, method }) => {
    setValue(newValue);
  };

  /**
   *
   * @param {String} str
   * @returns {String}
   */
  const escapeRegexCharacters = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  /**
   * 
   * @param {String} value
   * @returns {Array} 
   */
  const getSuggestions = (value) => {
    const escapedValue = escapeRegexCharacters(value.trim());
    
    if (escapedValue === '') return [];
    
    const flags = caseSensitive ? '' : 'i';
    const startWithFlag = startWith ? '^' : '';
    const regex = new RegExp( `${startWithFlag}${escapedValue}`, flags);

    return options
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
      .slice(0, maxSuggestions)
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    const _suggestion = getSuggestions(value);
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
  const getSuggestionValue = (suggestion)  => suggestion.customValue;
  
  /**
   * 
   * @param {Object} section
   * @returns {ReactElement} 
   */
  const renderSuggestion = (suggestion)  => (
    <span>{suggestion.name}</span>
  );
  
  /**
   * 
   * @param {Object} section
   * @returns {ReactElement} 
   */
  const renderSectionTitle = (section)  => (
    <strong>{section.name}</strong>
  );
  
  /**
   * 
   * @param {Object} section
   * @returns {String} 
   */
  const getSectionSuggestions = (section)  => section.children;

  const inputProps = {
    placeholder: "Type 'c'",
    value,
    onChange: onChange,
  };

  return (
    <div>
      <Autosuggest
        multiSection
        suggestions={suggestions}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        renderSectionTitle={renderSectionTitle}
        getSectionSuggestions={getSectionSuggestions}
        inputProps={inputProps}
      />
    </div>
  );
};

AutoComplete.propTypes = {
  option: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
    })).isRequired,
  })),
  caseSensitive: PropTypes.bool,
  maxSuggestions: PropTypes.number,
};

AutoComplete.defaultProps = {
  option: [],
  caseSensitive: false,
  startWith: false,
  maxSuggestions: 10,
};

export default AutoComplete;
