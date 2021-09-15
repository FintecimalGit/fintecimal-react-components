import React from 'react';
import PropTypes from 'prop-types';
import BaseInput from '../BaseInput';

const BaseStatusOnlyInput = ({
  label, statusOnly, status,
}) => (
  <BaseInput
    handleChange={() => {}}
    label={label}
    disabled
    statusOnly={statusOnly}
    status={status}
  />
);

BaseStatusOnlyInput.propTypes = {
  label: PropTypes.string.isRequired,
  statusOnly: PropTypes.bool.isRequired,
  status: PropTypes.string.isRequired,
};

export default BaseStatusOnlyInput;
