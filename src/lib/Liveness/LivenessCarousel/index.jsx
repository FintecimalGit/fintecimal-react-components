import React, { useState } from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import useStyles from './style';
import clsx from 'clsx';

const Signer = ({
    _id,
    label,
    status,
    score,
    onClick,
    isActualIndex,
}) => {
  console.log(score);
  const classes = useStyles();
  return (
    <Box id={_id}onClick={onClick} 
      className={clsx(classes.signer, {
        [classes.current]: isActualIndex,
      })}
    >
      <Typography className={classes.label} component="span">{label}</Typography>
        <Typography className={clsx(classes.status, {
          [classes.completed]: status === 'Verificado',
        })} component="span">{status}</Typography>
    </Box>
  );
};

const LivenessCarousel = ({ signers, onClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const classes = useStyles();

  const onChangeIndex = (index) => {
    setCurrentIndex(index);
    onClick(index);
  };
  return (
    <Box
      className={classes.container}
    >
      {
        signers.map(({
          _id,
          status,
          label,
        }, index) => (
          <>
          <Signer
            key={_id}
            id={_id}
            status={status}
            label={label}
            isActualIndex={currentIndex === index}
            onClick={() => onChangeIndex(index)}
          />
          {
            (index + 1) !== signers.length ? (
              <Divider orientation="vertical" flexItem />
            ) : ''
          }
          </>
        ))
      }
    </Box>
  )
}

export default LivenessCarousel;
