import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HeaderCard from '../HeaderCard';
import RejectActions from '../nodes/RejectActions';
import useStyles from './style';

const SignatureVideo = ({
  title,
  video,
  onReject,
  rejectionOptions,
  rejectionData,
  rejected,
}) => {
  const clasess = useStyles();
  const [forceDisplay, setForceDisplay] = useState('none')

  const keep = () => {
    setForceDisplay('flex');
  };

  const leave = () => {
    setForceDisplay('none');
  };

  return (
    <div className={clasess.container}>
      <HeaderCard title={title}>
        <video
          controls
          src={video}
          className={clasess.video}
        />
      </HeaderCard>
      <div className={clasess.rejectContainer} style={{ display: rejected ? 'flex' : forceDisplay }}>
        <RejectActions
          rejectionOptions={rejectionOptions}
          rejected={rejected}
          handlerReject={onReject}
          rejectionData={rejectionData}
          onOpen={keep}
          onClose={leave}
        />
      </div>
    </div>
  );
};

SignatureVideo.propTypes = {
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

SignatureVideo.defaultProps = {
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

export default SignatureVideo;
