import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import ShortTable from '../../ShortTable';
import Fields from './components/Fields';

import { defaultDataSigner, defaultHeaderSigner } from './defaults';
import { table } from '../../InputStrings';
import * as utils from './utils';
import useStyles from './style';

const RejectInputTableSigners = ({ value, disabled, headers, handleHeadersAndValues, error, required, maxHeaders = 4, isEditable }) => {
  const classes = useStyles();
  const [fields, setFields] = useState([]);
  const [localHeaders, setLocalHeaders] = useState([]);
  const [localValue, setLocalValue] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editPosition, setEditPosition] = useState();

  const HEADERS = useMemo(() => localHeaders
    .map((option) => ({ key: option.name, value: option.label })), [localHeaders]);

  const VALUES = useMemo(() => {
    if (!localValue.length) return [];

    return localValue.reduce((acc, element) => {
      const row = element.reduce((accRow, column) => {
        const { name, value: _value } = column;
        accRow = { ...accRow, [name]: _value };
        return accRow;
      }, {});

      if (utils.ObjectNotEmpty(row)) acc.push(row);
      return acc;
    }, []);
  }, [localValue]);

  const generateData = useCallback((data) => data.map((field) => ({
    name: field.name,
    label: field.label,
    value: field.value,
  })), []);

  const addNewRow = (dataField) => {
    if (edit) {
      const newInfo = _.cloneDeep(localValue);
      newInfo[editPosition] = generateData(dataField);
      handleHeadersAndValues({
        headers,
        values: newInfo,
      });
      setEdit(false);
      setEditPosition(0);
    } else {
      const newInformation = [...localValue, generateData(dataField)];
      handleHeadersAndValues({
        headers,
        values: newInformation,
      });
    }
  };

  const deleteRow = (item, index) => {
    const newInformation = [...localValue];
    newInformation.splice(index, 1);
    handleHeadersAndValues({
      headers,
      values: newInformation,
    });
  };

  const editRow = (_value, index) => {
    const newFields = utils.generateFieldsWithValue(fields, _value);
    setFields(newFields);
    setEdit(true);
    setEditPosition(index);
  };

  const viewRow = (_value) => {
    const newFields = utils.generateFieldsWithValue(fields, _value);
    setFields(newFields);
  }

  const handleCleanTable = () => {
    handleHeadersAndValues({
      headers,
      values: [],
    });
  };

  const closeMessageError = () => {
    setTimeout(() => {
      setErrorMessages([]);
    }, 10000);
  };

  const handleOnChangeField = (field, index, value) => {
    const newFields = fields.map((_field) => {
      return { ..._field, ...( _field.id === field.id ? { value } : null ) };
    });
    const fieldsUnhide = utils.changeHideChildrens(newFields[index], newFields);
    setFields(fieldsUnhide);
  };

  useEffect(() => {
    if (headers.length) setLocalHeaders(headers);
    if (value.length) setLocalValue(value);
    else if (localValue.length) setLocalValue([]);
  }, [value, headers]);

  useEffect(() => {
    if (value.length) {
      const _fields = utils.generateValueEmpty(localHeaders);
      const defaultIndex = 0;
      const defaultValue = value[defaultIndex];
  
      const newFieldDefaultValue = defaultValue.reduce((acc, element) => {
        const { name, value: _value } = element;
        acc = { ...acc, [name]: _value };
        return acc;
      }, {});
  
      const newFields = utils.generateFieldsWithValue(_fields, newFieldDefaultValue);
      setFields(newFields);
    } else {
      setFields(utils.generateValueEmpty(localHeaders));
    }
  }, [localHeaders]);


  useEffect(() => {
    if (errorMessages.length) closeMessageError();
  }, [errorMessages]);

  useEffect(() => {
    if (error && required) {
      setErrorMessages([
        table.errorMessages.empty
      ])
    }
  }, [error, required])

  return (
    <div>
      <div className={classes.content}>
        <div className={classes.tableContent}>
          <ShortTable
            headers={HEADERS}
            items={VALUES}
            deleteRow
            onDeleteRow={deleteRow}
            edit
            onEdit={editRow}
            cleanTable
            handleCleanTable={handleCleanTable}
            maxHeaders={maxHeaders}
            disabled={disabled}
            isEditable={isEditable}
            handleViewRow={viewRow}
            onClickRow={viewRow}
          />
        </div>
        <Fields
          isEditable={isEditable}
          disabled={!isEditable}
          fieldValues={fields}
          handleOnChangeField={handleOnChangeField}
          setFieldsEmpty={setFields}
          addNewRow={addNewRow}
          edit={edit}
        />
      </div>
    </div>
  );
};

RejectInputTableSigners.propTypes = {
  value: PropTypes.array,
  headers: PropTypes.array,
  handleHeadersAndValues: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  isEditable: PropTypes.bool,
};

RejectInputTableSigners.defaultProps = {
  value: defaultDataSigner,
  headers: defaultHeaderSigner,
  required: false,
  error: false,
  handleHeadersAndValues: () => {},
  disabled: true,
  isEditable: false,
};

export default RejectInputTableSigners;
