import React, { useState, useRef, useEffect } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import useStyles from './style';

const PdfViewer = ({ url, onDonwnloadFile, marginTop }) => {
  const pageDataRef = useRef({});
  const documentRef = useRef(null);
  const stopScrollRef = useRef(false);
  const scaleRef = useRef(1);
  const [scale, setScale] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const classes = useStyles();

  const onDocumentLoadSuccess = ({ numPages: pages }) => {
    setNumPages(pages);
  };

  const onPageLoadSuccess = ({ _pageIndex, _pageInfo }) => {
    const index = _pageIndex;
    const { view } = _pageInfo;
    pageDataRef.current = { ...pageDataRef.current, [index]: { width: view[2], height: view[3] } };
  };

  const handleActualPage = (evt) => {
    const newValue = +evt.target.value.split('.')[0];
    if ((newValue !== 0 && !newValue) || (newValue > numPages)) return;
    setActualPage(newValue);
  };

  const getDocumentName = (_url) => _url.split('/').pop();

  const onEnterActualPage = (evt) => {
    if (evt.key === 'Enter') {
      const offsetTop = [...Array(+actualPage).keys()].reduce((previousValue, currentValue) => {
        if (!currentValue) return 0;
        return (pageDataRef.current[currentValue].height * scale) + previousValue + marginTop;
      }, 0);
      stopScrollRef.current = true;
      documentRef.current.scrollTop = offsetTop;
    }
  };

  const handleScale = (evt, value) => {
    const newScale = Math.round(value * 100) / 10000;
    scaleRef.current = newScale;
    setScale(newScale);
  };

  const scrollDocument = (evt) => {
    if (stopScrollRef.current) {
      stopScrollRef.current = false;
      return;
    }
    const value = +evt.target.scrollTop;
    const actual = Math.round(value / (pageDataRef.current[1].height * scaleRef.current + marginTop)) + 1;
    setActualPage(actual);
  };

  useEffect(() => {
    if (documentRef.current) documentRef.current.addEventListener('scroll', scrollDocument);
    return () => {
      documentRef.current.removeEventListener('scroll', scrollDocument);
    };
  }, [numPages]);

  return (
    <>
      <NavigationBar
          actualPage={actualPage}
          handleActualPage={handleActualPage}
          handleScale={handleScale}
          onEnterActualPage={onEnterActualPage}
          numPages={numPages}
          onDonwnloadFile={onDonwnloadFile}
          title={getDocumentName(url)}
        />
        <Document
          file={{ url }}
          onLoadSuccess={onDocumentLoadSuccess}
          className={classes.container}
          inputRef={documentRef}
        >
          {Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                scale={scale}
                onLoadSuccess={onPageLoadSuccess}
                key={`page_${index + 1}`}
                pageNumber={index + 1}
                className={classes.page}
              />
            ),
          )}
        </Document>
      </>
  );
};

PdfViewer.propTypes = {
  onDonwnloadFile: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
};

PdfViewer.defaultProps = {
  marginTop: 16,
};

export default PdfViewer;
