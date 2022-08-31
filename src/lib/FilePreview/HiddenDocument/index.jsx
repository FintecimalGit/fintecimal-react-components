import React from 'react';
import { Box, Typography } from '@material-ui/core';

import useStyles from './style';

const HiddenDocument = ({
  title,
}) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.container}
    >
      <Typography
        className={classes.title}
        component="span"
      >
        {title}
      </Typography>
    </Box>
  )
}

export default HiddenDocument;
