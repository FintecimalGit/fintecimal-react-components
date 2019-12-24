import React from 'react';
import PropTypes from 'prop-types';

import HeaderCard from '../HeaderCard';
import useStyles from './style';

const PDFCard = ({ title, pdf, }) => {
  const clasess = useStyles();

  return (
    <HeaderCard title={title}>
      <div className={clasess.pdfContainer}>
        <iframe
          src={pdf}
          className={clasess.pdf}
        />
      </div>
    </HeaderCard>
  );
};

PDFCard.propTypes = {
  title: PropTypes.string,
  pdf: PropTypes.string,
};

PDFCard.defaultProps = {
  title: '',
  pdf: '',
};

export default PDFCard;
