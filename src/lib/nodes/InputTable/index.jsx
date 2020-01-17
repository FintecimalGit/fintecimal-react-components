import React, { Fragment} from 'react';
import PropTypes from 'prop-types';

import BaseInput from '../BaseInput';

import Fields from './Fields';
import useStyles from './style';

const InputTable = ({ options }) => {
  const classes = useStyles();
  const [information, setInformation] = React.useState([]);

  const addNewRow = (value) => {
    setInformation([...information, value]);
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Fields fields={options[0]} addNewRow={addNewRow} />
      </div>
    </div>
  );
};

InputTable.propTypes = {
  options: PropTypes.array,
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
