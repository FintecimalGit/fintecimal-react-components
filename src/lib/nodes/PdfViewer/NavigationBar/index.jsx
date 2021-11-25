import React, { useState } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import CloudDownloadOutlined from '@material-ui/icons/CloudDownloadOutlined';

import useStyles from './style';

const NavigationBar = ({
  title, length, onDownloadFile, numPages, onEnterActualPage, handleScale, actualPage, handleActualPage,
}) => {
  const [scale, setScale] = useState(100);
  const classes = useStyles();

  const onChangeScale = (evt) => {
    const newValue = +evt.target.value.split('.')[0];
    if (newValue !== 0 && !newValue) return;
    setScale(newValue);
  };

  const onEnterScale = (evt, value) => {
    if (evt.key === 'Enter') {
      if (value < 50) {
        setScale(50);
        return;
      }
      if (value > 200) {
        setScale(200);
        return;
      }
      handleScale(evt, value);
      evt.preventDefault();
    }
    return;
  };

  const getTitleTruncate = (_title) => `${_title.substring(0, length)}...`;
  return (
    <AppBar position="static" className={classes.container}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          { getTitleTruncate(title) }
        </Typography>
        <div className={classes.pageIndicator}>
          <input type="text" value={actualPage} onKeyPress={(evt) => onEnterActualPage(evt)} onChange={handleActualPage} className={classes.inputPage} />
          <span> / { numPages }</span>
        </div>

        <div className={classes.pageIndicator}>
          <input type="text" value={scale} onKeyPress={(evt) => onEnterScale(evt, scale)} onChange={onChangeScale} className={classes.inputPage} />
          <span>%</span>
        </div>

        <IconButton edge="start" onClick={() => onDownloadFile(url)} className={classes.menuButton} color="inherit" aria-label="menu">
          <CloudDownloadOutlined />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

NavigationBar.propTypes = {
  title: PropTypes.string.isRequired,
  length: PropTypes.number,
  onDownloadFile: PropTypes.func.isRequired,
  handleScale: PropTypes.func.isRequired,
  numPages: PropTypes.number,
  onEnterActualPage: PropTypes.func.isRequired,
  actualPage: PropTypes.number.isRequired,
  handleActualPage: PropTypes.func.isRequired,
};

NavigationBar.defaultProps = {
  length: 20,
  numPages: 0,
};

export default NavigationBar;
