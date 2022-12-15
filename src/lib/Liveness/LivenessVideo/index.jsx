import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HeaderCard from '../../HeaderCard';
import useStyles from './style';

const LivenessVideo = ({
  title,
  video,
}) => {
  const clasess = useStyles();

  return (
    <>
        <div className={clasess.videoContainer}>
          <video
            controls
            src={video}
            className={clasess.video}
          />
        </div>
    </>
  );
};

LivenessVideo.propTypes = {
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

LivenessVideo.defaultProps = {
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

export default LivenessVideo;
