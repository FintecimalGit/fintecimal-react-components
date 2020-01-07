import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import SearchBar from '../nodes/SearchBar';
import FileThumbnail from '../FileThumbnail';

const FileFinder = ({ files, onClick, placeholder }) => {
  const [selected, setSelected] = useState(0);
  const [search, setSearch] = useState('');

  const handleOnClick = index => (file) => {
    onClick(index, file);
    setSelected(index);
  };

  const handleOnEnter = (event) => {
    const {
      target: { value },
    } = event
    setSearch(value);
  };

  const filteredFiles = useMemo(() => {
    const searchLower = search.toLowerCase();
    return (
      files
        .map((file, index) => {
          const fileNameLower = file.name.toLowerCase();
          if (fileNameLower.includes(searchLower) || searchLower === '') return { file, index };
          return null;
        })
        .filter((file) => file !== null)
    );
  }, [files, search]);

  return (
    <Grid container spacing={3}>
      <Grid item sm={12}>
        <SearchBar
          placeholder={placeholder}
          onEnter={handleOnEnter}
        />
      </Grid>
      {
        filteredFiles.map(({ file, index }) => (
          <Grid item sm={3}> 
            <FileThumbnail
              file={file}
              onClick={handleOnClick(index)}
              selected={index === selected}
            />
          </Grid>
        ))
      }
    </Grid>
  );
};

FileFinder.propTypes = {
  files: PropTypes.arrayOf(PropTypes.instanceOf(File)),
  onClick: PropTypes.func,
  placeholder: PropTypes.string,
};

FileFinder.defaultProps = {
  files: [],
  onClick: () => {},
  placeholder: '',
};

export default FileFinder;