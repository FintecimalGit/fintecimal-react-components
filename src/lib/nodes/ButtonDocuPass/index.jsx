import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import DescriptionIcon from '@material-ui/icons/Description';
import ReactTypeformEmbed from './components/ReactTypeformEmbed';

import useStyles from './style';

const ButtonDocuPass = ({
  text,
  size,
  url,
}) => {
  const classes = useStyles();
  const typeformEmbed = useRef();

  const handleClick = () => typeformEmbed.current.typeform.open();

  return (
    <div>
      <ReactTypeformEmbed
        popup
        autoOpen={false}
        url={url}
        hideHeaders
        hideFooter
        ref={typeformEmbed}
      />
      <Button
        className={classes.button}
        variant="contained"
        size={size}
        onClick={handleClick}
        startIcon={<DescriptionIcon/>}
      >
        {text}
      </Button>
    </div>
  )
};

ButtonDocuPass.defaultProps = {
  text: "DocuPass",
  size: "large",
  url: "http://localhost:8080/portal/test",
};

ButtonDocuPass.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  url: PropTypes.string,
};

export default ButtonDocuPass;
