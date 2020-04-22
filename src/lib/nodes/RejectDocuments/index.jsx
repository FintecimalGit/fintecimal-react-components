import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import RejectActions from "../RejectActions";

import useStyles from './style';
import DropZone from "../../DropZone";
import FilePreview from "../../FilePreview";

const RejectDocuments = ({
                             title,
                             rejected,
                             onReject,
                             url,
                             rejectionOptions,
                             rejectionData,
                             onHandlerReject,
                             showUndo,
                             onUndoRejection
                         }) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);

  const renderFile = () => {
    if (/^image\//.test(file.type)) {
      return <img alt={file.name} src={url} />;
    }
    else if(/^(text||application)\//.test(file.type)) {
      return <iframe title={file.name} src={url} />;
    }
    else return 'No Soportado';
  };

  const generateFileToURL = async () => {
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
      type: data.type
    };
    let file = new File([data], title, metadata);
    if(file) setFile(file);
  };

  useEffect(() => {
    if(url !== '' && typeof url === "string" && rejected === false) generateFileToURL();
  }, [url]);

  const handleOnDrop = (value) => {
    onHandlerReject(value);
    setFile(value[0]);
  };

  return (
      <div>
          <div className={classes.titleContainer}>
              <div className={classes.titleLine}>
                  <Typography className={classes.title}>
                    { title }
                  </Typography>
              </div>
              <div className={classes.rejectAction}>
                  <RejectActions
                      rejectionOptions={rejectionOptions}
                      handlerReject={onReject}
                      rejected={rejected}
                      size="small"
                      rejectionData={rejectionData}
                      showUndo={showUndo}
                      onUndoRejection={onUndoRejection}
                  />
              </div>
          </div>
          {file && (
              <FilePreview
                  file={file}
                  onDelete={() => { setFile(null) }}
                  disabled={!rejected}
              />
          )}
          {rejected && !file && (
            <DropZone
                onDrop={handleOnDrop}
                isIncorrect={true}
            />
          )}
      </div>
  );
};

RejectDocuments.propTypes = {
    title: PropTypes.string.isRequired,
    onDrop: PropTypes.func.isRequired,
    onReject: PropTypes.func,
    url: PropTypes.string,
    rejectionOptions: PropTypes.array,
    rejectionData: PropTypes.object,
    onHandlerReject: PropTypes.func.isRequired,
    showUndo: PropTypes.bool,
    onUndoRejection: PropTypes.func,
};

RejectDocuments.defaultProps = {
  title: '',
  onDrop: () => {},
  onReject: () => {},
  url: '',
  rejectionOptions: [],
  rejectionData: {
      reason: '',
      comments: ''
  },
  showUndo: false,
  onUndoRejection: () => {},
};

export default RejectDocuments;