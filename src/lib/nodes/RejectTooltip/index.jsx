import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import useStyles from './style';
import { Select, ButtonFlat } from '../index';

const ADD_COMMENT = 'Agregar comentario';
const REJECTION_REASON = 'Razón del rechazo';
const CLOSE = 'close';
const OPEN = 'open';
const CANCEL = 'Cancelar';
const REJECT = 'Rechazar';

const RejectTooltip = props => {
  const content = useRef();

  const [selectState, setSelectState] = useState(CLOSE);
  const [reason, setReason] = useState('');
  const [comments, setComments] = useState('');

  const isOtusidePopover = event =>
    Boolean(content.current && !content.current.contains(event.target));
  const isSelectClick = () => selectState === CLOSE;

  const handleClick = event => {
    const { onClose, active } = props;
    if (active && isOtusidePopover(event) && isSelectClick()) {
      setComments('');
    }
  };

  const handleClose = () => {
    const { onClose } = props;
    setReason('');
    setComments('');
    onClose();
  };

  const handleRejectReason = () => {
    const { handleReject } = props;
    setReason('');
    setComments('');
    handleReject({ reason, comments });
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });

  const { active, rejectionOptions } = props;
  const classes = useStyles();

  return (
    <div ref={content} className={classes.content} style={{ display: active ? 'flex' : 'none' }}>
      <div className={classes.select}>
        <Select
          selected={reason}
          handleChange={value => setReason(value)}
          onClose={() => setSelectState(CLOSE)}
          onOpen={() => setSelectState(OPEN)}
          label={REJECTION_REASON}
          options={rejectionOptions}
        />
      </div>
      <div className={classes.textAreaContent}>
        <textarea
          placeholder={ADD_COMMENT}
          className={classes.textarea}
          value={comments}
          onChange={e => setComments(e.target.value)}
        />
      </div>
      <div className={classes.footer}>
        <div className={classes.cancelContent}>
          <ButtonFlat className={classes.button} text={CANCEL} onClick={handleClose} />
        </div>
        <div className={classes.rejectContent}>
          <ButtonFlat
            className={classes.button}
            text={REJECT}
            onClick={handleRejectReason}
            disabled={!reason}
          />
        </div>
      </div>
    </div>
  );
};

RejectTooltip.propTypes = {
  active: PropTypes.bool,
  onClose: PropTypes.func,
  handleReject: PropTypes.func,
  rejectionOptions: PropTypes.array
};

RejectTooltip.defaultProps = {
  active: false,
  onClose: () => {},
  handleReject: () => {},
  rejectionOptions: []
};

export default RejectTooltip;
