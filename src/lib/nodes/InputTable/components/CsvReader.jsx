import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import PapaParse from 'papaparse';
import XLSX from 'xlsx';

import * as utils from '../utils';

const HEADER_ERROR_MESSAGE = 'El formato actual de columnas es diferente al que se intenga cargar, prueba con las siguientes columnas: ';
const HEADER_ERROR_MESSAGE_2 = 'Las siguientes columnas no son correctas: ';
const HEADER_ERROR_MESSAGE_3 = 'La siguientes columnas son obligatorias que existan: ';
const HEADER_INVALID = 'El documento que intenga cargar, no tiene definido en la primera fila, el nombre de las columnas.';

const CSVReader = ({
  accept,
  className,
  inputClass,
  fileEncoding,
  inputId,
  label,
  onError,
  onFileLoaded,
  parserOptions,
  disabled = false,
  headers,
  localValue,
}) => {
  const refE = useRef();

  const readExcel = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (_event) => {
      const data = _event.target.result;
      const workbook = XLSX.read(data, {
        type: 'binary',
      });

      workbook.SheetNames.forEach((sheetName) => {
        const XLRowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        resolve(XLRowObject);
        refE.current.value = null;
      });
    };

    reader.onerror = (ex) => {
      reject(ex);
    };

    reader.readAsBinaryString(file);
  });

  const readCSV = (file) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (_event) => {
      const csvData = PapaParse.parse(
        reader.result,
        {
          ...parserOptions,
          error: onError,
          encoding: fileEncoding,
        },
      );
      resolve(csvData.data);
      refE.current.value = null;
    };
    reader.readAsText(file, fileEncoding);
  });

  const readFile = useCallback((event) => new Promise((resolve, reject) => {
    const [file = null, ...rest] = refE.current.files;
    if (file) {
      const extension = utils.getExtensionFile(file);
      if (extension.toLowerCase() === 'csv') resolve(readCSV(file));
      else resolve(readExcel(file));
    }
  }), []);

  const validateRequiredColumns = (documentHeaders, headersColumns) => {
    const columns = [];
    const message = [];
    const isInvalid = headersColumns.reduce((acc, header) => {
      const { name, required } = header;
      if (required && !documentHeaders.includes(name)) {
        acc = true;
        columns.push(name);
      }
      return acc;
    }, false);
    if (isInvalid) {
      message.push(`${HEADER_ERROR_MESSAGE_3} ${columns.join(', ')}`);
    }
    return {
      isInvalid,
      message,
    };
  };

  const validateColumnsWithData = (documentHeaders) => {
    let isInvalid = false;
    let message = [];
    if (!localValue.length) return { isInvalid, message };

    const headersNames = headers.map(({ name = '' }) => name);
    const headersAreValid = utils.includesHeaders(documentHeaders, headersNames);
    if (headersAreValid.length) {
      isInvalid = true;
      message = [`${HEADER_ERROR_MESSAGE_2} ${headersAreValid.join(', ')}`, ...message];
    }
    if (documentHeaders.length !== headersNames.length) {
      isInvalid = true;
      message = [`${HEADER_ERROR_MESSAGE} ${headersNames.join(', ')}`, ...message];
    }
    return {
      isInvalid,
      message,
    };
  };

  const validateHeaders = (data) => {
    if (data.length === 0) return { isInvalid: true, message: [] };
    const headerStatus = Object.keys(data[0]).reduce((acc, key) => {
      if (key.includes('EMPTY')) acc = true;
      return acc;
    }, false);

    return {
      isInvalid: headerStatus,
      message: (headerStatus) ? HEADER_INVALID : '',
    };
  };

  const getMessageErrors = (validations = []) => {
    return validations.reduce((acc, validation) => {
      const { isInvalid, message } = validation;
      if (isInvalid) acc.push(message);
      return acc;
    }, []);
  };

  const formatDataFromCsv = (data) => {
    let isValid = true;
    let messages = [];
    let _data = [];
    let headersCSV = headers;
    const documentHeaders = utils.getHeadersFromCSV(data);
    const headersColumns = headers.map(({ name = '', required = false }) => ({ name, required }));
    const statusHeaders = validateHeaders(data);
    const statusRequiredColumns = validateRequiredColumns(documentHeaders, headersColumns);
    const statusColumnWithData = validateColumnsWithData(documentHeaders);
    if (statusHeaders.isInvalid
        || statusRequiredColumns.isInvalid
        || statusColumnWithData.isInvalid) {
      isValid = false;
      // eslint-disable-next-line max-len
      messages = getMessageErrors([statusHeaders, statusColumnWithData, statusRequiredColumns]);
    } else headersCSV = utils.createHeadersFromCSV(documentHeaders, headersColumns);
    _data = utils.createItemsFromCSV(data, documentHeaders);
    return {
      isValid,
      data: _data,
      headersCSV,
      messages,
    };
  };

  const handleChangeFile = useCallback(async () => {
    const result = await readFile();
    const {
      isValid, data, headersCSV, messages,
    } = formatDataFromCsv(result);
    onFileLoaded({
      isValid,
      data,
      headersCSV,
      messages,
    });
  }, [readFile, onFileLoaded]);

  return (
    <div className={className}>
      <div>
        <label htmlFor={inputId}>{label}</label>
        <input
          ref={refE}
          className={inputClass}
          type="file"
          id={inputId}
          accept={accept}
          onChange={handleChangeFile}
          disabled={disabled}
        />
      </div>
    </div>
  );
};

CSVReader.propTypes = {
  accept: PropTypes.string,
  className: PropTypes.string,
  inputClass: PropTypes.string,
  fileEncoding: PropTypes.string,
  inputId: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onError: PropTypes.func,
  onFileLoaded: PropTypes.func.isRequired,
  parserOptions: PropTypes.object,
  disabled: PropTypes.bool,
  headers: PropTypes.array,
  localValue: PropTypes.array,
};

CSVReader.defaultProps = {
  accept: '.csv, text/csv, .xlsx',
  className: '',
  inputClass: '',
  fileEncoding: 'UTF-8',
  inputId: 'csv_input',
  label: 'Cargar archivo',
  onError: () => {},
  parserOptions: {},
  disabled: false,
  headers: [],
  localValue: [],
};

export default CSVReader;
