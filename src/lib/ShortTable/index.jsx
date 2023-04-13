import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import Thead from './components/Thead';
import Tbody from './components/Tbody';

import useStyles from './style';

const ShortTable = ({
  headers,
  items,
  onClickRow,
  edit,
  onEdit,
  deleteRow,
  onDeleteRow,
  cleanTable,
  handleCleanTable,
  maxHeaders,
  disabled,
}) => {
  const classes = useStyles();
  const visibleCleanTable = useMemo(() => cleanTable && items.length > 0, [items, cleanTable]);
  return (
    <table className={classes.table}>
      <Thead disabled={disabled} headers={headers} cleanTable={visibleCleanTable} handleCleanTable={handleCleanTable} maxHeaders={maxHeaders} />
      <Tbody
        headers={headers}
        items={items}
        onClickRow={onClickRow}
        edit={edit}
        onEdit={onEdit}
        deleteRow={deleteRow}
        onDeleteRow={onDeleteRow}
        maxHeaders={maxHeaders}
        disabled={disabled}
      />
    </table>
  );
};

ShortTable.propTypes = {
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
  cleanTable: PropTypes.bool,
  handleCleanTable: PropTypes.func,
  maxHeaders: PropTypes.number,
  disabled: PropTypes.bool,
};

ShortTable.defaultProps = {
  headers: [],
  items: [],
  onClickRow: () => {},
  edit: false,
  onEdit: () => {},
  deleteRow: false,
  onDeleteRow: () => {},
  cleanTable: false,
  handleCleanTable: () => {},
  maxHeaders: 0,
  disabled: false,
};

export default ShortTable;
