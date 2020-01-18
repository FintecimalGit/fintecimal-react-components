import React, { Fragment} from 'react';
import PropTypes from 'prop-types';

import Fields from './Fields';
import Table from '../../Table';

import useStyles from './style';

const InputTable = ({ options }) => {
  const classes = useStyles();
  const [information, setInformation] = React.useState([]);
  const [header, setHeader] = React.useState([]);

  React.useEffect(() => {
    if(Object.keys(header).length === 0) getHeaders(options[0]);
  }, [options]);

  const getHeaders = (option) => {
    let obj = [];
    option.map(opt => obj.push({'key': opt.label, 'value': opt.label}));
    setHeader(obj);
  };

  const addNewRow = (value) => setInformation([...information, value]);

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Fields fields={options[0]} addNewRow={addNewRow} header={header} />
      </div>
      { (Object.keys(information).length > 0) ? <Table headers={header} items={information}/>  : null}
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
      'value': '',
    },{
      'id': 1,
      'label': 'Fecha de pago',
      'value': '',
    },{
      'id': 2,
      'label': 'Monto sin iva',
      'value': '',
    },{
      'id': 3,
      'label': 'IVA',
      'value': '',
    },{
      'id': 4,
      'label': 'Total a pagar',
      'value': '',
    }],
  ],
};

export default InputTable;
