import React, { 
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

import Fields from './Fields';
import Table from '../../Table';
import CSVReader from './components/CsvReader';

import {generateValueEmpty, defaultData, defaultHeader} from './utils';
import useStyles from './style';

const InputTable = ({ value, headers, handleChange }) => {
  const classes = useStyles();
  const [localHeaders, setLocalHeaders] = useState([]);
  const [localValue, setLocalValue] = useState([]);

  const HEADERS = useMemo(() => localHeaders
    .map(option => { return {key: option.name, value: option.label}}), [localHeaders]);
  const FIELDS = useMemo(() => generateValueEmpty(localHeaders), [localHeaders]);
  const csvOptions = useMemo(() => ({
    header: true,
    dynamicTyping: false,
    skipEmptyLines: true,
    transformHeader: header => header.replace(/\W/g, "_"),
  }), []);
  const VALUES = useMemo(() => {
    let newValues = [];
    if (localValue.length) {
      localValue.forEach(element => {
        let toObject = {};
        element.forEach(({name, value: _value}) => {
          toObject = {
            ...toObject,
            [name]: _value,
          };
        });
        if(Object.keys(toObject).length) newValues.push(toObject);
      });
      return newValues;
    }
    else return newValues;
  }, [localValue, handleOnDropFile]);

  const generateData = useCallback((data) => data.map(field => ({
    name: field.name,
    label: field.label,
    value: field.value
  })), []);

  const addNewRow = (dataField) => {
    const newInformation = [...localValue, generateData(dataField)];
    handleChange(newInformation);
  };

  const DeleteRow = useCallback((item, index) => {
    const newInformation = [...localValue];
    newInformation.splice(index, 1);
    handleChange(newInformation);
  }, [localValue]);

  const formatDataFromCsv = useCallback((data) => {
    let isValid = true;
    let _data = [];
    const headersNames = headers.map(field => field.name);
    data.forEach(row => {
      const headersRow = Object.keys(row)
      if (headersRow.length !== headersNames.length) isValid = false
      _data = [ 
        ..._data,
        headersNames.map(key => {
          if (!row[key]) isValid = false;
          return {
            name: key,
            value: row[key] || '',
          }
        }),
      ];
    });
    return {
      isValid,
      data: _data,
    }
  }, []);

  const handleOnDropFile = useCallback((_data, fileInfo) => {
    const { isValid, data} = formatDataFromCsv(_data);
    if (isValid) {
      handleChange([...localValue, ...data]);
    }
  }, [localValue, handleChange]);

  useEffect(() => {
    if (headers.length) setLocalHeaders(headers);
    if (value.length) setLocalValue(value);
  }, [value, headers]);

  return (
      <div className={classes.content}>
        <Fields fieldValues={FIELDS} addNewRow={addNewRow} />
        <CSVReader
          className={classes.input_loader}
          onFileLoaded={handleOnDropFile}
          parserOptions={csvOptions}
        />
        <div className={classes.tableContent}>
          <Table headers={HEADERS} items={VALUES} deleteRow={true} onDeleteRow={DeleteRow}/>
        </div>
      </div>
  );
};

InputTable.propTypes = {
  value: PropTypes.array,
  headers: PropTypes.array,
  handleChange: PropTypes.func,
};

InputTable.defaultProps = {
  value: defaultData,
  headers: defaultHeader,
  handleChange: () => {},
};

export default InputTable;
