import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import NumbertInput from '../NumbertInput';

/**
 *
 * @param {Object} field
 * @param {String|Number} value
 * @param {Function} handleChange
 * @returns {Component}
 */
const renderField = (field, value, handleChange) => {
  const { type = '', config = {} } = field;
  const { visible = false } = config;

  const props = { ...field, ...config, value, handleChange };

  if (!visible) return '';

  switch (type) {
    case 'Número':
    case 'Numérico':
      return <NumbertInput {...props} />;
    case 'Respuesta larga':
    case 'Texto largo':
      return <TextAreaInput {...props} />
    case 'Respuesta corta':
    case 'Texto corto':
      return <TextInput {...props} />;
    default:
      return '';
  }
};

const FieldValue = ({ field, value, handleChange }) => (
  <> { renderField(field, value, handleChange) } </>
);

FieldValue.propTypes = {
  field: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    config: PropTypes.shape({
      visible: PropTypes.bool,
    }),
    type: PropTypes.string,
  }),
  value: PropTypes.string,
  handleChange: PropTypes.func,
};

FieldValue.defaultProps = {
  field: {
    id: '',
    name: '',
    label: '',
    config: {
      visible: false,
    },
    type: '',
  },
  value: '',
  handleChange: () => {},
};

export default FieldValue;
