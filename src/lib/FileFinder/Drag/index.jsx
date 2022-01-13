import React from 'react';
import PropTypes from 'prop-types';

import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd';
import FileThumbnail from '../../FileThumbnail';

const Drag = ({ file, index, moveCard, handleOnClick, selected, dragType, enableDragDrop }) => {
  const dropMonitor = (item, monitor) => {
    
    const dragIndex = monitor.getItem().index;
    const hoverIndex = index;

    if (dragIndex === hoverIndex) {
      return;
    }

    moveCard(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  };

  const [{ isOver }, drop] = useDrop(
    () => ({
      accept: dragType,
      drop: dropMonitor,
      canDrop: (item, monitor) => enableDragDrop,
      collect: (monitor) => ({
        isOver: !!monitor.isOver()
      })
    }), 
    [index]
  );

  const [{isDragging}, drag] = useDrag(() => ({
    type: dragType,
    item: {index},
    collect: monitor => ({
      isDragging: !!monitor.isDragging(),
    }),
  }), [index]);

  return drag(drop(
    <div>
  <FileThumbnail
              file={file}
              onClick={handleOnClick(index)}
              selected={selected}
              isOver={isDragging ? false : isOver}
            />
            </div>
            )
                  )
};

Drag.propTypes = {
  file: PropTypes.instanceOf(File),
  moveCard: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  selected: PropTypes.bool,
  handleOnClick: PropTypes.func,
  dragType: PropTypes.string,
  enableDragDrop: PropTypes.bool,
};

Drag.defaultProps = {
  file: new File([''], '', { type: '' }),
  selected: false,
  handleOnClick: () => {},
  dragType: 'file',
  enableDragDrop: false,
};

export default Drag;