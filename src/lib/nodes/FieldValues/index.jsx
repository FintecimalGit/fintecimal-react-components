import React from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import FieldValue from '../FieldValue';

import useStyles from './style';

const FieldValues = ({ title, fields, values }) => {
  const classes = useStyles();

  /**
   *
   * @param {Object} field
   * @returns {String}
   */
  const findValue = (field) => {
    const foundValue = values.find(value => value.field === field.id) || {};
    const { value = "" } = foundValue;
    return value;
  };

  /**
   *
   * @param {String} name 
   * @returns {Boolean}
   */
  const isInternalNumber = name => name === 'Nº Interior' || name === 'Número Interior';

  /**
   *
   * @param {String} name 
   * @returns {Boolean}
   */
  const isExternalNumber = name => name === 'Nº Exterior' || name === 'Número Exterior';

  /**
   *
   * @param {Object} field
   * @returns {String}
   */
  const getGridSize = (field, nextField) => {
    const { label = "" } = field;
    const { label: nextLabel = "" } = nextField || {};

    if (isInternalNumber(label) && isExternalNumber(nextLabel)) return 3;
    else if (isExternalNumber(label)) return 3;

    return 6;
  };

  return (
    <div>
      <div className={classes.titleContainer}>
        <Typography className={classes.title}>
          { title }
        </Typography>
      </div>
      <Grid container spacing={2}>
        {
          fields.map((field, index) => (
            <Grid
              key={field.id}
              item
              sm={getGridSize(field, fields[index + 1])}
            >
              <FieldValue
                field={field}
                value={findValue(field)}
              />
            </Grid>
          ))
        }
      </Grid>
    </div>
  );
};

FieldValues.propTypes = {
  title: PropTypes.string,
  fields: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string,
    config: PropTypes.shape({
      visible: PropTypes.bool,
    }),
    type: PropTypes.string,
  })),
  values: PropTypes.arrayOf(PropTypes.shape({
    field: PropTypes.string,
    value: PropTypes.string,
  })),
};

FieldValues.defaultProps = {
  title: '',
  fields: [],
  values: [],
};

export default FieldValues;