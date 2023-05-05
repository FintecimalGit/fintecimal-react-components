/* eslint-disable import/no-cycle */
/* eslint-disable array-callback-return */
/* eslint-disable no-param-reassign */
import React, {
  Fragment, useState, useEffect, memo,
} from 'react';
import PropTypes from 'prop-types';

import { Box, Button } from '@material-ui/core';
import { generateValueEmpty } from '../../utils';
import useStyles from './useStyles';
import CustomField from '../CustomField';

const Fields = ({
  fieldValues,
  addNewRow,
  handleOnChangeField,
  setFieldsEmpty,
  edit,
}) => {
  const classes = useStyles();
  const [fields, setFields] = useState([]);
  const [deleteInfo, setDeleteInfo] = useState(false);

  useEffect(() => {
    const fieldsUnhide = fieldValues.filter(({ hide = false }) => !hide);
    setFields(fieldsUnhide);
  }, [fieldValues]);

  useEffect(() => {
    if (deleteInfo) {
      setFields(generateValueEmpty(fields));
      setFieldsEmpty(generateValueEmpty(fieldValues));
      setDeleteInfo(false);
    }
  }, [deleteInfo]);

  const handleOnChange = (field, index, value) => {
    handleOnChangeField(field, index, value);
  };

  const areValidFields = () => {
    let isValid = true;
    fields.map((field) => {
      if (field.required && field.value === '') {
        isValid = false;
        field.error = true;
      }
    });
    if (!isValid) setFields([...fields]);
    return isValid;
  };

  const onClickAccept = () => {
    if (areValidFields()) {
      addNewRow(fields);
      setDeleteInfo(true);
    }
  };

  if (Object.keys(fields).length === 0) return null;
  return (
    <>
      <Box className={classes.fieldsContainer}>
        {fields.map((field, index) => {
          const {
            id,
            name,
            label,
            type,
            options,
            format,
            value,
            error = false,
            errorMessage = '',
          } = field;
          return (
            <div className={classes.root} key={id}>
              <CustomField
                  key={id}
                  type={type}
                  label={label}
                  name={name}
                  value={value}
                  handleChange={(value) => handleOnChange(field, index, value)}
                  error={error}
                  errorMessage={errorMessage}
                  required={error}
                  format={format}
                  options={options}
              />
            </div>
          );
        })}
      </Box>

      <Box className={classes.buttonContainer}>
        <Button className={classes.button} onClick={onClickAccept} variant="outlined">
          {edit ? 'Editar' : 'Agregar'}
        </Button>
      </Box>
    </>
  );
};

Fields.propTypes = {
  fieldValues: PropTypes.arrayOf(PropTypes.string),
  addNewRow: PropTypes.func,
  edit: PropTypes.bool,
  handleOnChangeField: PropTypes.func,
  setFieldsEmpty: PropTypes.func,
};

Fields.defaultProps = {
  addNewRow: () => {},
  edit: false,
  fieldValues: [],
  handleOnChangeField: () => {},
  setFieldsEmpty: () => {},
};

export default Fields;
