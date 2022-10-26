import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import pdfjsLib from 'pdfjs-dist/build/pdf';

if (pdfjsLib && pdfjsLib.GlobalWorkerOptions && pdfjsLib.GlobalWorkerOptions.workerSrc){
  pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.2.228/pdf.min.js';
}

import Typography from '@material-ui/core/Typography';

import VisibilityIcon from '@material-ui/icons/Visibility';

import useStyles from './style';

const FileThumbnail = ({ file, selected, onClick, isOver }) => {
  const clasess = useStyles();
  const [url, setUrl] = useState('');

  /**
   *
   * @param {String} type 
   * @returns {Boolean}
   */
  const isPDF = (type) => /application\/pdf/.test(type);

  /**
   *
   * @param {String} type 
   * @returns {Boolean}
   */
  const isImage = (type) => /^image\//.test(type);

  /**
   * @returns {Promise}
   */
  const fileToBase64 = () => new Promise((resolve) => {
    const reader  = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      resolve(reader.result);
    };
  });

  /**
   * @returns {Promise}
   */
  const fileToUint8Array = () => new Promise((resolve) => {
    const reader  = new FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => {
      resolve(new Uint8Array(reader.result));
    };
  });

  /**
   * 
   * @param {Number} page
   * @returns {DOMElement}
   */
  const transformPageToCanvas = async (page) => {
    const pageVp = page.getViewport({ scale: 1 });

    const canvas = document.createElement('canvas');
    canvas.width = pageVp.width;
    canvas.height = pageVp.height;

    await page.render({
      canvasContext: canvas.getContext('2d'),
      viewport: pageVp,
    }).promise;

    return canvas;
  };

  /**
   * 
   * @param {Object} pdf 
   */
  const transformFirstPDFPageToImage = (pdf) => {
    pdf.getPage(1).then(async (page) => {
      const canvasPDF = await transformPageToCanvas(page);
      const thumbnailPDF = canvasPDF.toDataURL();
      setUrl(thumbnailPDF);
    });
  };

  const readPDF = async () => {
    try {
      const file = await fileToUint8Array();
      const pdf = await pdfjsLib.getDocument(file).promise;
      await transformFirstPDFPageToImage(pdf);
    }
    catch(error) {
      setUrl('');
    }
  };

  const readImage = async () => {
    try {
      const file = await fileToBase64();
      setUrl(file);
    }
    catch(error) {
      setUrl('');
    }
  };
  
  const handleOnClick = () => {
    onClick(file);
  };

  useEffect(() => {
    const { type } = file;
    if (isPDF(type)) readPDF();
    if (isImage(type)) readImage();
  }, [file]);

  return (
    <div className={clasess.root} onClick={handleOnClick}>
      <div className={classnames(
      clasess.imageContainer,
      { [clasess.isOver]: isOver },
    )}>
        <img
          alt={file.name}
          src={url}
          className={clasess.image}
        />
        <div
          className={clasess.selector}
          style={selected ? { display: 'flex' } : {} }
        >
          <VisibilityIcon />
        </div>
      </div>
      <Typography
        className={classnames(
          clasess.typography,
          { [clasess.typographySelected]: selected },
        )}
      >
        { file.name }
      </Typography>
    </div>
  );
};

FileThumbnail.propTypes = {
  file: PropTypes.instanceOf(File),
  selected: PropTypes.bool,
  isOver: PropTypes.bool,
};

FileThumbnail.defaultProps = {
  file: new File([''], '', { type: '' }),
  selected: false,
  isOver: false,
};

export default FileThumbnail;