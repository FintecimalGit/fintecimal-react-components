import React from 'react';
import PropTypes from 'prop-types';

import IconButton from '@material-ui/core/IconButton';

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
    <div className={clasess.container}>
      <HeaderCard title={title}>
        <video
          controls
          src={video}
          className={clasess.video}
        />
      </HeaderCard>
      <div className={clasess.rejectContainer}>
        <IconButton>
          DisLIKE
        </IconButton>
      </div>
    </div>
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
  title: '',
  video: '',
  onReject: () => {},
  rejectionOptions: [],
  status: '',
};

export default SignatureVideo;
