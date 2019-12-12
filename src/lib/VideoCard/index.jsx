import React from 'react';
import PropTypes from 'prop-types';

import HeaderCard from '../HeaderCard';
import useStyles from './style';

const SignatureVideo = ({
  title,
  video,
  onReject, // TODO
  rejectionOptions, // TODO
  status, // TODO
}) => {
  const clasess = useStyles();
  return (
    <HeaderCard title={title}>
      <video
        controls
        src={video}
        className={clasess.video}
      />
    </HeaderCard>
  );
};

SignatureVideo.propTypes = {
  title: PropTypes.string,
  video: PropTypes.string,
  onReject: PropTypes.func,
  rejectionOptions: PropTypes.array,
  status: PropTypes.string,
};

SignatureVideo.defaultProps = {
  title: 'FIRMA EN VIDEO',
  video: '',
  onReject: () => {},
  rejectionOptions: [],
  status: '',
};

export default SignatureVideo;
