import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Badge } from '@material-ui/core';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import useStyles from './style';

const CardApp = ({ title, count, onClick, Icon }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} onClick={onClick}>
      <Badge color="secondary" badgeContent={count} classes={{ badge: classes.badge }} max={999}>
        {typeof Icon === 'string' ? <img src={Icon} className={classes.image} /> : <Icon className={classes.icon} />}
      </Badge>
      <p className={classes.title}>{title}</p>
    </Paper>
  );
};

CardApp.defaultProps = {
  title: 'FORMAS',
  count: 23,
  onClick: () => {},
  Icon: 'https://fintecimal-test.s3.amazonaws.com/fintecimal-img/stepconfigs-icons/verificacion-general.png'
};

CardApp.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  onClick: PropTypes.func,
  Icon: PropTypes.object || PropTypes.string,
};

export default CardApp;
