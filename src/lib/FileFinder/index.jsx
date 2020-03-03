import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import SearchBar from '../nodes/SearchBar';
import FileThumbnail from '../FileThumbnail';

const FileFinder = ({
  files,
  current,
  onClick,
  search,
  onSearch,
  placeholder,
  disabled
}) => {
  const handleOnClick = index => (file) => {
    onClick(index, file);
  };

  const handleOnEnter = (event) => {
    const {
      target: { value },
    } = event;
    onSearch(value);
  };

  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <SearchBar
          placeholder={placeholder}
          onEnter={handleOnEnter}
          value={search}
          disabled={disabled}
        />
      </Grid>
      {
        files.map((file, index) => (
          <Grid key={index} item sm={3}>
            <FileThumbnail
              file={file}
              onClick={handleOnClick(index)}
              selected={index === current}
            />
          </Grid>
        ))
      }
    </Grid>
  );
};

FileFinder.propTypes = {
  files: PropTypes.arrayOf(PropTypes.instanceOf(File)),
  current: PropTypes.number,
  onClick: PropTypes.func,
  search: PropTypes.string,
  onSearch: PropTypes.func,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

FileFinder.defaultProps = {
  files: [],
  current: 0,
  onClick: () => {},
  search: '',
  onSearch: () => {},
  placeholder: '',
  disabled: false
};

export default FileFinder;