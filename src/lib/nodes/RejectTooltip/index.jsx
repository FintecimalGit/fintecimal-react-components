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
  const [message, setMessage] = useState('');

  const isOtusidePopover = event =>
    Boolean(content.current && !content.current.contains(event.target));
  const isSelectClick = () => selectState === CLOSE;

  const handleClick = event => {
    const { onClose, active } = props;
    if (active && isOtusidePopover(event) && isSelectClick()) {
      setReason('');
      setMessage('');
      onClose();
    }
  };

  const handleClose = () => {
    const { onClose } = props;
    setReason('');
    setMessage('');
    onClose();
  };

  const handleRejectReason = () => {
    const { handleReject } = props;
    handleReject({ reason, message });
    setReason('');
    setMessage('');
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
    <div ref={content} className={classes.content} style={{ display: active ? 'block' : 'none' }}>
      <div className={classes.select}>
        <Select
          selected={reason}
          onChange={value => setReason(value)}
          onClose={() => setSelectState(CLOSE)}
          onOpen={() => setSelectState(OPEN)}
          placeholder={REJECTION_REASON}
          options={rejectionOptions}
        />
      </div>
      <div className={classes.textAreaContent}>
        <span className={classes.textareaTitle}>{`${ADD_COMMENT}:`}</span>
        <textarea
          className={classes.textarea}
          value={message}
          onChange={e => setMessage(e.target.value)}
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
