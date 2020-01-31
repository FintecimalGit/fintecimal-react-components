import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Fields from './Fields';
import Table from '../../Table';

import useStyles from './style';

const InputTable = ({ value, handleChange }) => {
  const classes = useStyles();
  const [information, setInformation] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    getHeaders(value);
    loadDataTable(value);
  }, [value]);

  const getHeaders = (option) => {
    let obj = [];
    option[0].map(opt => obj.push({'key': opt.label, 'value': opt.label}));
    setHeader(obj);
    setInformation(option);
  };

  const addNewRow = (values) => {
    let newArray = [];
    Object.keys(values).forEach(function(key, index) {
      newArray.push({
        'id' : index,
        'label': key,
        'value': values[key]
      });
    });
    let newInformation = [...information, newArray];
    setInformation(newInformation);
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
    newInformation.splice(index+1,1);
    setInformation(newInformation);
    handleChange(newInformation);
  };

  return (
    <div className={classes.content}>
      <Fields fields={value[0]} addNewRow={addNewRow} header={header} />
      <div className={classes.tableContent}>
        { (Object.keys(dataTable).length > 0) ? <Table headers={header} items={dataTable} deleteRow={true} onDeleteRow={DeleteRow}/>  : null}
      </div>
    </div>
  );
};

InputTable.propTypes = {
  value: PropTypes.array.isRequired,
  handleChange: PropTypes.func,
};

InputTable.defaultProps = {
  value: [
    [{
      'id': 0,
      'label': 'No.',
      'type': 'número',
      'value': '123',
    },{
      'id': 1,
      'label': 'Fecha de pago',
      'type': 'respuesta corta',
      'value': '20 de enero',
    },{
      'id': 2,
      'label': 'Monto sin iva',
      'type': 'número',
      'value': '1000',
    },{
      'id': 3,
      'label': 'IVA',
      'type': 'número',
      'value': '160',
    },{
      'id': 4,
      'label': 'Total a pagar',
      'type': 'número',
      'value': '1160',
    }],
  ],
  handleChange: () => {},
};

export default InputTable;
