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
    if (file && file.isLoading) {
      return;
    }
    onClick(file);
  };

  useEffect(() => {
    if (!file) {
      setUrl('');
      return;
    }
    if (file.isLoading || file.error) {
      setUrl('');
      return;
    }
    if (file instanceof File) {
      const { type } = file;
      if (isPDF(type)) readPDF();
      if (isImage(type)) readImage();
    }
  }, [file]);

  if (file && file.isLoading) {
    return (
      <div className={clasess.root} style={{ cursor: 'wait', opacity: 0.8 }}>
        <div className={classnames(
          clasess.imageContainer,
          { [clasess.isOver]: isOver },
        )} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f5f5f5',
          border: '2px dashed #1976d2',
          position: 'relative'
        }}>
          <div style={{
            textAlign: 'center',
            color: '#1976d2',
            fontSize: '11px',
            fontWeight: '500',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '8px'
          }}>
            <div style={{
              width: '20px',
              height: '20px',
              border: '2px solid #e3f2fd',
              borderTop: '2px solid #1976d2',
              borderRadius: '50%',
              animation: 'spin 1s linear infinite'
            }}></div>
            <div>Cargando...</div>
          </div>
          <style>{`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}</style>
        </div>
        <Typography
          className={classnames(
            clasess.typography,
            { [clasess.typographySelected]: selected },
          )}
          style={{ color: '#1976d2' }}
        >
          { file.name || 'Cargando...' }
        </Typography>
      </div>
    );
  }

  if (file && file.error) {
    return (
      <div className={clasess.root} onClick={handleOnClick} style={{ cursor: 'pointer', opacity: 0.9 }}>
        <div className={classnames(
          clasess.imageContainer,
          { [clasess.isOver]: isOver },
        )} style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffebee',
          border: '2px dashed #f44336'
        }}>
          <div style={{
            textAlign: 'center',
            color: '#d32f2f',
            fontSize: '12px',
            fontWeight: '500'
          }}>
            <div>Error</div>
            <div style={{ fontSize: '10px', marginTop: '4px' }}>Click para reintentar</div>
          </div>
        </div>
        <Typography
          className={classnames(
            clasess.typography,
            { [clasess.typographySelected]: selected },
          )}
          style={{ color: '#d32f2f' }}
        >
          { file.name || 'Error al cargar' }
        </Typography>
      </div>
    );
  }

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
        { file.name }
      </Typography>
    </div>
  );
};

FileThumbnail.propTypes = {
  file: PropTypes.oneOfType([
    PropTypes.instanceOf(File),
    PropTypes.shape({
      name: PropTypes.string,
      isLoading: PropTypes.bool,
      error: PropTypes.bool,
      url: PropTypes.string,
    }),
  ]),
  selected: PropTypes.bool,
  isOver: PropTypes.bool,
};

FileThumbnail.defaultProps = {
  file: new File([''], '', { type: '' }),
  selected: false,
  isOver: false,
};

export default FileThumbnail;