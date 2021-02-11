import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import RejectActions from "../RejectActions";

import useStyles from './style';
import DropZone from "../../DropZone";
import FilePreview from "../../FilePreview";
import FileFinder from '../../FileFinder';

const RejectDocuments = ({
                             title,
                             rejected,
                             onReject,
                             url,
                             rejectionOptions,
                             rejectionData,
                             onHandlerReject,
                             showUndo,
                             onUndoRejection,
                             editable,
                             multiple
                         }) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(0);
  const [search, setSearch] = useState('');

  const generateFileToURL = async () => {
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
      type: data.type
    };
    let file = new File([data], title, metadata);
    if(file) setFile(file);
  };

  const generateFileToURLArray = async () => {
    for (let i = 0; i < url.length; i++) {
      let response = await fetch(url[i]);
      let data = await response.blob();
      let metadata = {
        type: data.type
      };
      let file = new File([data], title, metadata);
      if(file) files[i] = file;
      console.log(multiple);
      console.log(files);
    }
    setFile(files[0]);
  };

  useEffect(() => {
    if(url !== '' && typeof url === "string") generateFileToURL();
    else generateFileToURLArray();
  }, [url]);

  const handleOnDrop = (value) => {
    onHandlerReject(value);
    setFile(value[0]);
  };

  const handleOnClick = (index, file) => {
    setFile(file);
    setCurrentFile(index);
  };

  const handleOnSearch = (text) => {
    setSearch(text);
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
          {file && !rejected && (
              <FilePreview
                  file={file}
                  onDelete={() => { setFile(null) }}
                  disabled={!rejected}
                  urlDocument={url}
              />
          )}
          {file && !editable && rejected && (
              <FilePreview
                  file={file}
                  onDelete={() => { setFile(null) }}
                  disabled={true}
                  urlDocument={url}
              />
          )}
          {editable && rejected && (
            <DropZone
                onDrop={handleOnDrop}
                isIncorrect={true}
                multiple={multiple}
            />
          )}
         {
          multiple && files.length > 0 && (
            <FileFinder
              files={files}
              current={currentFile}
              onClick={handleOnClick}
              search={search}
              onSearch={handleOnSearch}
              placeholder={'Buscar'}
              disabled={true}
            />
          )
        }
      </div>
  );
};

RejectDocuments.propTypes = {
    title: PropTypes.string.isRequired,
    onDrop: PropTypes.func.isRequired,
    onReject: PropTypes.func,
    url: PropTypes.any,
    rejectionOptions: PropTypes.array,
    rejectionData: PropTypes.object,
    onHandlerReject: PropTypes.func.isRequired,
    showUndo: PropTypes.bool,
    onUndoRejection: PropTypes.func,
    editable: PropTypes.bool,
    multiple: PropTypes.bool,
};

RejectDocuments.defaultProps = {
  title: '',
  onDrop: () => {},
  onReject: () => {},
  url: [],
  rejectionOptions: [],
  rejectionData: {
      reason: '',
      comments: ''
  },
  showUndo: false,
  onUndoRejection: () => {},
  editable: true,
  multiple: true,
};

export default RejectDocuments;
