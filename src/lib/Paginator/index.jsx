import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IconButton from '@material-ui/core/IconButton';

import FirstPageIcon from '@material-ui/icons/FirstPage';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import LastPageIcon from '@material-ui/icons/LastPage';

import useStyles from './style';

const Paginator = ({ currentPage, totalPages, onChangePage }) => {
  const classes = useStyles();

  const [page, setPage] = useState(currentPage);

  const pages = useMemo(() => {
    let _totalPages = totalPages;
    let factor = 1;
    let accumulator = 1;
    const values = [];
    while(_totalPages > 0) {
      values.push(accumulator);
      accumulator += factor < 10 ? 1 : 10;
      _totalPages -= factor <= 10 ? 1 : 10;
      factor++;
    }
    return values;
  }, [totalPages]);

  /**
   *
   * @param {Number} _page
   * @returns {Number}
   */
  const findIndexPage = (_page) => {
    const foundIndex = pages.findIndex((element, index) => (
      _page >= element && (_page < pages[index + 1] || index === pages.length - 1)
    ));
    return foundIndex === -1 ? 0 : foundIndex;
  }

  const onFirstPage = () => {
    const _page = pages[0];
    setPage(_page);
    onChangePage(_page);
  };

  const onBeforePage = () => {
    const index = findIndexPage(page);
    if (index > 0) {
      const _page = pages[index - 1];
      setPage(_page);
      onChangePage(_page);
    }
  };

  const onSelectPage = _page => () => {
    setPage(_page);
    onChangePage(_page);
  };

  const onNextPage = () => {
    const index = findIndexPage(page);
    if (index < pages.length - 1) {
      const _page = pages[index + 1];
      setPage(_page);
      onChangePage(_page);
    }
  };

  const onLastPage = () => {
    const lasIndex = pages.length - 1;
    const _page = pages[lasIndex];
    setPage(_page);
    onChangePage(_page);
  };

  useState(() => {
    setPage(currentPage);
  }, [currentPage]);

  return (
    <div className={classes.paginator}>
      <IconButton
        className={classes.iconButton}
        onClick={onFirstPage}
      >
        <FirstPageIcon/>
      </IconButton>
      <IconButton
        className={classes.iconButton}
        onClick={onBeforePage}
      >
        <NavigateBeforeIcon/>
      </IconButton>
      {
        pages.map(_page => (
          <IconButton
            key={_page}
            className={classnames(
              classes.iconButton,
              { [classes.iconButtonActive]: page === _page }
            )}
            onClick={onSelectPage(_page)}
          >
            <span>
              { _page }
           </span>
          </IconButton>
        ))
      }
      <IconButton
        className={classes.iconButton}
        onClick={onNextPage}
      >
        <NavigateNextIcon/>
      </IconButton>
      <IconButton
        className={classes.iconButton}
        onClick={onLastPage}
      >
        <LastPageIcon/>
      </IconButton>
    </div>
  );
};

Paginator.propTypes = {
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onChangePage: PropTypes.func,
};

Paginator.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  onChangePage: () => {},
};

export default Paginator;
