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
}) => {
  const clasess = useStyles();
  const [url, setUrl] = useState('');
  const [isVisible, setIsVisible] = useState(!lazyLoad);
  const blobUrlRef = useRef(null);
  const containerRef = useRef(null);

  const readFile = () => {
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }

    const reader = new FileReader();
    reader.onloadend = function () {
      const _url = URL.createObjectURL(file);
      blobUrlRef.current = _url;
      setUrl(_url);
    };
    reader.readAsDataURL(file);
  };

  const showDocument = useMemo(() => {
    if (!signers.length) return true;
    return !signers.some(({ status }) => status === SIGNER_STATUS_PENDING);
  }, [signers]);

  /**
   * @returns {DOMElement|String}
   */
  const renderFile = () => {
    if (lazyLoad && !isVisible) {
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

    if (!url) {
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
      return <img alt={file.name} src={url} height={'auto'} />;
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
    if (blobUrlRef.current) {
      URL.revokeObjectURL(blobUrlRef.current);
      blobUrlRef.current = null;
    }
    setUrl(urlDocument);
  };

  const handleOnDelete = () => {
    onDelete(file);
  };

  useEffect(() => {
    if (!lazyLoad) {
      setIsVisible(true);
      return;
    }

    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Cuando sale de vista, revocar el Blob URL para liberar memoria
            if (blobUrlRef.current && url.startsWith('blob:')) {
              URL.revokeObjectURL(blobUrlRef.current);
              blobUrlRef.current = null;
              setUrl(''); // Limpiar URL
              setIsVisible(false); // Marcar como no visible para recrear cuando vuelva
            }
          }
        });
      },
      {
        root: null, // viewport
        rootMargin: '100px', // Cargar 100px antes de que sea visible
        threshold: 0.1, // Trigger cuando 10% es visible
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [lazyLoad, url]);

  useEffect(() => {
    if (!isVisible && lazyLoad) return;

    if (urlDocument && !Array.isArray(urlDocument)) {
      readUrlDocument();
    } else if (file) {
      readFile();
    }

    // Cleanup: revocar Blob URL cuando el componente se desmonte o cambie el file/urlDocument
    return () => {
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
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
};

export default FilePreview;
