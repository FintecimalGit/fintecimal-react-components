import React, { useState, useMemo, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
const { v4: uuidv4 } = require('uuid');

import { arrayMoveImmutable } from "array-move";


import DropZone from '../DropZone';
import FilePreview from '../FilePreview';
import FileFinder from '../FileFinder';
import DeleteDialog from './DeleteDialog';
import IneEditor from '../IneEditor';

import useStyles from './style';
import { fetchWithRetry } from './utils/fetchWithRetry';

const REVERSE = 'Reverse';
const FRONT = "Front";

const REVERSA = 'Reverso';
const FRONTAL = "Frontal";

const UploadDocuments = ({
  title,
  multiple,
  accept,
  onDrop,
  onDelete,
  onDeleteAll,
  onDownloadFile,
  onMove,
  useDeleteDialog,
  placeholder,
  url,
  disabled,
  required,
  useEditorIne,
  fileConvertion,
  verify,
}) => {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [currentFile, setCurrentFile] = useState(0);
  const [search, setSearch] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [flipId, setFlipId] = useState('1');
  const [filesOrder, setFilesOrder] = useState([]);
  const [isLoadingDocuments, setIsLoadingDocuments] = useState(false);
  const [loadingStates, setLoadingStates] = useState({});
  const [failedUrls, setFailedUrls] = useState([]);
  const userSelectedFileRef = useRef(null);
  const lastUserSelectionRef = useRef(null);

  const titleRef = useRef(null);

  const filteredFiles = useMemo(() => {
    const searchLower = search.toLowerCase();
    return (
      files
        .map((file) => {
          const fileNameLower = file ? file.name.toLowerCase() : '';
          if (fileNameLower.includes(searchLower) || searchLower === '') return file;
          return null;
        })
        .filter((file) => file !== null && file !== '')
    );
  }, [files, search]);

  /**
   * @returns {Array}
   */
   const deleteFile = (_files, remainPostion = false) => {
    const newFiles = [..._files];
    const index = newFiles.findIndex((_file) => _file === file);
    if (index !== -1 && remainPostion) newFiles[index] = '';
    else if (index !== -1) newFiles.splice(index, 1);
    return { newFiles, index };
  };

  /**
   *
   * @param {Array} acceptedFiles 
   */
  const handleOnDrop = (acceptedFiles, rejectedFiles) => {
    setFiles(acceptedFiles);
    setSearch('');
    onDrop(acceptedFiles, rejectedFiles);
  };

  const handleOnAdd = (acceptedFiles, rejectedFiles) => {
  //  setFiles([...acceptedFiles, ...files]);
  setFiles([...files, ...acceptedFiles]);
   setSearch('');
   onDrop(acceptedFiles, rejectedFiles);
  };

  const handleOnDropByIndex = (acceptedFiles, rejectedFiles, index) => {
    const newFilesOrder = [...filesOrder];
    if(acceptedFiles.length) newFilesOrder[index] = acceptedFiles[0];
    const prefix = index ? REVERSE : FRONT;
    setFiles([...acceptedFiles, ...files]);
    setFilesOrder(newFilesOrder);
    onDrop(acceptedFiles, rejectedFiles, prefix);
  };

  const handleOnDelete = () => {
    if (useEditorIne) {
      const { newFiles: newFilesOrder } = deleteFile(filesOrder, true);
      setFilesOrder(newFilesOrder);
    }
    const { newFiles, index } = deleteFile(files);
    onDelete(newFiles, file, index);
    setFiles(newFiles);
    setShowModal(false);
  };

  const moveCard = (oldIndex, newIndex) => {
    setFlipId((oldFlip) => {
      return uuidv4();
    });
    setFiles((oldFiles) => {
      return arrayMoveImmutable(
        oldFiles,
        oldIndex,
        newIndex
      );
    });
    onMove(oldIndex, newIndex);
  };


  const handleOnDeleteAll = () => {
    onDeleteAll();
    setFilesOrder(['', '']);
    setFiles([]);
    setShowModal(false)
  };

  const getFileKey = (f) => {
    if (!f) return null;
    if (f instanceof File) {
      return `file_${f.name}_${f.size}_${f.lastModified}`;
    }
    if (f.url) {
      return `url_${f.url}`;
    }
    if (f.index !== undefined) {
      return `index_${f.index}`;
    }
    return null;
  };

  const handleOnClick = (index, file) => {
    if (!file) return;
    
    const fileKey = getFileKey(file);
    const actualIndex = filteredFiles.findIndex(f => getFileKey(f) === fileKey);
    let actualFile = actualIndex >= 0 ? filteredFiles[actualIndex] : file;
    
    if (actualFile && (actualFile.isLoading || actualFile.error)) {
      const realFileInFiles = files.find(f => {
        if (!f) return false;
        if (f instanceof File) {
          const fKey = getFileKey(f);
          return fKey === fileKey;
        }
        const fKey = getFileKey(f);
        if (fKey !== fileKey) {
          if (f.url && file.url && f.url === file.url && !f.isLoading && !f.error) {
            return true;
          }
          return false;
        }
        if (!f.isLoading && !f.error) return true;
        return false;
      });
      if (realFileInFiles) {
        actualFile = realFileInFiles;
      }
    }
    
    const realIndex = files.findIndex(f => {
      if (!f) return false;
      const fKey = getFileKey(f);
      return fKey === getFileKey(actualFile);
    });
    
    userSelectedFileRef.current = actualFile;
    lastUserSelectionRef.current = actualFile;
    
    setFile(actualFile);
    setCurrentFile(realIndex >= 0 ? realIndex : index);
    
    setTimeout(() => {
      if (userSelectedFileRef.current === actualFile) {
        userSelectedFileRef.current = null;
      }
    }, 2000);
    
    titleRef.current.scrollIntoView();
  };

  /**
   *
   * @param {String} text
   */
  const handleOnSearch = (text) => {
    setSearch(text);
  };

  const sortFiles = (arrayFiles) => arrayFiles.map((_file) => {
    const { name = '' } = _file;
    if (name.includes(REVERSA)) {
      return { position: 2, _file };
    }
    else if(name.includes(FRONTAL)) {
      return { position: 0, _file };
    }
    return { position: 1, _file };
  }).sort((a, b) => {
    if (a.position > b.position) return 1;
    if (a.position < b.position) return -1;
    return 0;
  }).map(({ _file }) => _file);

  const fillFiles = (arrayFiles) => {
    if (!arrayFiles.length) return ['', ''];
    if (arrayFiles.length === 1) return [...arrayFiles, ''];
    return arrayFiles;
  };

  const constructFiles = (arrayFiles) => {
    const newFiles = fillFiles(arrayFiles);
    return sortFiles(newFiles);
  };

  const getTitle = (_url, title) => {
    if (_url.includes(REVERSE)) return REVERSA;
    if (_url.includes(FRONT)) return FRONTAL;
    return title;
  }

  const createLoadingPlaceholder = (url, index) => {
    const _title = useEditorIne ? getTitle(url, title) : title;
    return {
      name: _title,
      url: url,
      isLoading: true,
      index: index,
      size: 0,
      type: 'application/octet-stream',
      lastModified: Date.now(),
    };
  };

  const loadDocumentSequentially = async (url, index, isRetry = false) => {
    if (!url) return null;

    setLoadingStates(prev => ({
      ...prev,
      [index]: { loading: true, error: false }
    }));

    try {
      const response = await fetchWithRetry(url, {
        maxRetries: isRetry ? 1 : 2,
        timeout: 180000,
        sequential: isRetry,
      });
      
      const data = await response.blob();
      const metadata = {
        type: data.type || response.headers.get('content-type') || 'application/octet-stream'
      };
      const _title = useEditorIne ? getTitle(url, title) : title;
      const file = new File([data], _title, metadata);

      setLoadingStates(prev => ({
        ...prev,
        [index]: { loading: false, error: false }
      }));

      return file;
    } catch (err) {
      console.error(`Error al cargar documento ${index + 1} (${url}):`, err);
      
      setLoadingStates(prev => ({
        ...prev,
        [index]: { loading: false, error: true, errorMessage: err.message }
      }));

      return {
        name: useEditorIne ? getTitle(url, title) : title,
        url: url,
        error: true,
        errorMessage: err.message,
        index: index,
      };
    }
  };

  const generateFilesToURL = async (arrayUrl, isRetry = false) => {
    if (!arrayUrl || !Array.isArray(arrayUrl) || arrayUrl.length === 0) {
      setIsLoadingDocuments(false);
      return;
    }

    if (!isRetry) {
      setLoadingStates({});
      setFailedUrls([]);
    }

    setIsLoadingDocuments(true);

    const placeholders = arrayUrl
      .map((url, index) => url ? createLoadingPlaceholder(url, index) : null)
      .filter(p => p !== null);

    if (placeholders.length > 0 && !isRetry) {
      setFiles(placeholders);
      const firstPlaceholder = placeholders[0];
      if (firstPlaceholder) {
        setFile(firstPlaceholder);
      }
    }

    if (isRetry) {
      const retryPlaceholders = arrayUrl
        .map((url, index) => {
          if (!url) return null;
          const existingFile = files.find(f => f && (f.error && f.url === url));
          if (existingFile) {
            return createLoadingPlaceholder(url, existingFile.index || index);
          }
          return createLoadingPlaceholder(url, index);
        })
        .filter(p => p !== null);

      if (retryPlaceholders.length > 0) {
        setFiles(prevFiles => {
          const newFiles = [...prevFiles];
          retryPlaceholders.forEach(placeholder => {
            const fileIndex = newFiles.findIndex(f => f && (f.error && f.url === placeholder.url));
            if (fileIndex >= 0) {
              newFiles[fileIndex] = placeholder;
            }
          });
          return newFiles.filter(f => f !== null);
        });
        if (retryPlaceholders[0]) {
          setFile(retryPlaceholders[0]);
        }
      }

      const loadedFiles = [];
      
      for (let i = 0; i < arrayUrl.length; i++) {
        const url = arrayUrl[i];
        if (!url) {
          loadedFiles.push(null);
          continue;
        }

        const existingFile = files.find(f => f && (f.error && f.url === url));
        const index = existingFile ? (existingFile.index !== undefined ? existingFile.index : i) : i;

        const file = await loadDocumentSequentially(url, index, true);
        loadedFiles.push(file);

        if (file && !file.error) {
          setFiles(prevFiles => {
            const newFiles = [...prevFiles];
            const fileIndex = newFiles.findIndex(f => f && (f.index === index || (f.error && f.url === url) || (f.isLoading && f.url === url)));
            if (fileIndex >= 0) {
              newFiles[fileIndex] = file;
            } else {
              newFiles.push(file);
            }
            return newFiles.filter(f => f !== null);
          });
          
          const firstValidFile = file;
          if (firstValidFile && !firstValidFile.isLoading) {
            setFile(firstValidFile);
          }
        } else if (file && file.error) {
          setFiles(prevFiles => {
            const newFiles = [...prevFiles];
            const fileIndex = newFiles.findIndex(f => f && (f.index === index || (f.error && f.url === url) || (f.isLoading && f.url === url)));
            if (fileIndex >= 0) {
              newFiles[fileIndex] = file;
            }
            return newFiles.filter(f => f !== null);
          });
        }
      }

      const validFiles = loadedFiles.filter(f => f !== null);
      
      if (useEditorIne && validFiles.length > 0) {
        const newSortFiles = constructFiles(validFiles);
        setFilesOrder(newSortFiles);
      }

      setIsLoadingDocuments(false);
      return;
    }

    const loadPromises = arrayUrl.map(async (url, index) => {
      if (!url) return null;
      
      try {
        const file = await loadDocumentSequentially(url, index, false);
        
        if (file && !file.error) {
          setFiles(prevFiles => {
            const newFiles = [...prevFiles];
            const fileIndex = newFiles.findIndex(f => f && (f.isLoading && f.index === index));
            if (fileIndex >= 0) {
              newFiles[fileIndex] = file;
            } else {
              newFiles.push(file);
            }
            
            const firstValidFile = newFiles.find(f => !f.error && !f.isLoading);
            if (firstValidFile && !firstValidFile.isLoading) {
              setFile(firstValidFile);
            }
            
            return newFiles.filter(f => f !== null);
          });
        } else if (file && file.error) {
          setFailedUrls(prev => [...prev, { url, index }]);
          setFiles(prevFiles => {
            const newFiles = [...prevFiles];
            const fileIndex = newFiles.findIndex(f => f && (f.isLoading && f.index === index));
            if (fileIndex >= 0) {
              newFiles[fileIndex] = file;
            }
            return newFiles.filter(f => f !== null);
          });
        }
        
        return file;
      } catch (error) {
        console.error(`Error al cargar documento ${index + 1}:`, error);
        const errorFile = {
          name: useEditorIne ? getTitle(url, title) : title,
          url: url,
          error: true,
          errorMessage: error.message,
          index: index,
        };
        setFailedUrls(prev => [...prev, { url, index }]);
        return errorFile;
      }
    });

    const loadedFiles = await Promise.all(loadPromises);

    const validFiles = loadedFiles.filter(f => f !== null);
    
    if (useEditorIne && validFiles.length > 0) {
      const newSortFiles = constructFiles(validFiles);
      setFilesOrder(newSortFiles);
    }
    
    setFiles(validFiles);
    
    const firstValidFile = validFiles.find(f => !f.error && !f.isLoading);
    if (firstValidFile && !firstValidFile.isLoading) {
      setFile(firstValidFile);
    } else if (validFiles.length > 0) {
      setFile(validFiles[0]);
    }

    setIsLoadingDocuments(false);
  };

  const retryFailedDocuments = async (specificFile = null) => {
    let urlsToRetry = [];
    let currentFailedUrls = [];

    if (specificFile && specificFile.error && (specificFile.url || url)) {
      const retryUrl = specificFile.url || url;
      const retryIndex = specificFile.index !== undefined ? specificFile.index : files.findIndex(f => f === specificFile);
      currentFailedUrls = [{ url: retryUrl, index: retryIndex >= 0 ? retryIndex : 0 }];
    } else if (failedUrls.length > 0) {
      currentFailedUrls = [...failedUrls];
    } else {
      return;
    }

    setFailedUrls([]);
    setIsLoadingDocuments(true);
    
    const retryPlaceholders = currentFailedUrls.map(({ url, index }) => 
      createLoadingPlaceholder(url, index)
    );

    let updatedFilesAfterPlaceholders = [];
    setFiles(prevFiles => {
      const newFiles = [...prevFiles];
      retryPlaceholders.forEach(placeholder => {
        const fileIndex = newFiles.findIndex(f => f && (f.error && f.url === placeholder.url));
        if (fileIndex >= 0) {
          newFiles[fileIndex] = placeholder;
        }
      });
      updatedFilesAfterPlaceholders = newFiles.filter(f => f !== null);
      return updatedFilesAfterPlaceholders;
    });
    
    if (specificFile && retryPlaceholders[0]) {
      const currentFileKey = getFileKey(file);
      const retryFileKey = getFileKey(specificFile);
      const retryUrlKey = `url_${retryPlaceholders[0].url}`;
      
      if (currentFileKey === retryFileKey || currentFileKey === retryUrlKey || !currentFileKey) {
        setFile(retryPlaceholders[0]);
        const placeholderIndex = updatedFilesAfterPlaceholders.findIndex(f => f && f.url === retryPlaceholders[0].url);
        if (placeholderIndex >= 0) {
          setCurrentFile(placeholderIndex);
        }
        userSelectedFileRef.current = null;
        lastUserSelectionRef.current = null;
      }
    }
    
    for (let i = 0; i < currentFailedUrls.length; i++) {
      const { url, index } = currentFailedUrls[i];
      const file = await loadDocumentSequentially(url, index, true);
      
      if (file && !file.error) {
        setFiles(prevFiles => {
          const newFiles = [...prevFiles];
          const fileIndex = newFiles.findIndex(f => f && (f.index === index || (f.error && f.url === url) || (f.isLoading && f.url === url)));
          if (fileIndex >= 0) {
            newFiles[fileIndex] = file;
          } else {
            newFiles.push(file);
          }
          const updatedFiles = newFiles.filter(f => f !== null);
          
          const firstValidFile = file;
          if (firstValidFile && !firstValidFile.isLoading) {
            const foundIndex = updatedFiles.findIndex(f => f && ((f.error && f.url === url) || (f.isLoading && f.url === url) || f === firstValidFile));
            if (foundIndex >= 0) {
              const retryFileKey = getFileKey(firstValidFile);
              const retryUrlKey = `url_${url}`;
              
              const currentFileInState = file;
              const currentFileKey = currentFileInState ? getFileKey(currentFileInState) : null;
              
              if (currentFileKey === retryFileKey || currentFileKey === retryUrlKey) {
                setCurrentFile(foundIndex);
                setFile(firstValidFile);
              } else if (!userSelectedFileRef.current && !lastUserSelectionRef.current) {
                const prevFileInState = prevFiles.find(f => f && !f.error && !f.isLoading && (f.url === url || f.isLoading && f.url === url)) || prevFiles[0];
                const prevFileKey = prevFileInState ? getFileKey(prevFileInState) : null;
                
                if (!prevFileKey || prevFileKey === retryFileKey || prevFileKey === retryUrlKey) {
                  setCurrentFile(foundIndex);
                  setFile(firstValidFile);
                }
              }
            }
          }
          
          return updatedFiles;
        });
      } else if (file && file.error) {
        setFiles(prevFiles => {
          const newFiles = [...prevFiles];
          const fileIndex = newFiles.findIndex(f => f && (f.index === index || (f.error && f.url === url) || (f.isLoading && f.url === url)));
          if (fileIndex >= 0) {
            newFiles[fileIndex] = file;
          }
          return newFiles.filter(f => f !== null);
        });
        setFailedUrls(prev => [...prev, { url, index }]);
      }
    }

    setIsLoadingDocuments(false);
  };

  const checkFiles = () => {
    return files.filter((_file) => _file !== '').length < 2;
  };

  const getTheDocument = () => {
    if (useEditorIne && checkFiles()) return (
      <IneEditor
        title={title}
        accept={accept}
        onChange={handleOnDropByIndex}
        values={filesOrder}
        disabled={disabled}
        handleOnDelete={useDeleteDialog ? () => setShowModal(true) : handleOnDelete}
        fileConvertion={fileConvertion}
      />
    );
    else if (file) {
      const isThisFileLoading = file.isLoading || (file.index !== undefined && loadingStates[file.index] && loadingStates[file.index].loading);
      const fileIsLoading = isThisFileLoading;
      const fileHasError = file.error || (file.index !== undefined && loadingStates[file.index] && loadingStates[file.index].error);
      
      const shouldUseUrlDocument = !(file instanceof File) && (file.url || url);
      const urlDocumentValue = shouldUseUrlDocument ? (file.url || url) : undefined;
      
      const fileKey = getFileKey(file);
      return (
        <FilePreview
          key={fileKey || `file_${Date.now()}`}
          onDownloadFile={onDownloadFile}
          file={file}
          onDelete={useDeleteDialog ? () => setShowModal(true) : handleOnDelete}
          disabled={disabled}
          urlDocument={urlDocumentValue}
          multiple={multiple}
          accept={accept}
          verify={verify}
          onDrop={handleOnAdd}
          isLoading={fileIsLoading}
          hasError={fileHasError}
          errorMessage={file.errorMessage || (file.index !== undefined && loadingStates[file.index] && loadingStates[file.index].errorMessage)}
          onRetry={fileHasError && (file.url || url) ? () => retryFailedDocuments(file) : undefined}
        />
      );
    }
    else if (isLoadingDocuments) {
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
          <div>Cargando documentos...</div>
          <div style={{ fontSize: '12px', color: '#bbb' }}>Por favor espera</div>
        </div>
      );
    }
    else return (
      <DropZone
        multiple={multiple}
        accept={accept}
        onDrop={handleOnDrop}
        disabled={disabled}
      />
    )
  };

  useEffect(() => {
    if (!userSelectedFileRef.current) {
      if (filteredFiles.length > 0) {
        const fileKey = getFileKey(file);
        const currentFileExists = fileKey && filteredFiles.some(f => getFileKey(f) === fileKey);
        
        if (!currentFileExists) {
          setCurrentFile(0);
          setFile(filteredFiles[0]);
        }
      } else {
        setSearch('');
      }
    }
  }, [filteredFiles]);

  useEffect(() => {
    if (!userSelectedFileRef.current) {
      if (files.length <= 0) {
        setFile(null);
        setCurrentFile(0);
      } else {
        const fileKey = getFileKey(file);
        const currentFileExists = fileKey && files.some(f => getFileKey(f) === fileKey);
        
        if (!currentFileExists && files.length > 0) {
          const firstValidFile = files.find(f => !f.error && !f.isLoading) || files[0];
          if (firstValidFile) {
            setFile(firstValidFile);
            setCurrentFile(files.indexOf(firstValidFile));
          }
        }
      }
    }
  }, [files]);

  useEffect(() => {
    const arrayUrl = (url !== '' && typeof url === "string") ? [url] : url;
    if(Array.isArray(arrayUrl)) generateFilesToURL(arrayUrl);
  }, [url]);
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
        <Typography className={classes.title}>
          { title }
        </Typography>
        {required && (
          <Typography className={classes.asterisk}>
            *
          </Typography>
        )}
      </div>
      {
        getTheDocument()
      }
      {
        multiple && files.length > 0 && (
          <FileFinder
            dragType={title}
            files={filteredFiles}
            current={currentFile}
            onClick={handleOnClick}
            search={search}
            onSearch={handleOnSearch}
            placeholder={placeholder}
            disabled={disabled}
            multiple={multiple}
            accept={accept}
            onDrop={handleOnAdd}
            flipId={flipId}
            moveCard={moveCard}
            disabledAdd={disabled || useEditorIne}
          />
        )
      }
    </div>
  );
};

UploadDocuments.propTypes = {
  title: PropTypes.string,
  multiple: PropTypes.bool,
  url: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  accept: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  onDrop: PropTypes.func,
  onDelete: PropTypes.func,
  onDeleteAll: PropTypes.func,
  onDownloadFile: PropTypes.func,
  onMove: PropTypes.func,
  useDeleteDialog: PropTypes.bool,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  useEditorIne: PropTypes.bool,
  fileConvertion: PropTypes.func,
  verify: PropTypes.object,
};

UploadDocuments.defaultProps = {
  title: '',
  multiple: false,
  accept: '',
  onDrop: () => {},
  onDelete: () => {},
  onDeleteAll: () => {},
  onDownloadFile: () => {},
  onMove: () => {},
  useDeleteDialog: false,
  placeholder: '',
  url: '',
  verify: {
    status: -1,
  },
  disabled: false,
  required: false,
  useEditorIne: false,
  fileConvertion: () => {},
};

export default UploadDocuments;
