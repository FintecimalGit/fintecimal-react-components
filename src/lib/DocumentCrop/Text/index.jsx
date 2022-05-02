import React, { memo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Typography from '@material-ui/core/Typography';

import useStyles from './style';

export const TYPES = {
  HEADER: 'header',
  PARAGRAPH: 'paragraph',
};

export const COLORS = {
  INITIAL: 'initial',
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  ERROR: 'error',
};

export const FONT_WEIGHTS = {
  LIGHTER: 'lighter',
  NORMAL: 'normal',
  BOLD: 'bold',
};

const Text = ({
  type,
  color,
  fontWeigth,
  center,
  disabled,
  children,
  inline,
}) => {
  const classes = useStyles();
  const variant = type === TYPES.HEADER ? 'body1' : 'body2';
  const inlineProps = true ? { display: 'inline' } : {};
  return (
    <Typography
      { ...inlineProps }
      variant={variant}
      color={color}
      className={classnames(
        [classes[fontWeigth]],
        {
          [classes.center]: center,
          [classes.disabled]: disabled,
        },
      )}
    >
      { children }
    </Typography>
  );
};

Text.propTypes = {
  inline: PropTypes.bool,
  type: PropTypes.oneOf(Object.values(TYPES)),
  color: PropTypes.oneOf(Object.values(COLORS)),
  fontWeigth: PropTypes.oneOf(Object.values(FONT_WEIGHTS)),
  center: PropTypes.bool,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
    PropTypes.number,
  ]),
};

Text.defaultProps = {
  inline: false,
  type: TYPES.PARAGRAPH,
  color: COLORS.INITIAL,
  fontWeigth: FONT_WEIGHTS.BOLD,
  center: false,
  disabled: false,
  children: '',
};

export default memo(Text);
