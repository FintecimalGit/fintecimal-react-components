import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import clsx from 'clsx';

import Table from '../../Table';
import CSVReader from './components/CsvReader';
import Fields from './components/Fields';

import { defaultData, defaultHeader } from './defaults';
import { table } from '../../InputStrings';
import * as utils from './utils';
import useStyles from './style';

const InputTable = ({ value, headers, handleHeadersAndValues, error, required }) => {
  const classes = useStyles();
  const [fields, setFields] = useState([]);
  const [localHeaders, setLocalHeaders] = useState([]);
  const [localValue, setLocalValue] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editPosition, setEditPosition] = useState();

  const HEADERS = useMemo(() => localHeaders
    .map((option) => ({ key: option.name, value: option.label })), [localHeaders]);

  const csvOptions = useMemo(() => ({
    header: true,
    dynamicTyping: false,
    skipEmptyLines: true,
    transformHeader: (header) => header.replace(/\W/g, '_'),
  }), []);

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

  const handleCleanTable = () => {
    handleHeadersAndValues({
      headers,
      values: [],
    });
  };

  const handleOnDropFile = (result) => {
    const {
      isValid, data, headersCSV, messages,
    } = result;
    if (isValid) {
      handleHeadersAndValues({
        headers: headersCSV,
        values: [...localValue, ...data],
      });
      setErrorMessages([]);
    } else {
      setErrorMessages(messages);
    }
  };

  const closeMessageError = () => {
    setTimeout(() => {
      setErrorMessages([]);
    }, 10000);
  };

  useEffect(() => {
    if (headers.length) setLocalHeaders(headers);
    if (value.length) setLocalValue(value);
    else if (localValue.length) setLocalValue([]);
  }, [value, headers]);

  useEffect(() => {
    setFields(utils.generateValueEmpty(localHeaders));
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
    <div className={classes.content}>
      <Fields fieldValues={fields} addNewRow={addNewRow} edit={edit} />
      <div className={classes.csvActions}>
        <CSVReader
          className={classes.input_loader}
          onFileLoaded={handleOnDropFile}
          parserOptions={csvOptions}
          headers={headers}
          localValue={localValue}
        />

        <div className={clsx(
          classes.errorContainer,
          { [classes.errorContainerOn]: Boolean(errorMessages.length) },
          { [classes.errorContainerOff]: !errorMessages.length },
        )}
        >
          {
            Boolean(errorMessages.length) && (
            <div>
              {
                errorMessages.map((message, index) => (
                  <span
                    key={index}
                    className={classes.errorMessage}
                  >
                    { `${index + 1} - ${message}` }
                  </span>
                ))
              }
            </div>
            )
          }
        </div>
      </div>
      <div className={classes.tableContent}>
        <Table
          headers={HEADERS}
          items={VALUES}
          deleteRow
          onDeleteRow={deleteRow}
          edit
          onEdit={editRow}
          cleanTable
          handleCleanTable={handleCleanTable}
        />
      </div>
    </div>
  );
};

InputTable.propTypes = {
  value: PropTypes.array,
  headers: PropTypes.array,
  handleHeadersAndValues: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
};

InputTable.defaultProps = {
  value: defaultData,
  headers: defaultHeader,
  required: false,
  error: false,
  handleHeadersAndValues: () => {},
};

export default InputTable;
