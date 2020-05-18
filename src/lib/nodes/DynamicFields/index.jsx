import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import GroupFields from './component/GroupFields';

import useStyles from './style';

const DynamicFields = ({ header, fields, signers, handleValue }) => {
  const classes = useStyles();
  const [mFields, setMFields] = useState([]);

  const fillArray = (data, length) => {
    const res = [];
    for (let i = 0; i < length; i++) {
      res.push(data);
    }
    return res;
  };

  const generateData = () => {
    if(fields.length > 0) return fields;
    const totalSigners = signers.length;
    return fillArray(header, totalSigners);
  };

  useEffect(() => {
    if (header.length > 0) {
      const data = generateData();
      setMFields(data);
    }
  },[header, fields])

  const replaceValue = (fields, indexGroup) => {
    const newFields = mFields;
    newFields[indexGroup] = [...fields];
    console.log(newFields)
    return newFields;
  };

  const handleOnChange = (fields, indexGroup) => {
    const newFields = replaceValue(fields, indexGroup);
    handleValue(newFields);
  }

  const available = mFields.length > 0;

  return (
    <div className={classes.content}>
      {available && mFields.map((groupField, indexGroup) => {
        const { fullName } = signers[indexGroup];
        return (
          <GroupFields
            key={indexGroup}
            index={indexGroup}
            fields={groupField}
            classes={classes}
            signerName={fullName}
            handleOnChange={handleOnChange}
          />
        )
        })
      }
    </div>
  );
};

DynamicFields.propTypes = {
  header: PropTypes.array.isRequired,
  fields: PropTypes.array,
  signers: PropTypes.array.isRequired,
  handleValue: PropTypes.func.isRequired,
};

DynamicFields.defaultProps = {
  fields: [],
};

export default DynamicFields;
