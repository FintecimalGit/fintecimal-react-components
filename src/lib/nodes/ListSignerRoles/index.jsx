/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import SignerRolesStep from './SignerRolesStep';
import RemoveRedEyeRoundedIcon from '@material-ui/icons/RemoveRedEyeRounded';

import useStyles from './style';
import { data } from './data';

const ListSignerRoles = ({ options, selected, onChangeHandler, onSelectSection }) => {
  const classes = useStyles();
  const getClassFromStatus = (isSelect, complete, action) => {
    if (isSelect) return classes.labelSelected;
    if (!action && complete) return classes.labelDisabled;
    else if (complete) return classes.labelComplete;
    return classes.label;
  };
  const handleOnSelectSection = (section) => () => {
    onSelectSection(section);
  }
  return (
    <div>
      {options.map((option, index) => {
        const { label, complete, readOnly, values, action = true } = option;

        const isSelected = selected === index;
        return (
          <Fragment key={index}>
            <div
              className={classes.content}
              onClick={() => {
                action && onChangeHandler(index);
              }}
            >
              {isSelected && <div className={classes.selected} />}
              <p className={getClassFromStatus(isSelected, complete, action)}>{label}</p>
              {readOnly && <RemoveRedEyeRoundedIcon className={classes.icon} />}
            </div>
            {isSelected &&
              values.map((steps, index_step) => <SignerRolesStep key={index_step} step={steps} onSelectSection={handleOnSelectSection(steps)} />)}
          </Fragment>
        );
      })}
    </div>
  );
};

ListSignerRoles.propTypes = {
  options: PropTypes.array,
  selected: PropTypes.number,
  onChangeHandler: PropTypes.func,
  onSelectSection: PropTypes.func,
};

ListSignerRoles.defaultProps = {
  options: data,
  selected: 0,
  onChangeHandler: () => {},
  onSelectSection: () => {},
};

export default ListSignerRoles;
