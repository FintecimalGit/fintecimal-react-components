import React, { useMemo } from 'react';
import PropTypes from 'prop-types';

import GroupFields from './component/GroupFields';

import useStyles from './style';


const DynamicFields = ({ header, fields, signers }) => {
  const classes = useStyles();

  const fillArray = (data, length) => {
    const res = [];
    for (let i = 0; i < length; i++) {
      res.push(data);
    }
    return res;
  };

  const FIELDS = useMemo(() => {
    const totalSigners = signers.length;
    return fillArray(header, totalSigners);
  }, [header, fields]);

  return (
    <div className={classes.content}>
      {FIELDS.map((groupField, indexGroup) => {
        const { fullName } = signers[indexGroup];
        return (
          <GroupFields index={indexGroup} fields={groupField} classes={classes} signerName={fullName} />
        )
        })
      }
    </div>
  );
};

DynamicFields.propTypes = {
  header: PropTypes.array.isRequired,
  fields: PropTypes.array,
  signers: PropTypes.array.isRequired,
};

DynamicFields.defaultProps = {
  fields: [],
};

export default DynamicFields;
