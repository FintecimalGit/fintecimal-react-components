/* eslint-disable react/no-array-index-key */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IconButton from '@material-ui/core/IconButton';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import useStyles from './style';

const Table = ({
  headers,
  items,
  onClickRow,
  edit,
  onEdit,
  deleteRow,
  onDeleteRow,
}) => {
  const classes = useStyles();

  /**
   *
   * @param {Number} currentIndex
   * @param {Array} array
   */
  const isLastIndex = (array, currentIndex) => currentIndex === (array.length - 1);

  /**
   * 
   * @param {Any} item 
   * @param {Number} index 
   */
  const handleOnClickRow = (item, index) => () => {
    onClickRow(item, index);
  };

  /**
   * 
   * @param {Any} item 
   * @param {Number} index 
   */
  const handleOnEdit = (item, index) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    onEdit(item, index, event);
  };

  const handleOnDelete = (item, index) => (event) => {
    event.preventDefault();
    event.stopPropagation();
    onDeleteRow(item, index, event);
  };
  return (
    <tbody>
      {
        items.map((item, index) => (
          <tr
            key={`tr-${index}`}
            className={classes.tr}
            onClick={handleOnClickRow(item, index)}
          >
            {
              headers.map(({ key }, headerIndex) => (
                <td
                  key={`td-${key}-${item[key]}-${index}`}
                  className={classnames(
                    classes.td,
                    { [classes.editButton]: edit && isLastIndex(headers, headerIndex) },
                    { [classes.editButton]: deleteRow && isLastIndex(headers, headerIndex) },
                  )}
                >
                  <span>
                    { item[key] }
                  </span>
                  { isLastIndex(headers, headerIndex) && (
                    <div>
                      {
                        edit && (
                          <IconButton
                            className={classes.noPadding}
                            onClick={handleOnEdit(item, index)}
                          >
                            <EditIcon />
                          </IconButton>
                        )
                      }
                      {
                        deleteRow && (
                          <IconButton
                            className={classes.noPadding}
                            onClick={handleOnDelete(item, index)}
                          >
                            <DeleteIcon />
                          </IconButton>
                        )
                      }
                    </div>
                  )}
                </td>
              ))
            }
          </tr>
        ))
      }
    </tbody>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  items: PropTypes.array,
  onClickRow: PropTypes.func,
  edit: PropTypes.bool,
  onEdit: PropTypes.func,
  deleteRow: PropTypes.bool,
  onDeleteRow: PropTypes.func,
};

Table.defaultProps = {
  headers: [],
  items: [],
  onClickRow: () => {},
  edit: false,
  onEdit: () => {},
  deleteRow: false,
  onDeleteRow: () => {},
};

export default Table;
