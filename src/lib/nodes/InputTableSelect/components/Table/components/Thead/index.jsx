import React, { memo } from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { Box } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import useStyles from './useStyles';

const Thead = ({ headers, cleanTable, handleCleanTable }) => {
  const classes = useStyles();

  const isLastIndex = (array, currentIndex) => currentIndex === array.length - 1;

  return (
    <thead className={classes.header}>
      <tr>
        {headers.map(({ key, value }, index) => (
          <th
            key={`th-${key}-${value}`}
            className={clsx(classes.th, {
              [classes.cleanTable]: cleanTable && isLastIndex(headers, index),
            })}
          >
            <span className={classes.tableValue}>
              {value}
              {' '}
            </span>
            {isLastIndex(headers, index) && (
              <Box>
                {cleanTable && (
                  <Tooltip title="Limpiar la tabla">
                    <IconButton
                      className={classes.noPadding}
                      onClick={handleCleanTable}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                )}
              </Box>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
};

Thead.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  cleanTable: PropTypes.bool,
  handleCleanTable: PropTypes.func,
};

Thead.defaultProps = {
  headers: [],
  cleanTable: false,
  handleCleanTable: () => {},
};

export default memo(Thead);
