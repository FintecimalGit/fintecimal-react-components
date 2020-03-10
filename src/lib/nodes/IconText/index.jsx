import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { status } from '../../commons/utils';
import classnames from 'classnames';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'stretch',
    background: 'whitesmoke',
    padding: 13,
    marginRight: -1,
    borderRadius: 4,
    border: 'solid 1px rgba(0, 0, 0, 0.2)',
    borderRight: 'none'
  },
  error: {
    borderColor: theme.palette.status.danger.main
  },
  focus: {
    borderWidth: 2,
    borderColor: theme.palette.primary.main
  },
  img: {
    flex: '1 1',
    alignSelf: 'stretch',
    marginBottom: 3,
    width: 24
  },
  text: {
    flex: '0 1',
    alignSelf: 'stretch',
    fontWeight: 'bold',
    margin: 0,
    fontSize: 11
  }
}));

const getClassByStatus = (inputStatus, classes) => {
  switch (inputStatus) {
    case status.FOCUS:
      return classes.focus;
    case status.ERROR:
      return classes.error;
    default:
      return classes.root;
  }
};

const IconText = ({ imgSrc, text, inputStatus }) => {
  const classes = useStyles();
  return (
    <div className={classnames(classes.root, getClassByStatus(inputStatus, classes))}>
      <img src={imgSrc} className={classes.img} />
      <p className={classes.text}>{text}</p>
    </div>
  );
};

IconText.defaultProps = {
  inputStatus: status.NORMAL
};

IconText.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  inputStatus: PropTypes.string
};

export default IconText;
