import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import useStyles from './style';
import { PdfViewer } from '../nodes';
import DetectPdf from '../nodes/PdfViewer/detectPdf';
import SignersCarousel from '../SignersCarousel';
import HiddenDocument from './HiddenDocument';

const SIGNER_STATUS_PENDING = 'Pendiente';
const SIGNER_STATUS_SIGNED = 'Firmado';

const FilePreview = ({
  file,
  onDelete,
  onDownloadFile,
  disabled,
  urlDocument,
  edit,
  handleOnEdit,
  signers,
}) => {
  const clasess = useStyles();
  const [url, setUrl] = useState('');

  const readFile = () => {
    const reader  = new FileReader();
    reader.onloadend = function () {
      const _url = URL.createObjectURL(file);
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
    setUrl(urlDocument);
  };

  const handleOnDelete = () => {
    onDelete(file);
  };

  useEffect(() => {
    if (urlDocument && !Array.isArray(urlDocument)) {
      readUrlDocument();
    } else {
      readFile();
    }
  }, [file, urlDocument]);

  return (
    <Card className={clasess.card}>
      <CardHeader
        className={clasess.cardHeader}
        title={file.name}
        action={
          (
            <>
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
};

FilePreview.defaultProps = {
  file: new File([''], 'No Soportado', { type: '' }),
  onDelete: () => {},
  onDownloadFile: () => {},
  disabled: false,
  edit: false,
  handleOnEdit: () => {},
  signers: [],
};

export default FilePreview;
