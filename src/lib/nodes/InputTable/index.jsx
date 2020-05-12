import React, { 
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import Fields from './Fields';
import Table from '../../Table';
import CSVReader from './components/CsvReader';

import {generateValueEmpty, defaultData, defaultHeader} from './utils';
import useStyles from './style';

const HEADER_ERROR_MESSAGE = 'La cantidad de columnas no es la correcta, prueba con las siguientes: ';
const HEADER_ERROR_MESSAGE_2 = 'Las siguientes columnas no son correctas: ';

const InputTable = ({ value, headers, handleChange }) => {
  const classes = useStyles();
  const [localHeaders, setLocalHeaders] = useState([]);
  const [localValue, setLocalValue] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);

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
  }, [localValue, handleChange]);

  const includesHeaders = (arr1, arr2) => arr1.map(item => arr2.includes(item) ? null : item).filter(item => item);

  const formatDataFromCsv = useCallback((data) => {
    let isValid = true;
    let messages = [];
    let _data = [];
    let headersRow = [];
    const headersNames = headers.map(field => field.name);
    data.forEach((row, index) => {
      headersRow = Object.keys(row);
      _data = [ 
        ..._data,
        headersNames.map((key, _index) => {
          if (row[key] === '') {
            isValid = false;
            messages = [...messages, `La fila ${index + 2} de la columna "${key}" esta vacía`];
          }
          return {
            name: key,
            value: row[key] || '',
          }
        }),
      ];
    });
    const headersAreValid = includesHeaders(headersRow, headersNames);
    if (headersAreValid.length) {
      isValid = false;
      messages = [`${HEADER_ERROR_MESSAGE_2} ${headersAreValid.join(', ')}`, ...messages];
    } 
    if (headersRow.length !== headersNames.length) {
      isValid = false;
      messages = [`${HEADER_ERROR_MESSAGE} ${headersNames.join(', ')}`, ...messages];
    }
    console.log(messages);
    return {
      isValid,
      data: _data,
      messages,
    }
  }, []);

  const handleOnDropFile = useCallback(([_data, fileInfo]) => {
    const { isValid, data, messages } = formatDataFromCsv(_data);
    if (isValid) {
      handleChange([...localValue, ...data]);
      setErrorMessages([]);
    }
    else {
      setErrorMessages(messages);
    }
  }, [localValue, handleChange]);
  
  useEffect(() => {
    if (headers.length) setLocalHeaders(headers);
    if (value.length) setLocalValue(value)
    else if (localValue.length) setLocalValue([]);
  }, [value, headers]);

  return (
      <div className={classes.content}>
        <Fields fieldValues={FIELDS} addNewRow={addNewRow} />
        <div className={classes.csvActions}>
          <CSVReader
            className={classes.input_loader}
            onFileLoaded={handleOnDropFile}
            parserOptions={csvOptions}
            />
           
          <div className={clsx(
            classes.errorContainer,
            {[classes.errorContainerOn]: Boolean(errorMessages.length)},
            {[classes.errorContainerOff]: !Boolean(errorMessages.length)},
          )}>
            {
              Boolean(errorMessages.length) && (<div>
                {
                  errorMessages.map((message, index) => (<span
                    key={index}
                    className={classes.errorMessage}>
                      { `${index + 1} - ${message}` }
                  </span>))
                }
              </div>)
            }
          </div>
        </div>
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
