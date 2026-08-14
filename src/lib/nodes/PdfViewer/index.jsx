import React, { useState, useRef, useEffect, useMemo } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import PropTypes from 'prop-types';
import NavigationBar from './NavigationBar';
import useStyles from './style';

const IframeFallback = ({ url, title, minHeight }) => (
  <iframe
    title={title}
    src={url}
    style={{
      width: '100%',
      height: '100%',
      minHeight: minHeight || '600px',
      border: 'none',
      backgroundColor: '#202124',
      display: 'block',
    }}
  />
);

const PdfViewer = ({ url, onDownloadFile, marginTop }) => {
  const pageDataRef = useRef({});
  const documentRef = useRef(null);
  const stopScrollRef = useRef(false);
  const scaleRef = useRef(1);
  const [scale, setScale] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const [actualPage, setActualPage] = useState(1);
  const [loadFailed, setLoadFailed] = useState(false);
  const classes = useStyles();

  const memoizedUrl = useMemo(() => ({ url }), [url]);

  const getDocumentName = (_url) => _url.split('/').pop();

  const iframeFallback = useMemo(
    () => <IframeFallback url={url} title={getDocumentName(url)} minHeight="600px" />,
    [url],
  );

  const onDocumentLoadSuccess = ({ numPages: pages }) => {
    setLoadFailed(false);
    setNumPages(pages);
  };

  const onDocumentLoadError = () => {
    setLoadFailed(true);
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

  const onEnterActualPage = (evt) => {
    if (evt.key === 'Enter') {
      const offsetTop = [...Array(+actualPage).keys()].reduce((previousValue, currentValue) => {
        if (!currentValue) return 0;
        return (pageDataRef.current[currentValue].height * scale) + previousValue + marginTop;
      }, 0);
      stopScrollRef.current = true;
      documentRef.current.scrollTop = offsetTop;
      evt.preventDefault();
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
    const page1 = pageDataRef.current[1];
    if (!page1 || !page1.height) return;
    const value = +evt.target.scrollTop;
    const actual = Math.round(value / (page1.height * scaleRef.current + marginTop)) + 1;
    setActualPage(actual);
  };

  useEffect(() => {
    if (documentRef.current) documentRef.current.addEventListener('scroll', scrollDocument);
    return () => {
      if (documentRef.current) documentRef.current.removeEventListener('scroll', scrollDocument);
    };
  }, [numPages]);

  if (loadFailed) {
    return iframeFallback;
  }

  return (
    <>
      <NavigationBar
          actualPage={actualPage}
          handleActualPage={handleActualPage}
          handleScale={handleScale}
          onEnterActualPage={onEnterActualPage}
          numPages={numPages}
          onDownloadFile={onDownloadFile}
          title={getDocumentName(url)}
        />
        <Document
          file={memoizedUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          error={iframeFallback}
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
  onDownloadFile: PropTypes.func.isRequired,
  url: PropTypes.string.isRequired,
  marginTop: PropTypes.number,
};

PdfViewer.defaultProps = {
  marginTop: 16,
};

export default PdfViewer;
