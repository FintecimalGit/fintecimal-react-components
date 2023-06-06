import React from 'react';
import PropTypes from 'prop-types';
import CURPInput  from '../../../../CURPInput';
import CLABEInput from '../../../../CLABEInput';
import SelectInput from '../../../Select';
import RFCInput from '../../../BaseRFCInput';
import NumberInput from '../../../BaseNumberInput';
import EmailInput from "../../../BaseEmailInput";
import CellPhoneInput from "../../../BasePhoneInput";
import TextInput from "../../../BaseTextInput";
import TextAreaInput from '../../../TextAreaInput';
import BaseDatePicker from "../../../BaseDatePicker";
import UploadDocuments from "../../../../UploadDocuments";
import CurrencyInput from "../../../CurrencyInput";
import RadioGroupInput from '../../../Radio';

const CustomField = ({ type, ...props }) => {
  switch (type) {
    case 'CURP':
      return <CURPInput {...props} />;
    case 'CLABE':
      return <CLABEInput {...props} />;
    case 'lista':
      return <SelectInput {...props} />;
    case 'RFC':
      return <RFCInput {...props} />;
    case 'cantidad':
    case 'número':
      return <NumberInput {...props} />;
    case 'radio':
    case 'email':
      return <EmailInput {...props} />;
    case 'celular':
      return <CellPhoneInput {...props} />;
    case 'respuesta larga':
      return <TextAreaInput {...props} />;
    case 'respuesta corta':
      return <TextInput {...props} />;
    case 'fecha':
      return <BaseDatePicker {...props} />;
    case 'currency':
      return <CurrencyInput {...props} />;
    case 'document':
      return <UploadDocuments {...props} />;
    case 'radiogroup':
      return <RadioGroupInput {...props}/>
    default:
      return '';
  }
};

CustomField.propTypes = {
  type: PropTypes.string,
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
