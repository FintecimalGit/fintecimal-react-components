import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import GetAppIcon from '@material-ui/icons/GetApp';

import useStyle from './style';

const HeaderCollapse = ({
  open,
  toggleOpen,
  title,
  children,
  container,
  onDownload,
  iconTooltip,
}) => {
  const clasess = useStyle();
  const [isOpen, setOpen] = useState(false);

  const toggleOpenIsOpen = () => {
    toggleOpen();
    setOpen(!isOpen);
  };

  const handleOnDownload = (event) => {
    event.preventDefault();
    event.stopPropagation();
    onDownload(event);
  }

  useEffect(() => {
    setOpen(open);
  }, [open]);

  return (
    <List>
      <ListItem
        button={!container}
        onClick={toggleOpenIsOpen}
        className={clasess.listItem}
      >
        <ListItemText className={clasess.listItemText} primary={title} />
        { onDownload && (
          <Tooltip title={iconTooltip}>
            <IconButton
              className={clasess.iconButtonContainer}
              onClick={handleOnDownload}
            >
              <GetAppIcon />
            </IconButton>
          </Tooltip>
        )}
        {
          !container && (
            <div className={clasess.iconContainer}>
              {
                isOpen
                  ? <RemoveIcon />
                  : <AddIcon />
              }
            </div>
          )
        }
      </ListItem>
      <Collapse in={isOpen || container} timeout="auto" unmountOnExit>
        { children }
      </Collapse>
    </List>
  );
};

HeaderCollapse.propTypes = {
  open: PropTypes.bool,
  toggleOpen: PropTypes.func,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]),
  container: PropTypes.bool,
  onDownload: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf([null]),
  ]),
  iconTooltip: PropTypes.string,
};

HeaderCollapse.defaultProps = {
  open: false,
  toggleOpen: () => {},
  title: '',
  children: '',
  container: false,
  onDownload: null,
  iconTooltip: '',
};

export default HeaderCollapse;
