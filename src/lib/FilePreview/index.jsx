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
  hasError = false,
  errorMessage = '',
  onRetry,
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
    if (!file || !(file instanceof File)) {
      return;
    }

    const docKey = getDocumentKey();
    if (!docKey) return;

    if (isLoadingRef.current && documentKeyRef.current === docKey) {
      return;
    }

    if (documentCache.has(docKey)) {
      const cachedUrl = documentCache.get(docKey);
      blobUrlRef.current = cachedUrl;
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }

    isLoadingRef.current = true;
    
    try {
      const _url = URL.createObjectURL(file);
      blobUrlRef.current = _url;
      documentCache.set(docKey, _url);
      isLoadingRef.current = false;
      setUrl(_url);
      setHasBeenLoaded(true);
    } catch (e) {
      console.error('Error creating blob URL:', e);
      isLoadingRef.current = false;
    }
  };

  const showDocument = useMemo(() => {
    if (!signers.length) return true;
    return !signers.some(({ status }) => status === SIGNER_STATUS_PENDING);
  }, [signers]);

  const renderFile = () => {
    if (hasError) {
      return (
        <div style={{ 
          minHeight: '400px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          color: '#d32f2f',
          flexDirection: 'column',
          gap: '15px',
          padding: '20px'
        }}>
          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>Error al cargar el documento</div>
          <div style={{ fontSize: '14px', color: '#666', textAlign: 'center' }}>
            {errorMessage || 'No se pudo cargar el documento'}
          </div>
          {onRetry && (
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onRetry();
              }}
              style={{
                padding: '10px 20px',
                backgroundColor: '#1976d2',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
            >
              Reintentar
            </button>
          )}
        </div>
      );
    }

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

    if (!file || !(file instanceof File)) {
      return null;
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
          onError={(e) => {
            e.target.style.display = 'none';
            console.error('Error al cargar la imagen');
          }}
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
      return (
        <iframe 
          title={file.name} 
          src={url}
          onLoad={(e) => {
            try {
              const iframe = e.target;
              if (iframe.contentDocument && iframe.contentDocument.body) {
                const body = iframe.contentDocument.body;
                if (body.innerHTML.includes('ERR_') || body.innerHTML.includes('Failed to load')) {
                  console.error('Error al cargar el documento en el iframe');
                }
              }
            } catch (err) {
            }
          }}
        />
      );
    }
    else return 'No Soportado';
  };

  const readUrlDocument = () => {
    const docKey = getDocumentKey();
    if (!docKey) return;

    if (isLoadingRef.current && documentKeyRef.current === docKey) {
      return;
    }

    if (documentCache.has(docKey)) {
      const cachedUrl = documentCache.get(docKey);
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }

    const currentDocKey = docKey;
    documentKeyRef.current = currentDocKey;
    documentCache.set(currentDocKey, urlDocument);
    requestAnimationFrame(() => {
      if (documentKeyRef.current === currentDocKey) {
        setUrl(urlDocument);
        setHasBeenLoaded(true);
      }
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
      observerRef.current = null;
    }

    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }

    const container = containerRef.current;
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

    observerRef.current.observe(container);

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
    if (!docKey) return;
    
    const previousKey = documentKeyRef.current;
    const documentChanged = previousKey !== docKey;
    
    if (documentChanged) {
      if (blobUrlRef.current && !documentCache.has(previousKey)) {
        try {
          URL.revokeObjectURL(blobUrlRef.current);
        } catch (e) {}
      }
      blobUrlRef.current = null;
      isLoadingRef.current = false;
      isIntersectingRef.current = false;
      documentKeyRef.current = docKey;
      
      setHasBeenLoaded(false);
      setUrl('');
      setIsVisible(true);
    }

    if (!lazyLoad) {
      setIsVisible(true);
      isIntersectingRef.current = true;
    }

    if (documentCache.has(docKey)) {
      const cachedUrl = documentCache.get(docKey);
      blobUrlRef.current = cachedUrl;
      setIsVisible(true);
      isIntersectingRef.current = true;
      setUrl(cachedUrl);
      setHasBeenLoaded(true);
      return;
    }

    if (!isLoadingRef.current) {
      if (urlDocument && !Array.isArray(urlDocument)) {
        readUrlDocument();
      } else if (file && file instanceof File) {
        readFile();
      }
    }

    return () => {
      const currentKey = documentKeyRef.current;
      if (blobUrlRef.current && currentKey && currentKey === docKey) {
        const newKey = getDocumentKey();
        if (newKey !== currentKey || !documentCache.has(currentKey)) {
          try {
            URL.revokeObjectURL(blobUrlRef.current);
          } catch (e) {
          }
        }
        if (newKey !== currentKey) {
          blobUrlRef.current = null;
        }
      }
    };
  }, [file, urlDocument, lazyLoad]);

  return (
    <Card className={clasess.card} ref={containerRef}>
      <CardHeader
        className={clasess.cardHeader}
        title={file && file.name ? file.name : 'Documento'}
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
  hasError: PropTypes.bool,
  errorMessage: PropTypes.string,
  onRetry: PropTypes.func,
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
  hasError: false,
  errorMessage: '',
  onRetry: undefined,
};

export default FilePreview;
