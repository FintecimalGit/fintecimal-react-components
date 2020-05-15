import React from 'react';

import CustomField from "./CustomField";
import HeaderCollapse from '../../../HeaderCollapse';

const GroupFields = ({index, fields, classes, signerName}) => {
  return(
    <HeaderCollapse
      open
      title={`Información de ${signerName}`}
    >
      {fields.map((field, indexField) => {
          const {
            name, label, type, value = '',
          } = field;
          return (
            <div className={classes.root} key={`key-${index}-${name}`}>
              <CustomField
                type={type}
                label={label}
                name={name}
                value={value}
              />
            </div>
          );
        })
      }
    </HeaderCollapse>
  );
};

export default GroupFields;