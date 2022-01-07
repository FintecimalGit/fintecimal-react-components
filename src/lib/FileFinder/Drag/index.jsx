import React from 'react';

import { useDrag } from 'react-dnd'
import { useDrop } from 'react-dnd';
import FileThumbnail from '../../FileThumbnail';

const Types = {
  FILE: "file"
};

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
      accept: Types.FILE || dragType,
      drop: dropMonitor,
      collect: (monitor) => ({
        canDrop: !!monitor.canDrop()
      })
    }), 
    [index]
  );

  const [{isDragging}, drag] = useDrag(() => ({
    type: Types.FILE || dragType,
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

export default Drag;