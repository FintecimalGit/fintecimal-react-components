import React from 'react';

import CustomField from "./CustomField";
import HeaderCollapse from '../../../HeaderCollapse';

const GroupFields = ({index, fields, classes, signerName, handleOnChange}) => {

  const updateValue = (field, value, index) => {
    const newFields = [...fields];
    newFields[index] = {...field, value};
    return newFields;
  };

  return(
    <HeaderCollapse
      open
      title={`Información de ${signerName}`}
    >
      {fields.map((field, indexField) => {
          const {
            name, label, type, value = '', required = false,
          } = field;
          return (
            <div className={classes.root} key={`key-${index}-${name}`}>
              <CustomField
                type={type}
                label={label}
                name={name}
                value={value}
                required={required}
                handleChange={(value) => handleOnChange(updateValue(field,value,indexField), index)}
              />
            </div>
          );
        })
      }
    </HeaderCollapse>
  );
};

export default GroupFields;