import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';

import Fields from './Fields';
import Table from '../../Table';

import useStyles from './style';

const InputTable = ({ options }) => {
  const classes = useStyles();
  const [information, setInformation] = useState([]);
  const [dataTable, setDataTable] = useState([]);
  const [header, setHeader] = useState([]);

  useEffect(() => {
    if(Object.keys(header).length === 0) getHeaders(options);
    loadDataTable(information);
  }, [options, information]);

  const getHeaders = (option) => {
    let obj = [];
    option[0].map(opt => obj.push({'key': opt.label, 'value': opt.label}));
    setHeader(obj);
    setInformation(option);
  };

  const addNewRow = (value) => {
    let newArray = [];
    Object.keys(value).forEach(function(key, index) {
      newArray.push({
        'id' : index,
        'label': key,
        'value': value[key]
      });
    });
    setInformation([...information, newArray]);
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
    setInformation(newInformation);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Fields fields={options[0]} addNewRow={addNewRow} header={header} />
      </div>
      <div className={classes.tableContent}>
        { (Object.keys(dataTable).length > 0) ? <Table headers={header} items={dataTable} deleteRow={true} onDeleteRow={DeleteRow}/>  : null}
      </div>
    </div>
  );
};

InputTable.propTypes = {
  options: PropTypes.array.isRequired
};

InputTable.defaultProps = {
  options: [
    [{
      'id': 0,
      'label': 'No.',
      'value': '123',
    },{
      'id': 1,
      'label': 'Fecha de pago',
      'value': '20 de enero',
    },{
      'id': 2,
      'label': 'Monto sin iva',
      'value': '1000',
    },{
      'id': 3,
      'label': 'IVA',
      'value': '160',
    },{
      'id': 4,
      'label': 'Total a pagar',
      'value': '1160',
    }],
  ],
};

export default InputTable;
