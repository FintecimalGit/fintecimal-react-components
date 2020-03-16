import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Fields from './Fields';
import Table from '../../Table';

import {generateValueEmpty, defaultData, defaultHeader} from './utils';
import useStyles from './style';

const InputTable = ({ value, headers, handleChange }) => {
  const classes = useStyles();
  const [fields, setFields] = useState([]);
  const [information, setInformation] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    fetchData(value, headers);
  }, [value, headers]);

  useEffect(() =>{
    (Object.keys(information).length > 0) ? loadDataTable(information) : setDataTable([]);
  }, [information]);

  const fetchData = (value, headers) => {
    const header = headers.map(opt => { return {key: opt.name, value: opt.label}});
    setHeader(header);
    setFields(generateValueEmpty(headers));
    setInformation(value);
  };

  const addNewRow = (dataField) => {
    const newInformation = [...information, generateData(dataField)];
    handleChange(newInformation);
  };

  const generateData = (data) => {
    return data.map(field => {
      return {
        name: field.name,
        value: field.value
      }
    });
  };

  const loadDataTable = (data) => {
    let newValues = [];
    let newObject = {};
    data.forEach(element => {
      Object.keys(element).forEach((key) => {
        newObject[element[key]['name']] = element[key]['value'];
      });
      if(Object.keys(newObject).length > 0) newValues.push(newObject);
      newObject = {};
    });
    setDataTable(newValues);
  };

  const DeleteRow = (item, index) => {
    const newInformation = [...information];
    newInformation.splice(index,1);
    handleChange(newInformation);
  };

  return (
      <div className={classes.content}>
        <Fields fieldValues={fields} addNewRow={addNewRow} />
        <div className={classes.tableContent}>
          <Table headers={header} items={dataTable} deleteRow={true} onDeleteRow={DeleteRow}/>
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
