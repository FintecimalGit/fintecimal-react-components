import React from 'react';
import PropTypes from 'prop-types';

import Thead from './components/Thead';
import Tbody from './components/Tbody';

import useStyles from './style';

const Table = ({
  headers,
  items,
  onClickRow,
  edit,
  onEdit,
}) => {
  const classes = useStyles();
  return (
    <table className={classes.table}>
      <Thead headers={headers} />
      <Tbody
        headers={headers}
        items={items}
        onClickRow={onClickRow}
        edit={edit}
        onEdit={onEdit}
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
  items: PropTypes.array,
  onClickRow: PropTypes.func,
  edit: PropTypes.bool,
  onEdit: PropTypes.func,
};

Table.defaultProps = {
  headers: [],
  items: [],
  onClickRow: () => {},
  edit: false,
  onEdit: () => {},
};

export default Table;
