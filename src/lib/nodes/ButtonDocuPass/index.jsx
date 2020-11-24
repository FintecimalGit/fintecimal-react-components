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
  style
}) => {
  const classes = useStyles();
  const typeformEmbed = useRef();

  const handleClick = () => typeformEmbed.current.typeform.open();

  return (
    <div className={classes.root}>
      <ReactTypeformEmbed
        popup
        autoOpen={false}
        url={url}
        hideHeaders
        hideFooter
        ref={typeformEmbed}
        size={size}
        style={style}
      />
      <Button
        className={classes.button}
        variant="contained"
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
  size: 60,
  url: "http://fintecimal-nodos-test.herokuapp.com/portal/test",
  style: {},
};

ButtonDocuPass.propTypes = {
  text: PropTypes.string,
  size: PropTypes.number,
  url: PropTypes.string,
  style: PropTypes.object,
};

export default ButtonDocuPass;
