
import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import PapaParse from 'papaparse';
import * as utils from "../utils";

const HEADER_ERROR_MESSAGE = 'La cantidad de columnas no es la correcta ya que es diferente a la informacion con la que cuenta la tabla, prueba con las siguientes: ';
const HEADER_ERROR_MESSAGE_2 = 'Las siguientes columnas no son correctas: ';

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

  const readFile = useCallback((event) => new Promise((resolve, reject) => {
    let reader = new FileReader()
    const [file = null, ...rest] = refE.current.files;
    if (file) {
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
      reader.readAsText(file, fileEncoding)
    }
  }), []);

  const formatDataFromCsv = (data) => {
    let isValid = true;
    let messages = [];
    let _data = [];
    let headersCSV = headers;
    const headersNames = headers.map(({ name = '' }) => name);
    const documentHeaders = utils.getHeadersFromCSV(data);
    if (localValue.length > 1) {
      const headersAreValid = utils.includesHeaders(documentHeaders, headersNames);
      if (headersAreValid.length) {
        isValid = false;
        messages = [`${HEADER_ERROR_MESSAGE_2} ${headersAreValid.join(', ')}`, ...messages];
      }
      if (documentHeaders.length !== headersNames.length) {
        isValid = false;
        messages = [`${HEADER_ERROR_MESSAGE} ${headersNames.join(', ')}`, ...messages];
      }
    } else {
      headersCSV = utils.createHeadersFromCSV(documentHeaders);
    }
    _data = utils.createItemsFromCSV(data, documentHeaders);
    return {
      isValid,
      data: _data,
      headersCSV,
      messages,
    }
  };

  const handleChangeFile = useCallback(async () => {
    const result = await readFile();
    const { isValid, data, headersCSV, messages } = formatDataFromCsv(result);
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
  )
}

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
}

CSVReader.defaultProps = {
  accept: '.csv, text/csv',
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
}

export default CSVReader;
