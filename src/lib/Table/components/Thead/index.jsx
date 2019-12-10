import React from 'react';
import PropTypes from 'prop-types';

import useStyles from './style';

const Table = ({ headers }) => {
  const classes = useStyles();
  return (
    <thead className={classes.header}>
      <tr>
        {
          headers.map(({ key, value }) => (
            <th
              key={`th-${key}-${value}`}
              className={classes.th}
            >
              { value }
            </th>
          ))
        }
      </tr>
    </thead>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
};

Table.defaultProps = {
  headers: [],
};

export default Table;
