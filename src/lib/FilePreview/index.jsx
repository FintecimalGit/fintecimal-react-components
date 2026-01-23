import React, {
  useState,
  useEffect,
  useMemo,
  useRef,
} from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import useStyles from './style';
import { PdfViewer } from '../nodes';
import DetectPdf from '../nodes/PdfViewer/detectPdf';
import SignersCarousel from '../SignersCarousel';
import HiddenDocument from './HiddenDocument';

const SIGNER_STATUS_PENDING = 'Pendiente';
const SIGNER_STATUS_SIGNED = 'Firmado';

const STATUS = {
  0: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Reject_validation.png",
    label: "No se pudo hacer la validacion automatica",
  },
  1: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Accept_validation.png",
    label: "Documento Validado",
  },
  2: {
    image: "https://fintecimal-test.s3.amazonaws.com/VALIDATE_DOCUMENTS_ICONS/Reject_validation.png",
    label: "Documento No Valido",
  },
};

const documentCache = new Map();

const FilePreview = ({
  file,
  verify,
  onDelete,
  onDownloadFile,
  disabled,
  urlDocument,
  edit,
  handleOnEdit,
  signers,
  lazyLoad = true,
  isLoading = false,
}) => {
  const clasess = useStyles();
  const [url, setUrl] = useState('');
  const [isVisible, setIsVisible] = useState(!lazyLoad);
  const [hasBeenLoaded, setHasBeenLoaded] = useState(false);
  const blobUrlRef = useRef(null);
  const containerRef = useRef(null);
  const observerRef = useRef(null);
  const documentKeyRef = useRef(null);
  const isLoadingRef = useRef(false);
  const isIntersectingRef = useRef(false);
  const rafIdRef = useRef(null);

  const getDocumentKey = () => {
    if (urlDocument && !Array.isArray(urlDocument)) {
      return `url_${urlDocument}`;
    }
    if (file) {
      return `file_${file.name}_${file.size}_${file.lastModified}`;
    }
    return null;
  };

  const readFile = () => {
    const docKey = getDocumentKey();
    if (!docKey) return;

    if (isLoadingRef.current) return;

    if (documentCache.has(docKey)) {
      const cachedUrl = documentCache.get(docKey);
      blobUrlRef.current = cachedUrl;
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }

    if (blobUrlRef.current && documentKeyRef.current === docKey) {
      setUrl(blobUrlRef.current);
      setHasBeenLoaded(true);
      return;
    }

    if (blobUrlRef.current && documentKeyRef.current !== docKey) {
      if (!documentCache.has(documentKeyRef.current)) {
        try {
          URL.revokeObjectURL(blobUrlRef.current);
        } catch (e) {
        }
      }
      blobUrlRef.current = null;
    }

    isLoadingRef.current = true;
    const reader = new FileReader();
    reader.onloadend = function () {
      isLoadingRef.current = false;
      const _url = URL.createObjectURL(file);
      blobUrlRef.current = _url;
      documentKeyRef.current = docKey;
      documentCache.set(docKey, _url);
      requestAnimationFrame(() => {
        setUrl(_url);
        setHasBeenLoaded(true);
      });
    };
    reader.onerror = function () {
      isLoadingRef.current = false;
      console.error('Error al leer el archivo');
    };
    reader.readAsDataURL(file);
  };

  const showDocument = useMemo(() => {
    if (!signers.length) return true;
    return !signers.some(({ status }) => status === SIGNER_STATUS_PENDING);
  }, [signers]);

  const renderFile = () => {
    if (isLoading) {
      return (
        <div style={{ 
          minHeight: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#999',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div>Cargando documento...</div>
          <div style={{ fontSize: '12px', color: '#bbb' }}>Por favor espera</div>
        </div>
      );
    }

    if (lazyLoad && !isVisible && !hasBeenLoaded) {
      return (
        <div style={{ 
          minHeight: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#999'
        }}>
          Cargando...
        </div>
      );
    }

    if (!url && !hasBeenLoaded) {
      return (
        <div style={{ 
          minHeight: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#999'
        }}>
          Cargando documento...
        </div>
      );
    }

    if (/^image\//.test(file.type)) {
      return (
        <img 
          alt={file.name} 
          src={url} 
          height={'auto'} 
          style={{ 
            minHeight: '400px',
            maxWidth: '100%',
            objectFit: 'contain'
          }}
          loading="lazy"
        />
      );
    }
    else if(/^(text||application)\//.test(file.type)) {
      if (/^(application\/pdf)/.test(file.type) && !DetectPdf()) {
        return (
          <PdfViewer 
            url={url}
            onDownloadFile={onDownloadFile}
          />
        );
      }
      return <iframe title={file.name} src={url} />;
    }
    else return 'No Soportado';
  };

  const readUrlDocument = () => {
    const docKey = getDocumentKey();
    if (!docKey) return;

    if (isLoadingRef.current) return;

    if (documentCache.has(docKey)) {
      const cachedUrl = documentCache.get(docKey);
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }

    documentCache.set(docKey, urlDocument);
    requestAnimationFrame(() => {
      setUrl(urlDocument);
      setHasBeenLoaded(true);
    });
  };

  const handleOnDelete = () => {
    onDelete(file);
  };

  useEffect(() => {
    if (!lazyLoad) {
      setIsVisible(true);
      isIntersectingRef.current = true;
      return;
    }

    if (!containerRef.current) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (rafIdRef.current) {
          cancelAnimationFrame(rafIdRef.current);
        }

        rafIdRef.current = requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !isIntersectingRef.current) {
              isIntersectingRef.current = true;
              setIsVisible(true);
            }
          });
          rafIdRef.current = null;
        });
      },
      {
        root: null,
        rootMargin: '100px',
        threshold: 0.1,
      }
    );

    observerRef.current.observe(containerRef.current);

    return () => {
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [lazyLoad]);

  useEffect(() => {
    const docKey = getDocumentKey();
    const previousKey = documentKeyRef.current;
    
    if (previousKey && previousKey !== docKey) {
      setHasBeenLoaded(false);
      setUrl('');
      isLoadingRef.current = false;
      isIntersectingRef.current = false;
    }

    documentKeyRef.current = docKey;

    if (!isVisible && lazyLoad) return;

    if (docKey && documentCache.has(docKey)) {
      const cachedUrl = documentCache.get(docKey);
      blobUrlRef.current = cachedUrl;
      requestAnimationFrame(() => {
        setUrl(cachedUrl);
        setHasBeenLoaded(true);
      });
      return;
    }

    if (!isLoadingRef.current) {
      if (urlDocument && !Array.isArray(urlDocument)) {
        readUrlDocument();
      } else if (file) {
        readFile();
      }
    }

    return () => {
      const currentKey = documentKeyRef.current;
      if (blobUrlRef.current && currentKey) {
        const newKey = getDocumentKey();
        if (newKey !== currentKey || !documentCache.has(currentKey)) {
          try {
            URL.revokeObjectURL(blobUrlRef.current);
          } catch (e) {
          }
        }
        blobUrlRef.current = null;
      }
    };
  }, [file, urlDocument, isVisible, lazyLoad]);

  return (
    <Card className={clasess.card} ref={containerRef}>
      <CardHeader
        className={clasess.cardHeader}
        title={file.name}
        action={
          (
            <>
              {
                verify.status !== -1 ? 
                (
                    <Tooltip
                    title={STATUS[verify.status].label}
                    placement="top"
                    arrow
                  >
                    <span className={clasess.tooltipValidation}>
                      <img 
                        className={clasess.img}
                        src={STATUS[verify.status].image}
                        />
                    </span>
                  </Tooltip>
                  ) : ""
              }
              {
                !disabled && (
                    <IconButton
                        className={clasess.iconButton}
                        onClick={handleOnDelete}
                    >
                      <DeleteIcon />
                    </IconButton>
                )
              }
              {
                edit && (
                  <IconButton
                      className={clasess.iconButton}
                      onClick={handleOnEdit}
                  >
                    <EditIcon />
                  </IconButton>
                )
                }
            </>
          )
        }
      />
      { signers.length ? (
          <div className={clasess.containerCarousel}>
            <SignersCarousel signers={signers} />
          </div>
        ) : ''
      }
      <div className={clasess.container}>
        { showDocument ? renderFile() : (
          <HiddenDocument
            title="Son necesarios todos los firmantes para ver el documento"
          />
        ) }
      </div>
    </Card>
  );
};

FilePreview.propTypes = {
  file: PropTypes.instanceOf(File),
  verify: PropTypes.object,
  onDelete: PropTypes.func,
  onDownloadFile: PropTypes.func,
  disabled: PropTypes.bool,
  urlDocument: PropTypes.string,
  edit: PropTypes.bool,
  handleOnEdit: PropTypes.func,
  signers: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string,
    label: PropTypes.string,
    status: PropTypes.string,
  })),
  lazyLoad: PropTypes.bool,
  isLoading: PropTypes.bool,
};

FilePreview.defaultProps = {
  file: new File([''], 'No Soportado', { type: '' }),
  onDelete: () => {},
  onDownloadFile: () => {},
  disabled: false,
  edit: false,
  handleOnEdit: () => {},
  signers: [],
  verify: {
    status: -1,
  },
  lazyLoad: true,
  isLoading: false,
};

export default FilePreview;
