import React from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';

import { Flipper, Flipped } from "react-flip-toolkit";
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

import SearchBar from '../nodes/SearchBar';
import Add from './Add';
import Drag from './Drag';

const FileFinder = ({
  files,
  current,
  onClick,
  search,
  onSearch,
  placeholder,
  disabled,
  multiple, 
  accept, 
  onDrop, 
  flipId,
  moveCard,
  dragType,
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
    <DndProvider backend={HTML5Backend}>
      <Flipper flipKey={flipId} spring="stiff">
        <Grid container spacing={3}>
          {
            files.map((file, index) => (
              <Grid key={index} item sm={3}>
                <Flipped key={`${file.lastModified}${file.size}`} flipId={`${file.lastModified}${file.size}`}>
                  <div>
                    <Drag
                      dragType={dragType}
                      file={file}
                      key={`${file.lastModified}${file.size}`}
                      index={index}
                      moveCard={moveCard}
                      handleOnClick={handleOnClick}
                      selected={index === current}
                      enableDragDrop={!disabled}
                    />
                  </div>
                </Flipped>
              </Grid>
            ))
          }
            { !disabled && (
              <Grid item sm={3}>
                <Add 
                  multiple={multiple}
                  accept={accept}
                  onDrop={onDrop}
                />
              </Grid>
              )
            } 
        </Grid>
      </Flipper>
    </DndProvider>
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
  multiple: PropTypes.bool,
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onDrop: PropTypes.func,
  flipId: PropTypes.string,
  moveCard: PropTypes.func,
  dragType: PropTypes.string,
};

FileFinder.defaultProps = {
  files: [],
  current: 0,
  onClick: () => {},
  search: '',
  onSearch: () => {},
  placeholder: '',
  disabled: false,
  multiple: false,
  accept: '',
  onDrop: () => {},
  flipId: '1',
  moveCard: () => {},
  dragType: '',
};

export default FileFinder;