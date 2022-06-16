import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import RejectActions from "../RejectActions";

import useStyles from './style';
import DropZone from "../../DropZone";
import FilePreview from "../../FilePreview";
import FileFinder from '../../FileFinder';
import IneEditor from '../../IneEditor';
import DeleteDialog from '../../UploadDocuments/DeleteDialog';

const REVERSE = 'Reverse';
const FRONT = "Front";

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
  useEditorIne,
  multiple,
  accept,
  fileConvertion,
  rejectionDefaultNotes,
  hideActions,
  useDeleteDialog,
  onDelete,
  onDeleteAll,
  disableDelete,
}) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(0);
  const [search, setSearch] = useState('');
  const [positions, setPositions] = useState(['', '']);
  const titleRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const generateFileToURL = async () => {
    let response = await fetch(url);
    let data = await response.blob();
    let metadata = {
      type: data.type
    };
    let file = new File([data], title, metadata);
    if (file) setFile(file);
  };

  const generateFileToURLArray = async () => {
    for (let i = 0; i < url.length; i++) {
      let response = await fetch(url[i]);
      let data = await response.blob();
      let metadata = {
        type: data.type
      };
      let file = new File([data], title, metadata);
      if (file) files[i] = file;
    }
    setFile(files[0]);
  };

  useEffect(() => {
    if (url !== '' && typeof url === "string") generateFileToURL();
    else generateFileToURLArray();
  }, [url]);

  const handleOnDrop = (value, rejectedFiles = []) => {
    onHandlerReject(value, rejectedFiles);
    setFile(value[0]);
  };

  const handleOnDropByIndex = (acceptedFiles, rejectedFiles, index) => {
    const newPositions = [...positions];
    if (acceptedFiles.length) newPositions[index] = acceptedFiles[0];
    const prefix = index ? REVERSE : FRONT;
    setPositions(newPositions);
    onHandlerReject(acceptedFiles, rejectedFiles || [], prefix);
    setFile(value[0]);
  };

  const handleOnClick = (index, file) => {
    setFile(file);
    setCurrentFile(index);
    titleRef.current.scrollIntoView();
  };

  const handleOnSearch = (text) => {
    setSearch(text);
  };

  const checkPositionsLenght = () => {
    return positions.filter((_file) => _file !== '').length < 2;
  };

  const handleOnDeleteAll = () => {
    onDeleteAll();
    setFiles([]);
    setShowModal(false)
  };

  const deleteFile = (_files, remainPostion = false) => {
    const newFiles = [..._files];
    const index = newFiles.findIndex((_file) => _file === file);
    if (index !== -1 && remainPostion) newFiles[index] = '';
    else if (index !== -1) newFiles.splice(index, 1);
    return { newFiles, index };
  };

  const handleOnDelete = () => {
    const { newFiles, index } = deleteFile(files);
    onDelete(newFiles, file, index);
    setFiles(newFiles);
    setShowModal(false);
  };


  const getTheDropType = () => {
    if (files.length && !disableDelete) return (
      <FilePreview
        file={file}
        onDelete={useDeleteDialog ? () => setShowModal(true) : handleOnDelete}
        urlDocument={url}
        isRejected
      />
    );
    if (useEditorIne && checkPositionsLenght()) return (
      <IneEditor
        title={title}
        accept={accept}
        onChange={handleOnDropByIndex}
        values={positions}
        fileConvertion={fileConvertion}
        isIncorrect={true}
        disabledDelete
      />
    );
    return (
      <DropZone
        onDrop={handleOnDrop}
        isIncorrect={true}
        multiple={multiple}
      />
    );
  };

  return (
    <div>
      <DeleteDialog
        onCancel={() => setShowModal(false)}
        onDelete={handleOnDelete}
        onDeleteAll={handleOnDeleteAll}
        title="¿Deseas Borrar el/los documentos?"
        showModal={showModal && useDeleteDialog}
      />
      <div className={classes.titleContainer} ref={titleRef}>
        <div className={classes.titleLine}>
          <Typography className={classes.title}>
            {title}
          </Typography>
        </div>
        {
          !hideActions &&
          (<div className={classes.rejectAction}>
            <RejectActions
              rejectionOptions={rejectionOptions}
              rejectionDefaultNotes={rejectionDefaultNotes}
              handlerReject={onReject}
              rejected={rejected}
              size="small"
              rejectionData={rejectionData}
              showUndo={showUndo}
              onUndoRejection={onUndoRejection}
            />
          </div>)
        }
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
      {editable && rejected && getTheDropType()}
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
            disabledAdd
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
  rejectionDefaultNotes: PropTypes.array,
  rejectionData: PropTypes.object,
  onHandlerReject: PropTypes.func.isRequired,
  showUndo: PropTypes.bool,
  onUndoRejection: PropTypes.func,
  editable: PropTypes.bool,
  useEditorIne: PropTypes.bool,
  multiple: PropTypes.bool,
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  fileConvertion: PropTypes.func,
  hideActions: PropTypes.bool,
  useDeleteDialog: PropTypes.bool,
  onDelete: PropTypes.func,
  onDeleteAll: PropTypes.func,
  disableDelete: PropTypes.bool,
};

RejectDocuments.defaultProps = {
  title: '',
  onDrop: () => { },
  onReject: () => { },
  url: [],
  rejectionOptions: [],
  rejectionDefaultNotes: [],
  rejectionData: {
    reason: '',
    comments: ''
  },
  showUndo: false,
  onUndoRejection: () => { },
  editable: true,
  useEditorIne: false,
  multiple: true,
  accept: '',
  fileConvertion: () => { },
  hideActions: false,
  useDeleteDialog: true,
  onDelete: () => { },
  onDeleteAll: () => { },
  disableDelete: false,
};

export default RejectDocuments;
