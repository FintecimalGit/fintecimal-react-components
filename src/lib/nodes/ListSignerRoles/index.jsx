/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

import SignerRolesStep from './SignerRolesStep';
import RemoveRedEyeRoundedIcon from '@material-ui/icons/RemoveRedEyeRounded';

import useStyles from './style';
import data from './data.json';

const ListSignerRoles = ({ options, selected, onChangeHandler }) => {
  const classes = useStyles();
  const getClassFromStatus = (isSelect, complete) => {
    if (isSelect) return classes.labelSelected;
    if (complete) return classes.labelComplete;
    return classes.label;
  };
  return (
    <div>
      {options.map((option, index) => {
        const { label, complete, readOnly,values } = option;
        const isSelected = selected === index;
        return (
          <Fragment>
          <div
            key={index}
            className={classes.content}
            onClick={() => {
              onChangeHandler(index);
            }}
          >
            {isSelected && <div className={classes.selected} />}
            <p className={getClassFromStatus(isSelected, complete)}>{label}</p>
            {readOnly && <RemoveRedEyeRoundedIcon  className={classes.icon_space}/>}
          </div>
          { isSelected && values.map((steps) => <SignerRolesStep step={steps}/>)}
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
};

ListSignerRoles.defaultProps = {
  options: data,
  selected: 0,
  onChangeHandler: () => {},
};

export default ListSignerRoles;
