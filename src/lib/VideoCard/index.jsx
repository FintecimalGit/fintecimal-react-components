import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HeaderCard from '../HeaderCard';
import useStyles from './style';

const VideoCard = ({
  title,
  video,
}) => {
  const clasess = useStyles();

  return (
    <>
      <HeaderCard title={title}>
        <div className={clasess.videoContainer}>
          <video
            controls
            src={video}
            className={clasess.video}
          />
        </div>
      </HeaderCard>
    </>
  );
};

VideoCard.propTypes = {
  title: PropTypes.string,
  video: PropTypes.string,
  onReject: PropTypes.func,
  rejectionOptions: PropTypes.array,
  rejectionData: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.instanceOf(Date),
    reason: PropTypes.string,
    comments: PropTypes.string
  }),
};

VideoCard.defaultProps = {
  title: '',
  video: '',
  onReject: () => {},
  rejectionOptions: [],
  rejectionData: {
    name: '',
    image: '',
    date: new Date(),
    reason: '',
    comments: ''
  },
  rejected: false,
};

export default VideoCard;
