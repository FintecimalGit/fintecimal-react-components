import React from 'react';
import PropTypes from 'prop-types';

import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd';
import FileThumbnail from '../../FileThumbnail';

const Drag = ({ file, index, moveCard, handleOnClick, selected, dragType }) => {
  const dropMonitor = (item, monitor) => {
    
    const dragIndex = monitor.getItem().index;
    const hoverIndex = index;

    if (dragIndex === hoverIndex) {
      return;
    }

    moveCard(dragIndex, hoverIndex);

    monitor.getItem().index = hoverIndex;
  };

  const [{ canDrop }, drop] = useDrop(
    () => ({
      accept: dragType,
      drop: dropMonitor,
      collect: (monitor) => ({
        canDrop: !!monitor.canDrop()
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
};

Drag.defaultProps = {
  file: new File([''], '', { type: '' }),
  selected: false,
  handleOnClick: () => {},
  dragType: 'file',
};

export default Drag;