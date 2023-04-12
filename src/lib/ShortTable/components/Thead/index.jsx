import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import classnames from 'classnames';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './style';

const Table = ({ headers, cleanTable, handleCleanTable, maxHeaders, disable }) => {
  const classes = useStyles();
  const [shortHeaders, setShortHeaders] = useState([]);

  const isLastIndex = (array, currentIndex) => currentIndex === (array.length - 1);

  const setShortValues = () => {
    const newShortHeaders = headers.slice(0, maxHeaders);
    setShortHeaders(newShortHeaders);
  };

  useEffect(() => {
    if (headers.length) {
      setShortValues();
    } 
  }, [headers]);

  return (
    <thead className={classes.header}>
      <tr>
        {
          shortHeaders.map(({ key, value }, index) => (
            <th
              key={`th-${key}-${value}`}
              className={classnames(
                classes.th,
                { [classes.cleanTable]: cleanTable && isLastIndex(shortHeaders, index) },
              )}
            >
              <span className={classes.tableValue}>
                { value }
                {' '}
              </span>
              { isLastIndex(shortHeaders, index) && (
                <>
                  { cleanTable && (
                  <Tooltip title="Limpiar la tabla">
                    <IconButton
                      className={classes.noPadding}
                      onClick={handleCleanTable}
                      disable={disable}
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
  disable: PropTypes.bool,
  handleCleanTable: PropTypes.func,
};

Table.defaultProps = {
  headers: [],
  cleanTable: false,
  disable: false,
  handleCleanTable: () => {},
};

export default Table;
