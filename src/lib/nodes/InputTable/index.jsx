import React, { 
  useState,
  useEffect,
  useCallback,
  useMemo
} from 'react';
import PropTypes from 'prop-types';
import CSVReader from "react-csv-reader";

import Fields from './Fields';
import Table from '../../Table';

import {generateValueEmpty, defaultData, defaultHeader} from './utils';
import useStyles from './style';

const InputTable = ({ value, headers, handleChange }) => {
  const classes = useStyles();
  const [information, setInformation] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [localHeaders, setLocalHeaders] = useState([]);

  const HEADERS = useMemo(() => localHeaders
    .map(opt => { return {key: opt.name, value: opt.label}}), [localHeaders]);
  const FIELDS = useMemo(() => generateValueEmpty(localHeaders), [localHeaders]);
  const csvOptions = useMemo(() => ({
    header: true,
    dynamicTyping: true,
    skipEmptyLines: true,
    transformHeader: header => header.replace(/\W/g, "_"),
  }), []);

  const addNewRow = (dataField) => {
    const newInformation = [...information, generateData(dataField)];
    handleChange(newInformation);
  };

  const generateData = (data) => {
    return data.map(field => {
      return {
        name: field.name,
        label: field.label,
        value: field.value
      }
    });
  };

  const loadDataTable = (data) => {
    let newValues = [];
    data.forEach(element => {
      let toObject = {};
      element.forEach(({name, value}) => {
        toObject = {
          ...toObject,
          [name]: value,
        };
      });
      if(Object.keys(toObject).length) newValues.push(toObject);
    });
    setDataTable(newValues);
  };

  const DeleteRow = (item, index) => {
    const newInformation = [...information];
    newInformation.splice(index,1);
    handleChange(newInformation);
  };

  const handleOnDropFile = useCallback((data, fileInfo) => {
    setDataTable(data);
    handleChange(data);
  }, []);

  useEffect(() => {
    if (headers.length) setLocalHeaders(headers);
    if (value.length) setDataTable(value);
  }, [value, headers]);

  // useEffect(() =>{
  //   (Object.keys(information).length > 0) ? loadDataTable(information) : setDataTable([]);
  // }, [information]);


  return (
      <div className={classes.content}>
        <Fields fieldValues={FIELDS} addNewRow={addNewRow} />
        <div className={classes.input_loader}>
          <CSVReader
            onFileLoaded={handleOnDropFile}
            parserOptions={csvOptions}
            />
        </div>
        <div className={classes.tableContent}>
          <Table headers={HEADERS} items={dataTable} deleteRow={true} onDeleteRow={DeleteRow}/>
        </div>
      </div>
  );
};

InputTable.propTypes = {
  value: PropTypes.array.isRequired,
  headers: PropTypes.array.isRequired,
  handleChange: PropTypes.func,
};

InputTable.defaultProps = {
  value: defaultData,
  headers: defaultHeader,
  handleChange: () => {},
};

export default InputTable;
