"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Typography = _interopRequireDefault(require("@material-ui/core/Typography"));

var _arrayMove = require("array-move");

var _DropZone = _interopRequireDefault(require("../DropZone"));

var _FilePreview = _interopRequireDefault(require("../FilePreview"));

var _FileFinder = _interopRequireDefault(require("../FileFinder"));

var _DeleteDialog = _interopRequireDefault(require("./DeleteDialog"));

var _IneEditor = _interopRequireDefault(require("../IneEditor"));

var _style = _interopRequireDefault(require("./style"));

var _fetchWithRetry = require("./utils/fetchWithRetry");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _require = require('uuid'),
    uuidv4 = _require.v4;

var REVERSE = 'Reverse';
var FRONT = "Front";
var REVERSA = 'Reverso';
var FRONTAL = "Frontal";

var UploadDocuments = function UploadDocuments(_ref) {
  var title = _ref.title,
      multiple = _ref.multiple,
      accept = _ref.accept,
      onDrop = _ref.onDrop,
      onDelete = _ref.onDelete,
      onDeleteAll = _ref.onDeleteAll,
      onDownloadFile = _ref.onDownloadFile,
      onMove = _ref.onMove,
      useDeleteDialog = _ref.useDeleteDialog,
      placeholder = _ref.placeholder,
      url = _ref.url,
      disabled = _ref.disabled,
      required = _ref.required,
      useEditorIne = _ref.useEditorIne,
      fileConvertion = _ref.fileConvertion,
      verify = _ref.verify;
  var classes = (0, _style.default)();

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      file = _useState2[0],
      setFile = _useState2[1];

  var _useState3 = (0, _react.useState)([]),
      _useState4 = _slicedToArray(_useState3, 2),
      files = _useState4[0],
      setFiles = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      currentFile = _useState6[0],
      setCurrentFile = _useState6[1];

  var _useState7 = (0, _react.useState)(''),
      _useState8 = _slicedToArray(_useState7, 2),
      search = _useState8[0],
      setSearch = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = _slicedToArray(_useState9, 2),
      showModal = _useState10[0],
      setShowModal = _useState10[1];

  var _useState11 = (0, _react.useState)('1'),
      _useState12 = _slicedToArray(_useState11, 2),
      flipId = _useState12[0],
      setFlipId = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      filesOrder = _useState14[0],
      setFilesOrder = _useState14[1];

  var _useState15 = (0, _react.useState)(false),
      _useState16 = _slicedToArray(_useState15, 2),
      isLoadingDocuments = _useState16[0],
      setIsLoadingDocuments = _useState16[1];

  var _useState17 = (0, _react.useState)({}),
      _useState18 = _slicedToArray(_useState17, 2),
      loadingStates = _useState18[0],
      setLoadingStates = _useState18[1];

  var _useState19 = (0, _react.useState)([]),
      _useState20 = _slicedToArray(_useState19, 2),
      failedUrls = _useState20[0],
      setFailedUrls = _useState20[1];

  var userSelectedFileRef = (0, _react.useRef)(null);
  var lastUserSelectionRef = (0, _react.useRef)(null);
  var titleRef = (0, _react.useRef)(null);
  var filteredFiles = (0, _react.useMemo)(function () {
    var searchLower = search.toLowerCase();
    return files.map(function (file) {
      var fileNameLower = file ? file.name.toLowerCase() : '';
      if (fileNameLower.includes(searchLower) || searchLower === '') return file;
      return null;
    }).filter(function (file) {
      return file !== null && file !== '';
    });
  }, [files, search]);
  /**
   * @returns {Array}
   */

  var deleteFile = function deleteFile(_files) {
    var remainPostion = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    var newFiles = _toConsumableArray(_files);

    var index = newFiles.findIndex(function (_file) {
      return _file === file;
    });
    if (index !== -1 && remainPostion) newFiles[index] = '';else if (index !== -1) newFiles.splice(index, 1);
    return {
      newFiles: newFiles,
      index: index
    };
  };
  /**
   *
   * @param {Array} acceptedFiles 
   */


  var handleOnDrop = function handleOnDrop(acceptedFiles, rejectedFiles) {
    setFiles(acceptedFiles);
    setSearch('');
    onDrop(acceptedFiles, rejectedFiles);
  };

  var handleOnAdd = function handleOnAdd(acceptedFiles, rejectedFiles) {
    //  setFiles([...acceptedFiles, ...files]);
    setFiles([].concat(_toConsumableArray(files), _toConsumableArray(acceptedFiles)));
    setSearch('');
    onDrop(acceptedFiles, rejectedFiles);
  };

  var handleOnDropByIndex = function handleOnDropByIndex(acceptedFiles, rejectedFiles, index) {
    var newFilesOrder = _toConsumableArray(filesOrder);

    if (acceptedFiles.length) newFilesOrder[index] = acceptedFiles[0];
    var prefix = index ? REVERSE : FRONT;
    setFiles([].concat(_toConsumableArray(acceptedFiles), _toConsumableArray(files)));
    setFilesOrder(newFilesOrder);
    onDrop(acceptedFiles, rejectedFiles, prefix);
  };

  var handleOnDelete = function handleOnDelete() {
    if (useEditorIne) {
      var _deleteFile = deleteFile(filesOrder, true),
          newFilesOrder = _deleteFile.newFiles;

      setFilesOrder(newFilesOrder);
    }

    var _deleteFile2 = deleteFile(files),
        newFiles = _deleteFile2.newFiles,
        index = _deleteFile2.index;

    onDelete(newFiles, file, index);
    setFiles(newFiles);
    setShowModal(false);
  };

  var moveCard = function moveCard(oldIndex, newIndex) {
    setFlipId(function (oldFlip) {
      return uuidv4();
    });
    setFiles(function (oldFiles) {
      return (0, _arrayMove.arrayMoveImmutable)(oldFiles, oldIndex, newIndex);
    });
    onMove(oldIndex, newIndex);
  };

  var handleOnDeleteAll = function handleOnDeleteAll() {
    onDeleteAll();
    setFilesOrder(['', '']);
    setFiles([]);
    setShowModal(false);
  };

  var getFileKey = function getFileKey(f) {
    if (!f) return null;

    if (f instanceof File) {
      return "file_".concat(f.name, "_").concat(f.size, "_").concat(f.lastModified);
    }

    if (f.url) {
      return "url_".concat(f.url);
    }

    if (f.index !== undefined) {
      return "index_".concat(f.index);
    }

    return null;
  };

  var handleOnClick = function handleOnClick(index, file) {
    if (!file) return;
    var fileKey = getFileKey(file);
    var actualIndex = filteredFiles.findIndex(function (f) {
      return getFileKey(f) === fileKey;
    });
    var actualFile = actualIndex >= 0 ? filteredFiles[actualIndex] : file;

    if (actualFile && (actualFile.isLoading || actualFile.error)) {
      var realFileInFiles = files.find(function (f) {
        if (!f) return false;

        if (f instanceof File) {
          var _fKey = getFileKey(f);

          return _fKey === fileKey;
        }

        var fKey = getFileKey(f);

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

    var realIndex = files.findIndex(function (f) {
      if (!f) return false;
      var fKey = getFileKey(f);
      return fKey === getFileKey(actualFile);
    });
    userSelectedFileRef.current = actualFile;
    lastUserSelectionRef.current = actualFile;
    setFile(actualFile);
    setCurrentFile(realIndex >= 0 ? realIndex : index);
    setTimeout(function () {
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


  var handleOnSearch = function handleOnSearch(text) {
    setSearch(text);
  };

  var sortFiles = function sortFiles(arrayFiles) {
    return arrayFiles.map(function (_file) {
      var _file$name = _file.name,
          name = _file$name === void 0 ? '' : _file$name;

      if (name.includes(REVERSA)) {
        return {
          position: 2,
          _file: _file
        };
      } else if (name.includes(FRONTAL)) {
        return {
          position: 0,
          _file: _file
        };
      }

      return {
        position: 1,
        _file: _file
      };
    }).sort(function (a, b) {
      if (a.position > b.position) return 1;
      if (a.position < b.position) return -1;
      return 0;
    }).map(function (_ref2) {
      var _file = _ref2._file;
      return _file;
    });
  };

  var fillFiles = function fillFiles(arrayFiles) {
    if (!arrayFiles.length) return ['', ''];
    if (arrayFiles.length === 1) return [].concat(_toConsumableArray(arrayFiles), ['']);
    return arrayFiles;
  };

  var constructFiles = function constructFiles(arrayFiles) {
    var newFiles = fillFiles(arrayFiles);
    return sortFiles(newFiles);
  };

  var getTitle = function getTitle(_url, title) {
    if (_url.includes(REVERSE)) return REVERSA;
    if (_url.includes(FRONT)) return FRONTAL;
    return title;
  };

  var createLoadingPlaceholder = function createLoadingPlaceholder(url, index) {
    var _title = useEditorIne ? getTitle(url, title) : title;

    return {
      name: _title,
      url: url,
      isLoading: true,
      index: index,
      size: 0,
      type: 'application/octet-stream',
      lastModified: Date.now()
    };
  };

  var loadDocumentSequentially =
  /*#__PURE__*/
  function () {
    var _ref3 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(url, index) {
      var isRetry,
          response,
          data,
          metadata,
          _title,
          _file2,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              isRetry = _args.length > 2 && _args[2] !== undefined ? _args[2] : false;

              if (url) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", null);

            case 3:
              setLoadingStates(function (prev) {
                return _objectSpread({}, prev, _defineProperty({}, index, {
                  loading: true,
                  error: false
                }));
              });
              _context.prev = 4;
              _context.next = 7;
              return (0, _fetchWithRetry.fetchWithRetry)(url, {
                maxRetries: isRetry ? 1 : 2,
                timeout: 180000,
                sequential: isRetry
              });

            case 7:
              response = _context.sent;
              _context.next = 10;
              return response.blob();

            case 10:
              data = _context.sent;
              metadata = {
                type: data.type || response.headers.get('content-type') || 'application/octet-stream'
              };
              _title = useEditorIne ? getTitle(url, title) : title;
              _file2 = new File([data], _title, metadata);
              setLoadingStates(function (prev) {
                return _objectSpread({}, prev, _defineProperty({}, index, {
                  loading: false,
                  error: false
                }));
              });
              return _context.abrupt("return", _file2);

            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](4);
              console.error("Error al cargar documento ".concat(index + 1, " (").concat(url, "):"), _context.t0);
              setLoadingStates(function (prev) {
                return _objectSpread({}, prev, _defineProperty({}, index, {
                  loading: false,
                  error: true,
                  errorMessage: _context.t0.message
                }));
              });
              return _context.abrupt("return", {
                name: useEditorIne ? getTitle(url, title) : title,
                url: url,
                error: true,
                errorMessage: _context.t0.message,
                index: index
              });

            case 23:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[4, 18]]);
    }));

    return function loadDocumentSequentially(_x, _x2) {
      return _ref3.apply(this, arguments);
    };
  }();

  var generateFilesToURL =
  /*#__PURE__*/
  function () {
    var _ref4 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee3(arrayUrl) {
      var isRetry,
          placeholders,
          firstPlaceholder,
          retryPlaceholders,
          _loadedFiles,
          _loop,
          i,
          _ret,
          _validFiles,
          newSortFiles,
          loadPromises,
          loadedFiles,
          validFiles,
          _newSortFiles,
          firstValidFile,
          _args4 = arguments;

      return regeneratorRuntime.wrap(function _callee3$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              isRetry = _args4.length > 1 && _args4[1] !== undefined ? _args4[1] : false;

              if (!(!arrayUrl || !Array.isArray(arrayUrl) || arrayUrl.length === 0)) {
                _context4.next = 4;
                break;
              }

              setIsLoadingDocuments(false);
              return _context4.abrupt("return");

            case 4:
              if (!isRetry) {
                setLoadingStates({});
                setFailedUrls([]);
              }

              setIsLoadingDocuments(true);
              placeholders = arrayUrl.map(function (url, index) {
                return url ? createLoadingPlaceholder(url, index) : null;
              }).filter(function (p) {
                return p !== null;
              });

              if (placeholders.length > 0 && !isRetry) {
                setFiles(placeholders);
                firstPlaceholder = placeholders[0];

                if (firstPlaceholder) {
                  setFile(firstPlaceholder);
                }
              }

              if (!isRetry) {
                _context4.next = 26;
                break;
              }

              retryPlaceholders = arrayUrl.map(function (url, index) {
                if (!url) return null;
                var existingFile = files.find(function (f) {
                  return f && f.error && f.url === url;
                });

                if (existingFile) {
                  return createLoadingPlaceholder(url, existingFile.index || index);
                }

                return createLoadingPlaceholder(url, index);
              }).filter(function (p) {
                return p !== null;
              });

              if (retryPlaceholders.length > 0) {
                setFiles(function (prevFiles) {
                  var newFiles = _toConsumableArray(prevFiles);

                  retryPlaceholders.forEach(function (placeholder) {
                    var fileIndex = newFiles.findIndex(function (f) {
                      return f && f.error && f.url === placeholder.url;
                    });

                    if (fileIndex >= 0) {
                      newFiles[fileIndex] = placeholder;
                    }
                  });
                  return newFiles.filter(function (f) {
                    return f !== null;
                  });
                });

                if (retryPlaceholders[0]) {
                  setFile(retryPlaceholders[0]);
                }
              }

              _loadedFiles = [];
              _loop =
              /*#__PURE__*/
              regeneratorRuntime.mark(function _loop(i) {
                var url, existingFile, index, file, _firstValidFile;

                return regeneratorRuntime.wrap(function _loop$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        url = arrayUrl[i];

                        if (url) {
                          _context2.next = 4;
                          break;
                        }

                        _loadedFiles.push(null);

                        return _context2.abrupt("return", "continue");

                      case 4:
                        existingFile = files.find(function (f) {
                          return f && f.error && f.url === url;
                        });
                        index = existingFile ? existingFile.index !== undefined ? existingFile.index : i : i;
                        _context2.next = 8;
                        return loadDocumentSequentially(url, index, true);

                      case 8:
                        file = _context2.sent;

                        _loadedFiles.push(file);

                        if (file && !file.error) {
                          setFiles(function (prevFiles) {
                            var newFiles = _toConsumableArray(prevFiles);

                            var fileIndex = newFiles.findIndex(function (f) {
                              return f && (f.index === index || f.error && f.url === url || f.isLoading && f.url === url);
                            });

                            if (fileIndex >= 0) {
                              newFiles[fileIndex] = file;
                            } else {
                              newFiles.push(file);
                            }

                            return newFiles.filter(function (f) {
                              return f !== null;
                            });
                          });
                          _firstValidFile = file;

                          if (_firstValidFile && !_firstValidFile.isLoading) {
                            setFile(_firstValidFile);
                          }
                        } else if (file && file.error) {
                          setFiles(function (prevFiles) {
                            var newFiles = _toConsumableArray(prevFiles);

                            var fileIndex = newFiles.findIndex(function (f) {
                              return f && (f.index === index || f.error && f.url === url || f.isLoading && f.url === url);
                            });

                            if (fileIndex >= 0) {
                              newFiles[fileIndex] = file;
                            }

                            return newFiles.filter(function (f) {
                              return f !== null;
                            });
                          });
                        }

                      case 11:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _loop);
              });
              i = 0;

            case 14:
              if (!(i < arrayUrl.length)) {
                _context4.next = 22;
                break;
              }

              return _context4.delegateYield(_loop(i), "t0", 16);

            case 16:
              _ret = _context4.t0;

              if (!(_ret === "continue")) {
                _context4.next = 19;
                break;
              }

              return _context4.abrupt("continue", 19);

            case 19:
              i++;
              _context4.next = 14;
              break;

            case 22:
              _validFiles = _loadedFiles.filter(function (f) {
                return f !== null;
              });

              if (useEditorIne && _validFiles.length > 0) {
                newSortFiles = constructFiles(_validFiles);
                setFilesOrder(newSortFiles);
              }

              setIsLoadingDocuments(false);
              return _context4.abrupt("return");

            case 26:
              loadPromises = arrayUrl.map(
              /*#__PURE__*/
              function () {
                var _ref5 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2(url, index) {
                  var _file3, errorFile;

                  return regeneratorRuntime.wrap(function _callee2$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          if (url) {
                            _context3.next = 2;
                            break;
                          }

                          return _context3.abrupt("return", null);

                        case 2:
                          _context3.prev = 2;
                          _context3.next = 5;
                          return loadDocumentSequentially(url, index, false);

                        case 5:
                          _file3 = _context3.sent;

                          if (_file3 && !_file3.error) {
                            setFiles(function (prevFiles) {
                              var newFiles = _toConsumableArray(prevFiles);

                              var fileIndex = newFiles.findIndex(function (f) {
                                return f && f.isLoading && f.index === index;
                              });

                              if (fileIndex >= 0) {
                                newFiles[fileIndex] = _file3;
                              } else {
                                newFiles.push(_file3);
                              }

                              var firstValidFile = newFiles.find(function (f) {
                                return !f.error && !f.isLoading;
                              });

                              if (firstValidFile && !firstValidFile.isLoading) {
                                setFile(firstValidFile);
                              }

                              return newFiles.filter(function (f) {
                                return f !== null;
                              });
                            });
                          } else if (_file3 && _file3.error) {
                            setFailedUrls(function (prev) {
                              return [].concat(_toConsumableArray(prev), [{
                                url: url,
                                index: index
                              }]);
                            });
                            setFiles(function (prevFiles) {
                              var newFiles = _toConsumableArray(prevFiles);

                              var fileIndex = newFiles.findIndex(function (f) {
                                return f && f.isLoading && f.index === index;
                              });

                              if (fileIndex >= 0) {
                                newFiles[fileIndex] = _file3;
                              }

                              return newFiles.filter(function (f) {
                                return f !== null;
                              });
                            });
                          }

                          return _context3.abrupt("return", _file3);

                        case 10:
                          _context3.prev = 10;
                          _context3.t0 = _context3["catch"](2);
                          console.error("Error al cargar documento ".concat(index + 1, ":"), _context3.t0);
                          errorFile = {
                            name: useEditorIne ? getTitle(url, title) : title,
                            url: url,
                            error: true,
                            errorMessage: _context3.t0.message,
                            index: index
                          };
                          setFailedUrls(function (prev) {
                            return [].concat(_toConsumableArray(prev), [{
                              url: url,
                              index: index
                            }]);
                          });
                          return _context3.abrupt("return", errorFile);

                        case 16:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee2, null, [[2, 10]]);
                }));

                return function (_x4, _x5) {
                  return _ref5.apply(this, arguments);
                };
              }());
              _context4.next = 29;
              return Promise.all(loadPromises);

            case 29:
              loadedFiles = _context4.sent;
              validFiles = loadedFiles.filter(function (f) {
                return f !== null;
              });

              if (useEditorIne && validFiles.length > 0) {
                _newSortFiles = constructFiles(validFiles);
                setFilesOrder(_newSortFiles);
              }

              setFiles(validFiles);
              firstValidFile = validFiles.find(function (f) {
                return !f.error && !f.isLoading;
              });

              if (firstValidFile && !firstValidFile.isLoading) {
                setFile(firstValidFile);
              } else if (validFiles.length > 0) {
                setFile(validFiles[0]);
              }

              setIsLoadingDocuments(false);

            case 36:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee3);
    }));

    return function generateFilesToURL(_x3) {
      return _ref4.apply(this, arguments);
    };
  }();

  var retryFailedDocuments =
  /*#__PURE__*/
  function () {
    var _ref6 = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee4() {
      var specificFile,
          urlsToRetry,
          currentFailedUrls,
          retryUrl,
          retryIndex,
          retryPlaceholders,
          updatedFilesAfterPlaceholders,
          currentFileKey,
          retryFileKey,
          retryUrlKey,
          placeholderIndex,
          _loop2,
          i,
          _args6 = arguments;

      return regeneratorRuntime.wrap(function _callee4$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              specificFile = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : null;
              urlsToRetry = [];
              currentFailedUrls = [];

              if (!(specificFile && specificFile.error && (specificFile.url || url))) {
                _context6.next = 9;
                break;
              }

              retryUrl = specificFile.url || url;
              retryIndex = specificFile.index !== undefined ? specificFile.index : files.findIndex(function (f) {
                return f === specificFile;
              });
              currentFailedUrls = [{
                url: retryUrl,
                index: retryIndex >= 0 ? retryIndex : 0
              }];
              _context6.next = 14;
              break;

            case 9:
              if (!(failedUrls.length > 0)) {
                _context6.next = 13;
                break;
              }

              currentFailedUrls = _toConsumableArray(failedUrls);
              _context6.next = 14;
              break;

            case 13:
              return _context6.abrupt("return");

            case 14:
              setFailedUrls([]);
              setIsLoadingDocuments(true);
              retryPlaceholders = currentFailedUrls.map(function (_ref7) {
                var url = _ref7.url,
                    index = _ref7.index;
                return createLoadingPlaceholder(url, index);
              });
              updatedFilesAfterPlaceholders = [];
              setFiles(function (prevFiles) {
                var newFiles = _toConsumableArray(prevFiles);

                retryPlaceholders.forEach(function (placeholder) {
                  var fileIndex = newFiles.findIndex(function (f) {
                    return f && f.error && f.url === placeholder.url;
                  });

                  if (fileIndex >= 0) {
                    newFiles[fileIndex] = placeholder;
                  }
                });
                updatedFilesAfterPlaceholders = newFiles.filter(function (f) {
                  return f !== null;
                });
                return updatedFilesAfterPlaceholders;
              });

              if (specificFile && retryPlaceholders[0]) {
                currentFileKey = getFileKey(file);
                retryFileKey = getFileKey(specificFile);
                retryUrlKey = "url_".concat(retryPlaceholders[0].url);

                if (currentFileKey === retryFileKey || currentFileKey === retryUrlKey || !currentFileKey) {
                  setFile(retryPlaceholders[0]);
                  placeholderIndex = updatedFilesAfterPlaceholders.findIndex(function (f) {
                    return f && f.url === retryPlaceholders[0].url;
                  });

                  if (placeholderIndex >= 0) {
                    setCurrentFile(placeholderIndex);
                  }

                  userSelectedFileRef.current = null;
                  lastUserSelectionRef.current = null;
                }
              }

              _loop2 =
              /*#__PURE__*/
              regeneratorRuntime.mark(function _loop2(i) {
                var _currentFailedUrls$i, url, index, file;

                return regeneratorRuntime.wrap(function _loop2$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        _currentFailedUrls$i = currentFailedUrls[i], url = _currentFailedUrls$i.url, index = _currentFailedUrls$i.index;
                        _context5.next = 3;
                        return loadDocumentSequentially(url, index, true);

                      case 3:
                        file = _context5.sent;

                        if (file && !file.error) {
                          setFiles(function (prevFiles) {
                            var newFiles = _toConsumableArray(prevFiles);

                            var fileIndex = newFiles.findIndex(function (f) {
                              return f && (f.index === index || f.error && f.url === url || f.isLoading && f.url === url);
                            });

                            if (fileIndex >= 0) {
                              newFiles[fileIndex] = file;
                            } else {
                              newFiles.push(file);
                            }

                            var updatedFiles = newFiles.filter(function (f) {
                              return f !== null;
                            });
                            var firstValidFile = file;

                            if (firstValidFile && !firstValidFile.isLoading) {
                              var foundIndex = updatedFiles.findIndex(function (f) {
                                return f && (f.error && f.url === url || f.isLoading && f.url === url || f === firstValidFile);
                              });

                              if (foundIndex >= 0) {
                                var _retryFileKey = getFileKey(firstValidFile);

                                var _retryUrlKey = "url_".concat(url);

                                var currentFileInState = file;

                                var _currentFileKey = currentFileInState ? getFileKey(currentFileInState) : null;

                                if (_currentFileKey === _retryFileKey || _currentFileKey === _retryUrlKey) {
                                  setCurrentFile(foundIndex);
                                  setFile(firstValidFile);
                                } else if (!userSelectedFileRef.current && !lastUserSelectionRef.current) {
                                  var prevFileInState = prevFiles.find(function (f) {
                                    return f && !f.error && !f.isLoading && (f.url === url || f.isLoading && f.url === url);
                                  }) || prevFiles[0];
                                  var prevFileKey = prevFileInState ? getFileKey(prevFileInState) : null;

                                  if (!prevFileKey || prevFileKey === _retryFileKey || prevFileKey === _retryUrlKey) {
                                    setCurrentFile(foundIndex);
                                    setFile(firstValidFile);
                                  }
                                }
                              }
                            }

                            return updatedFiles;
                          });
                        } else if (file && file.error) {
                          setFiles(function (prevFiles) {
                            var newFiles = _toConsumableArray(prevFiles);

                            var fileIndex = newFiles.findIndex(function (f) {
                              return f && (f.index === index || f.error && f.url === url || f.isLoading && f.url === url);
                            });

                            if (fileIndex >= 0) {
                              newFiles[fileIndex] = file;
                            }

                            return newFiles.filter(function (f) {
                              return f !== null;
                            });
                          });
                          setFailedUrls(function (prev) {
                            return [].concat(_toConsumableArray(prev), [{
                              url: url,
                              index: index
                            }]);
                          });
                        }

                      case 5:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _loop2);
              });
              i = 0;

            case 22:
              if (!(i < currentFailedUrls.length)) {
                _context6.next = 27;
                break;
              }

              return _context6.delegateYield(_loop2(i), "t0", 24);

            case 24:
              i++;
              _context6.next = 22;
              break;

            case 27:
              setIsLoadingDocuments(false);

            case 28:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee4);
    }));

    return function retryFailedDocuments() {
      return _ref6.apply(this, arguments);
    };
  }();

  var checkFiles = function checkFiles() {
    return files.filter(function (_file) {
      return _file !== '';
    }).length < 2;
  };

  var getTheDocument = function getTheDocument() {
    if (useEditorIne && checkFiles()) return _react.default.createElement(_IneEditor.default, {
      title: title,
      accept: accept,
      onChange: handleOnDropByIndex,
      values: filesOrder,
      disabled: disabled,
      handleOnDelete: useDeleteDialog ? function () {
        return setShowModal(true);
      } : handleOnDelete,
      fileConvertion: fileConvertion
    });else if (file) {
      var isThisFileLoading = file.isLoading || file.index !== undefined && loadingStates[file.index] && loadingStates[file.index].loading;
      var fileIsLoading = isThisFileLoading;
      var fileHasError = file.error || file.index !== undefined && loadingStates[file.index] && loadingStates[file.index].error;
      var shouldUseUrlDocument = !(file instanceof File) && (file.url || url);
      var urlDocumentValue = shouldUseUrlDocument ? file.url || url : undefined;
      var fileKey = getFileKey(file);
      return _react.default.createElement(_FilePreview.default, {
        key: fileKey || "file_".concat(Date.now()),
        onDownloadFile: onDownloadFile,
        file: file,
        onDelete: useDeleteDialog ? function () {
          return setShowModal(true);
        } : handleOnDelete,
        disabled: disabled,
        urlDocument: urlDocumentValue,
        multiple: multiple,
        accept: accept,
        verify: verify,
        onDrop: handleOnAdd,
        isLoading: fileIsLoading,
        hasError: fileHasError,
        errorMessage: file.errorMessage || file.index !== undefined && loadingStates[file.index] && loadingStates[file.index].errorMessage,
        onRetry: fileHasError && (file.url || url) ? function () {
          return retryFailedDocuments(file);
        } : undefined
      });
    } else if (isLoadingDocuments) {
      return _react.default.createElement("div", {
        style: {
          minHeight: '400px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#999',
          flexDirection: 'column',
          gap: '10px'
        }
      }, _react.default.createElement("div", null, "Cargando documentos..."), _react.default.createElement("div", {
        style: {
          fontSize: '12px',
          color: '#bbb'
        }
      }, "Por favor espera"));
    } else return _react.default.createElement(_DropZone.default, {
      multiple: multiple,
      accept: accept,
      onDrop: handleOnDrop,
      disabled: disabled
    });
  };

  (0, _react.useEffect)(function () {
    if (!userSelectedFileRef.current) {
      if (filteredFiles.length > 0) {
        var fileKey = getFileKey(file);
        var currentFileExists = fileKey && filteredFiles.some(function (f) {
          return getFileKey(f) === fileKey;
        });

        if (!currentFileExists) {
          setCurrentFile(0);
          setFile(filteredFiles[0]);
        }
      } else {
        setSearch('');
      }
    }
  }, [filteredFiles]);
  (0, _react.useEffect)(function () {
    if (!userSelectedFileRef.current) {
      if (files.length <= 0) {
        setFile(null);
        setCurrentFile(0);
      } else {
        var fileKey = getFileKey(file);
        var currentFileExists = fileKey && files.some(function (f) {
          return getFileKey(f) === fileKey;
        });

        if (!currentFileExists && files.length > 0) {
          var firstValidFile = files.find(function (f) {
            return !f.error && !f.isLoading;
          }) || files[0];

          if (firstValidFile) {
            setFile(firstValidFile);
            setCurrentFile(files.indexOf(firstValidFile));
          }
        }
      }
    }
  }, [files]);
  (0, _react.useEffect)(function () {
    var arrayUrl = url !== '' && typeof url === "string" ? [url] : url;
    if (Array.isArray(arrayUrl)) generateFilesToURL(arrayUrl);
  }, [url]);
  return _react.default.createElement("div", null, _react.default.createElement(_DeleteDialog.default, {
    onCancel: function onCancel() {
      return setShowModal(false);
    },
    onDelete: handleOnDelete,
    onDeleteAll: handleOnDeleteAll,
    title: "\xBFDeseas Borrar el/los documentos?",
    showModal: showModal && useDeleteDialog
  }), _react.default.createElement("div", {
    className: classes.titleContainer,
    ref: titleRef
  }, _react.default.createElement(_Typography.default, {
    className: classes.title
  }, title), required && _react.default.createElement(_Typography.default, {
    className: classes.asterisk
  }, "*")), getTheDocument(), multiple && files.length > 0 && _react.default.createElement(_FileFinder.default, {
    dragType: title,
    files: filteredFiles,
    current: currentFile,
    onClick: handleOnClick,
    search: search,
    onSearch: handleOnSearch,
    placeholder: placeholder,
    disabled: disabled,
    multiple: multiple,
    accept: accept,
    onDrop: handleOnAdd,
    flipId: flipId,
    moveCard: moveCard,
    disabledAdd: disabled || useEditorIne
  }));
};

UploadDocuments.propTypes = {
  title: _propTypes.default.string,
  multiple: _propTypes.default.bool,
  url: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  accept: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.string)]),
  onDrop: _propTypes.default.func,
  onDelete: _propTypes.default.func,
  onDeleteAll: _propTypes.default.func,
  onDownloadFile: _propTypes.default.func,
  onMove: _propTypes.default.func,
  useDeleteDialog: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  useEditorIne: _propTypes.default.bool,
  fileConvertion: _propTypes.default.func,
  verify: _propTypes.default.object
};
UploadDocuments.defaultProps = {
  title: '',
  multiple: false,
  accept: '',
  onDrop: function onDrop() {},
  onDelete: function onDelete() {},
  onDeleteAll: function onDeleteAll() {},
  onDownloadFile: function onDownloadFile() {},
  onMove: function onMove() {},
  useDeleteDialog: false,
  placeholder: '',
  url: '',
  verify: {
    status: -1
  },
  disabled: false,
  required: false,
  useEditorIne: false,
  fileConvertion: function fileConvertion() {}
};
var _default = UploadDocuments;
exports.default = _default;
