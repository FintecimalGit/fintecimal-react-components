import React, {
  useState,
  useEffect,
  useMemo,
} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { defaultHeader, defaultData, defaultFlows } from './defaults';
import { table } from '../../InputStrings';
import * as utils from './utils';
import useStyles from './style';
import AlertsTable from '../../AlertsTable';

const InputMatriz = ({ value, handleHeadersAndValues, headers, flows, error, required, maxHeaders = 3 }) => {
  const classes = useStyles();
  const [fields, setFields] = useState([]);
  const [localValue, setLocalValue] = useState([]);
  const [localHeaders, setLocalHeaders] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);

  const HEADERS = useMemo(() => localHeaders
    .map((option) => ({ key: option.name, value: option.label })), [localHeaders]);

  const VALUES = useMemo(() => {
    if (!localValue.length) return [];

    return localValue.reduce((acc, element) => {
      const row = element.reduce((accRow, column) => {
        const { name, value: _value } = column;
        accRow = { ...accRow, [name]: _value };
        return accRow;
      }, {});

      if (utils.ObjectNotEmpty(row)) acc.push(row);
      return acc;
    }, []);
  }, [localValue]);

  const deleteRow = (item, index) => {
    const newInformation = [...localValue];
    newInformation.splice(index, 1);
    handleHeadersAndValues({
      headers,
      values: newInformation,
    });
  };

  const editRow = (_value, index) => {
    const newFields = utils.generateFieldsWithValue(fields, _value);
    setFields(newFields);
    setEdit(true);
    setEditPosition(index);
  };

  const handleCleanTable = () => {
    handleHeadersAndValues({
      headers,
      values: [],
    });
  };

  const closeMessageError = () => {
    setTimeout(() => {
      setErrorMessages([]);
    }, 10000);
  };

  const valueFormated = (value) => {
    const newValues = value.map(({ flow, bestOption }) => {
      const { name, cat } = bestOption;
      return [
        {
          name: 'products',
          value: name,
        },
        {
          name: 'cat',
          value: cat.toString(),
        },
        {
          name: 'flow',
          value: flows.find(({ _id }) => _id === flow)?.name,
        }
      ];
    });
    return newValues;
  };

  useEffect(() => {
    if (headers.length) setLocalHeaders(headers);
    if (value.length) {
      const newValue = valueFormated(value);
      setLocalValue(newValue);
    }
    else if (localValue.length) {
      setLocalValue([]);
    }
  }, [value, headers]);

  useEffect(() => {
    setFields(utils.generateValueEmpty(localHeaders));
  }, [localHeaders]);

  useEffect(() => {
    if (errorMessages.length) closeMessageError();
  }, [errorMessages]);

  useEffect(() => {
    if (error && required) {
      setErrorMessages([
        table.errorMessages.empty
      ])
    }
  }, [error, required])

  return (
    <div>
      <div className={classes.content}>
      <div className={classes.tableContent}>
        <AlertsTable
          headers={HEADERS}
          items={VALUES}
          deleteRow
          onDeleteRow={deleteRow}
          edit
          onEdit={editRow}
          cleanTable
          handleCleanTable={handleCleanTable}
          maxHeaders={maxHeaders}
          disabled
        />
      </div>
    </div>
  </div>
  );
};

InputMatriz.propTypes = {
  value: PropTypes.array,
  flows: PropTypes.array,
  headers: PropTypes.array,
  handleHeadersAndValues: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

InputMatriz.defaultProps = {
  value: defaultData,
  flows: defaultFlows,
  headers: defaultHeader,
  required: false,
  error: false,
  handleHeadersAndValues: () => {},
  disabled: false,
};

export default InputMatriz;
