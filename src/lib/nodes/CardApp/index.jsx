import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Badge, IconButton } from '@material-ui/core';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import useStyles from './style';

const CardApp = ({ title, count, onClick, Icon, IconNotification, onClickNotification, showNotification }) => {
  const classes = useStyles();
  let notification;
  const onEventNotification =  (event) => {
    onClickNotification();
    event.stopPropagation();
  };
  if (showNotification) {
    notification = (typeof IconNotification === 'string' ? 
      <IconButton onClick={onEventNotification} className={classes.buttonNotification} >
        <img src={IconNotification} className={classes.iconNotification} />
      </IconButton> :
      <IconNotification className={classes.iconNotification} />);
  }
  return (
    <Paper className={classes.paper} onClick={onClick}>
      {notification}
      <Badge color="secondary" badgeContent={count} classes={{ badge: classes.badge }} max={999}>
        { typeof Icon === 'string' ? <img src={Icon} className={classes.image} /> : <Icon className={classes.icon} /> }
      </Badge>
      <p className={classes.title}>{title}</p>
    </Paper>
  );
};

CardApp.defaultProps = {
  title: 'FORMAS',
  count: 23,
  onClick: () => {},
  Icon: DescriptionOutlinedIcon,
  IconNotification: '',
  onClickNotification: () => {},
  showNotification: false,
};

CardApp.propTypes = {
  title: PropTypes.string,
  count: PropTypes.number,
  onClick: PropTypes.func,
  Icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  IconNotification: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  onClickNotification: PropTypes.func,
  showNotification: PropTypes.bool,
};

export default CardApp;
