import React, { memo } from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

import Text, { TYPES, COLORS, FONT_WEIGHTS } from '../Text';

import useStyles from './style';

const Header = ({
  title,
  description,
  enableOnBack,
  onBack,
  disabled,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {
        enableOnBack && (
          <div className={classes.onBackContainer}>
            <IconButton
              className={classes.iconButton}
              onClick={onBack}
              disabled={disabled}
            >
              <ArrowBackIcon
                className={classes.icon}
              />
            </IconButton>
          </div>
        )
      }
      <div >
        <Text
          type={TYPES.HEADER}
          color={COLORS.SECONDARY}
          fontWeigth={FONT_WEIGHTS.NORMAL}
          inline
        >
          { title }
        </Text>
        <Text
          type={TYPES.HEADER}
          color={COLORS.PRIMARY}
          inline
        >
          { ` ${description}` }
        </Text>
      </div>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  enableOnBack: PropTypes.bool,
  onBack: PropTypes.func,
  disabled: PropTypes.bool,
};

Header.defaultProps = {
  title: '',
  description: '',
  enableOnBack: false,
  onBack: () => {},
  disabled: false,
};

export default memo(Header);
