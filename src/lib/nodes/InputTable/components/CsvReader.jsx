
import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import PapaParse from 'papaparse';

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
}) => {
  const refE = useRef();

  const handleChangeFile = useCallback((event) => {
    let reader = new FileReader()
    const [file = null, ...rest] = refE.current.files;

    if (file) {
      const fileInfo = {
        name: file.name,
        size: file.size,
        type: file.type,
      };

      reader.onload = (_event) => {
        const csvData = PapaParse.parse(
          reader.result,
          {
            ...parserOptions,
            error: onError,
            encoding: fileEncoding,
          },
        );
        onFileLoaded(csvData.data, fileInfo);
        refE.current.value = null;
      };

      reader.readAsText(file, fileEncoding)
    }
  }, []);

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
  ref: PropTypes.Object,
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
  ref: {},
}

export default CSVReader;
