import React, { memo, useMemo } from 'react';
import PropTypes from 'prop-types';

import useStyles from './useStyles';
import Thead from './components/Thead';
import TBody from './components/Tbody';

const Table = ({
  headers,
  items,
  onClickRow,
  edit,
  onEdit,
  deleteRow,
  onDeleteRow,
  cleanTable,
  handleCleanTable,
}) => {
  const classes = useStyles();
  const visibleCleanTable = useMemo(
    () => cleanTable && items.length > 0,
    [items, cleanTable],
  );
  return (
    <table className={classes.table}>
      <Thead
        headers={headers}
        cleanTable={visibleCleanTable}
        handleCleanTable={handleCleanTable}
      />
      <TBody
        headers={headers}
        items={items}
        onClickRow={onClickRow}
        edit={edit}
        onEdit={onEdit}
        deleteRow={deleteRow}
        onDeleteRow={onDeleteRow}
      />
    </table>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      value: PropTypes.string,
    }),
  ),
  items: PropTypes.arrayOf(PropTypes.string),
  onClickRow: PropTypes.func,
  edit: PropTypes.bool,
  onEdit: PropTypes.func,
  deleteRow: PropTypes.bool,
  onDeleteRow: PropTypes.func,
  cleanTable: PropTypes.bool,
  handleCleanTable: PropTypes.func,
};

Table.defaultProps = {
  headers: [],
  items: [],
  onClickRow: () => {},
  edit: false,
  onEdit: () => {},
  deleteRow: false,
  onDeleteRow: () => {},
  cleanTable: false,
  handleCleanTable: () => {},
};

export default memo(Table);
