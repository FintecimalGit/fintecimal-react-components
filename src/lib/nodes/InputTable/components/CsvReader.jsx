import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import PapaParse from 'papaparse';
import XLSX from 'xlsx';

import * as utils from '../utils';

const HEADER_ERROR_MESSAGE = 'La cantidad de columnas no es la correcta ya que es diferente a la informacion con la que cuenta la tabla, prueba con las siguientes: ';
const HEADER_ERROR_MESSAGE_2 = 'Las siguientes columnas no son correctas: ';
const HEADER_ERROR_MESSAGE_3 = 'La siguientes columnas son requeridas que existan y su nombre sea: ';

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
        const XL_row_object = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);
        resolve(XL_row_object);
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
      if (extension.toLowerCase() === 'csv') {
        resolve(readCSV(file));
      } else {
        resolve(readExcel(file));
      }
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
    let messages = [];
    if (!localValue.length) return { isInvalid, messages };

    const headersNames = headers.map(({ name = '' }) => name);
    const headersAreValid = utils.includesHeaders(documentHeaders, headersNames);
    if (headersAreValid.length) {
      isInvalid = true;
      messages = [`${HEADER_ERROR_MESSAGE_2} ${headersAreValid.join(', ')}`, ...messages];
    }
    if (documentHeaders.length !== headersNames.length) {
      isInvalid = true;
      messages = [`${HEADER_ERROR_MESSAGE} ${headersNames.join(', ')}`, ...messages];
    }
    return {
      isInvalid,
      messages,
    };
  };

  const formatDataFromCsv = (data) => {
    let isValid = true;
    let messages = [];
    let _data = [];
    let headersCSV = headers;
    const documentHeaders = utils.getHeadersFromCSV(data);
    const headersColumns = headers.map(({ name = '', required = false }) => ({ name, required }));
    const statusRequiredColumns = validateRequiredColumns(documentHeaders, headersColumns);
    const statusColumnWithData = validateColumnsWithData(documentHeaders);
    if (statusRequiredColumns.isInvalid || statusColumnWithData.isInvalid) {
      isValid = false;
      messages = (statusRequiredColumns.isInvalid) ? statusRequiredColumns.message : statusColumnWithData.messages;
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
