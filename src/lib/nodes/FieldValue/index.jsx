import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../TextInput';
import TextAreaInput from '../TextAreaInput';
import NumbertInput from '../NumbertInput';

const renderField = (field, value) => {
  const { type = '', config = {} } = field;
  const { visible = false } = config;

  const props = { ...field, ...config, value };

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

const FieldValue = ({ field, value }) => (
  <> { renderField(field, value) } </>
);

FieldValue.propTypes = {
  value: PropTypes.string,
  field: PropTypes.shape({
    name: PropTypes.string,
    label: PropTypes.string,
    config: PropTypes.shape({
      visible: PropTypes.bool,
    }),
    type: PropTypes.string,
  }),
};

FieldValue.defaultProps = {
  field: {
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
