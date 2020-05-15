import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../../BaseTextInput';
import EmailInput from '../../BaseEmailInput';
import CellPhoneInput from '../../BasePhoneInput';
import RFCInput from '../../BaseRFCInput';
import NumberInput from '../../BaseNumberInput';
import SelectInput from '../../Select';
import BaseDatePicker from '../../BaseDatePicker';

const CustomField = ({ type, ...props }) => {
  switch (type) {
    case 'lista':
      return <SelectInput {...props} />;
    case 'RFC':
      return <RFCInput {...props} />;
    case 'cantidad':
      return <NumberInput {...props} />;
    case 'número':
      return <NumberInput {...props} />;
    case 'radio':
    case 'email':
      return <EmailInput {...props} />;
    case 'celular':
      return <CellPhoneInput {...props} />;
    case 'respuesta larga':
      return <TextInput {...props} />;
    case 'respuesta corta':
      return <TextInput {...props} />;
    case 'fecha':
      return <BaseDatePicker {...props} />;
    default:
      return <TextInput {...props} />;
  }
};

CustomField.propTypes = {
  type: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
    PropTypes.instanceOf(undefined),
  ]),
  handleChange: PropTypes.func,
};

export default CustomField;
