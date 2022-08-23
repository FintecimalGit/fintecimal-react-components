import React from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './style';

const Table = ({ headers, cleanTable, handleCleanTable }) => {
  const classes = useStyles();

  const isLastIndex = (array, currentIndex) => currentIndex === (array.length - 1);

  return (
    <thead className={classes.header}>
      <tr>
        {
          headers.map(({ key, value }, index) => (
            <th
              key={`th-${key}-${value}`}
              className={classnames(
                classes.th,
                { [classes.cleanTable]: cleanTable && isLastIndex(headers, index) },
              )}
            >
              <span className={classes.tableValue}>
                { value }
                {' '}
              </span>
              { isLastIndex(headers, index) && (
                <>
                  { cleanTable && (
                  <Tooltip title="Limpiar la tabla">
                    <IconButton
                      className={classes.noPadding}
                      onClick={handleCleanTable}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                  )}
                </>
              )}
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
  cleanTable: PropTypes.bool,
  handleCleanTable: PropTypes.func,
};

Table.defaultProps = {
  headers: [],
  cleanTable: false,
  handleCleanTable: () => {},
};

export default Table;
