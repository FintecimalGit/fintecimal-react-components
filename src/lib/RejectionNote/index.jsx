import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import 'moment/locale/es';

import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import CloseIcon from '@material-ui/icons/Close';

import useStyles from './style';

const RejectionNote = ({
  anchorElement,
  onClose,
  name,
  image,
  date,
  reason,
  comments,
}) => {
  const classes = useStyles();

  /**
   *
   * @param {String} string
   * @returns {String}
   */
  const avatarLetter = string => string.charAt(0).toUpperCase();

  /**
   * 
   * @param {Date|String} _date
   * @returns {String}
   */
  const formatDate = _date => moment(_date).format('LT, MMM, DD - YYYY').replace('-', 'del');

  return (
    <Popover
      anchorEl={anchorElement}
      open={Boolean(anchorElement)}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <Card className={classes.card}>
        <CardHeader
          className={classes.cardHeader}
          avatar={
            image
              ? (
                <Avatar alt={name} src={image} />
              )
              : (
                <Avatar aria-label="recipe" className={classes.avatar}>
                  <span>
                    { avatarLetter(name) }
                  </span>
                </Avatar>
              )
          }
          action={
            <IconButton
              className={classes.iconButton}
              aria-label="settings"
              onClick={onClose}
            >
              <CloseIcon className={classes.closeIcon} />
            </IconButton>
          }
          title={name}
          subheader={formatDate(date)}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body1" component="div">
            <div>Motivo de rechazo:</div>
            <div>{ reason }</div>
          </Typography>
          {
            comments && (
              <Typography variant="body1" component="div">
                <div>Comentarios: </div>
                <div>{ comments }</div>
              </Typography>
            )
          }
        </CardContent>
      </Card>
    </Popover>
  );
};

RejectionNote.propTypes = {
  anchorElement: PropTypes.any,
  onClose: PropTypes.func,
  name: PropTypes.string,
  image: PropTypes.string,
  date: PropTypes.instanceOf(Date),
  reason: PropTypes.string,
  comments: PropTypes.string,
};

RejectionNote.defaultProps = {
  anchorElement: null,
  onClose: () => {},
  name: '',
  image: '',
  date: new Date(),
  reason: '',
  comments: '',
};

export default RejectionNote;