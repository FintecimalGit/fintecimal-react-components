import React from 'react';
import { Box, Typography, Divider } from '@material-ui/core';
import useStyles from './style';
import clsx from 'clsx';

const Signer = ({
    id,
    label,
    status,
}) => {
  const classes = useStyles();
  return (
    <Box id={id} className={classes.signer}>
      <Typography className={classes.label} component="span">{label}</Typography>
      <Typography className={clsx(classes.status, {
        [classes.completed]: status === 'Firmado',
      })} component="span">{status}</Typography>
    </Box>
  );
};

const SignersCarousel = ({ signers }) => {
  const classes = useStyles();
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
          />
          {
            (index + 1) !== signers.length ? (
              <Divider className={classes.divider} orientation="vertical" flexItem />
            ) : ''
          }
          </>
        ))
      }
    </Box>
  )
}

export default SignersCarousel;