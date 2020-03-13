import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Fields from './Fields';
import Table from '../../Table';

import {generateValueEmpty, defaultData} from './utils';
import useStyles from './style';

const InputTable = ({ value, handleChange }) => {
  const classes = useStyles();
  const [fields, setFields] = useState([]);
  const [information, setInformation] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    getHeaders(value);
  }, [value]);

  useEffect(() =>{
    loadDataTable(information);
  }, [information]);

  const getHeaders = (option) => {
    const headers = option[0].map(opt => { return {key: opt.label, value: opt.label}});
    setHeader(headers);
    setFields(generateValueEmpty(option[0]));
    setInformation(validateExistValues(option));
  };

  const validateExistValues = (data) => {
    let newData = [];
    data.map(arrayField => {
      let foundInformation = false;
      arrayField.map(field => {
        console.log(field)
        if(field.hasOwnProperty('value')) if(field.value !== '') foundInformation = true
      });
      console.log(foundInformation)
      if(foundInformation) newData.push(arrayField);
    });
    return newData;
  };

  const addNewRow = (newData) => {
    let newInformation = [...information, newData];
    handleChange(newInformation);
  };

  const loadDataTable = (data) => {
    let newValues = [];
    let newObject = {};
    data.forEach(element => {
      Object.keys(element).forEach((key) => {
        if(element[key]['value'] !== '') newObject[element[key]['label']] = element[key]['value'];
      });
      if(Object.keys(newObject).length > 0) newValues.push(newObject);
      newObject = {};
    });
    setDataTable(newValues);
  };

  const DeleteRow = (item, index) => {
    let newInformation = [...information];
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
  handleChange: PropTypes.func,
};

InputTable.defaultProps = {
  value: defaultData,
  handleChange: () => {},
};

export default InputTable;
