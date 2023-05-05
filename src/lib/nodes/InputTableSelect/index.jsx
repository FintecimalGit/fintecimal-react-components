/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/prop-types */
import React, {
  memo, useCallback, useEffect, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

import { Box } from '@material-ui/core';
import * as utils from './utils';
import useStyles from './useStyles';
import { table } from '../../InputStrings';
import { defaultInputTableSelectValue, defaultHeaderTableSelect } from './defaults';
import Fields from './components/Fields';
import Table from './components/Table';
import CustomField from './components/CustomField';

const InputTableSelect = ({
  value,
  headers,
  handleHeadersAndValues,
  error,
  required,
  keysMatch,
  internSelectLabel,
}) => {
  const classes = useStyles();

  const [fields, setFields] = useState([]);
  const [localHeaders, setLocalHeaders] = useState([]);
  const [localValue, setLocalValue] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [edit, setEdit] = useState(false);
  const [editPosition, setEditPosition] = useState();
  const [elementSelected, setElementSelected] = useState('');
  const [elementsList, setElementsList] = useState([]);
  const HEADERS = useMemo(
    () => localHeaders.map((option) => ({
      key: option.name,
      value: option.label,
    })),
    [localHeaders],
  );

  const VALUES = useMemo(() => {
    if (!localValue.length) return [];

    const newLocalValue = Array.from(localValue);

    return newLocalValue.reduce((acc, element) => {
      const row = element.reduce((accRow, column) => {
        const { name, value: _value } = column;
        return { ...accRow, [name]: _value };
      }, {});

      if (utils.ObjectNotEmpty(row)) acc.push(row);
      return acc;
    }, []);
  }, [localValue]);

  const generateData = useCallback(
    (data) => data.map((field) => ({
      name: field.name,
      label: field.label,
      value: field.value,
    })),
    [],
  );



  const deleteRowBySelectedElement = (_selectedValue, indexPosition = -1) => {
    const searchValues = _selectedValue.split(' - ');

    const valueClone = [...value];

    return valueClone.map((obj) => {
      const keys = Object.keys(obj.keys);

      const matchFound = keysMatch.every((matchKey) => {
        const keyIndex = keys.indexOf(matchKey);

        if (keyIndex >= 0) {
          const keyValue = obj.keys[keys[keyIndex]];
          const searchKeyValue = searchValues[keyIndex];

          return keyValue === searchKeyValue;
        }

        return false;
      });

      if (matchFound) {
        const objClone = { ...obj };
        if (indexPosition === -1) {
          objClone.value = [];
        } else {
          objClone.value = [
            ...objClone.value.slice(0, indexPosition),
            ...objClone.value.slice(indexPosition + 1),
          ];
        }
        return objClone;
      }

      return obj;
    });
  };

  const updateOrAddRowBySelectedElement = (
    _selectedValue,
    newRow,
    isEdit = false,
    currentEditPosition = -1,
    ) => {
    const searchValues = _selectedValue.split(' - ');

    const valueClone = [...value];

    return valueClone.map((obj) => {
      const keys = Object.keys(obj.keys);

      const matchFound = keysMatch.every((matchKey) => {
        const keyIndex = keys.indexOf(matchKey);

        if (keyIndex >= 0) {
          const keyValue = obj.keys[keys[keyIndex]];
          const searchKeyValue = searchValues[keyIndex];

          return keyValue === searchKeyValue;
        }

        return false;
      });

      if (matchFound) {
        const objClone = { ...obj };
        if (
          isEdit
          && currentEditPosition >= 0
          && currentEditPosition < objClone.value.length
        ) {
          const updatedValue = objClone.value.map((_value, indexPosition) => {
            if (indexPosition === currentEditPosition) {
              return newRow;
            }
            return _value;
          });

          objClone.value = updatedValue;
        } else {
          objClone.value = [...obj.value, newRow];
        }
        return objClone;
      }

      return obj;
    });
  };

  const addNewRow = (dataField) => {
    if (edit) {
      const newValues = updateOrAddRowBySelectedElement(
        elementSelected,
        generateData(dataField),
        true,
        editPosition,
      );

      handleHeadersAndValues({
        headers,
        values: newValues,
      });
      setEdit(false);
      setEditPosition(0);
    } else {
      const newValues = updateOrAddRowBySelectedElement(elementSelected, generateData(dataField));

      handleHeadersAndValues({
        headers,
        values: newValues,
      });
    }
  };

  const deleteRow = (item, index) => {
    const newValues = deleteRowBySelectedElement(elementSelected, index);
    handleHeadersAndValues({
      headers,
      values: newValues,
    });
  };

  const editRow = (_value, index) => {
    const newFields = utils.generateFieldsWithValue(fields, _value);
    setFields(newFields);
    setEdit(true);
    setEditPosition(index);
  };

  const handleCleanTable = () => {
    const newValues = deleteRowBySelectedElement(elementSelected);
    handleHeadersAndValues({
      headers,
      values: newValues,
    });
  };

  const closeMessageError = () => {
    setTimeout(() => {
      setErrorMessages([]);
    }, 10000);
  };

  const handleOnChangeField = (field, index, _value) => {
    const newFields = fields.map((_field) => ({
      ..._field,
      ...(_field.id === field.id ? { value: _value } : null),
    }));
    const fieldsUnhide = utils.changeHideChildrens(newFields[index], newFields);
    setFields(fieldsUnhide);
  };

  const getValueByElementSelected = (_selectedValue) => {
    const searchValues = _selectedValue.split(' - ');

    const valueClone = [...value];

    return valueClone.reduce((result, obj) => {
      const keys = Object.keys(obj.keys);

      const matchFound = keysMatch.every((matchKey) => {
        const keyIndex = keys.indexOf(matchKey);

        if (keyIndex >= 0) {
          const keyValue = obj.keys[keys[keyIndex]];
          const searchKeyValue = searchValues[keyIndex];

          return keyValue === searchKeyValue;
        }

        return false;
      });

      if (matchFound) {
        // eslint-disable-next-line no-param-reassign
        result = obj.value;
      }

      return result;
    }, []);
  };

  const onChangeElement = (_value) => {
    const resultValue = getValueByElementSelected(_value);
    setElementSelected(_value);
    setLocalValue(resultValue);
  };

  useEffect(() => {
    if (headers.length) setLocalHeaders(headers);
    if (value.length) {
      const newList = value.map(({ keys }, index) => ({
        id: index,
        value: Object.values(keys).join(' - '),
        name: Object.values(keys).join(' - '),
      }));
      const newSelectedElement = elementSelected !== '' ? elementSelected : newList[0].value;
      const newValue = getValueByElementSelected(newSelectedElement);
      setElementSelected(newSelectedElement);
      setElementsList(newList);
      setLocalValue(newValue);
    } else if (localValue.length) setLocalValue([]);
  }, [value, headers]);

  useEffect(() => {
    setFields(utils.generateValueEmpty(localHeaders));
  }, [localHeaders]);

  useEffect(() => {
    if (errorMessages.length) closeMessageError();
  }, [errorMessages]);

  useEffect(() => {
    if (error && required) {
      setErrorMessages([table.errorMessages.empty]);
    }
  }, [error, required]);

  return (
    <div>
      <div className={classes.content}>
        <Box className={classes.boxFieldsContainer}>
          <div className={classes.fieldContainer}>
            <CustomField
              type="lista"
              name="list-drop"
              label={internSelectLabel}
              options={elementsList}
              handleChange={onChangeElement}
              value={elementSelected}
              className={classes.fieldClass}
            />
          </div>
        </Box>

        <Fields
          fieldValues={fields}
          handleOnChangeField={handleOnChangeField}
          setFieldsEmpty={setFields}
          addNewRow={addNewRow}
          edit={edit}
        />
        <div className={classes.tableContent}>
          <Table
            headers={HEADERS}
            items={VALUES}
            deleteRow
            onDeleteRow={deleteRow}
            edit
            onEdit={editRow}
            cleanTable
            handleCleanTable={handleCleanTable}
          />
        </div>
      </div>
    </div>
  );
};

InputTableSelect.propTypes = {
  value: PropTypes.array,
  headers: PropTypes.array,
  handleHeadersAndValues: PropTypes.func,
  required: PropTypes.bool,
  error: PropTypes.bool,
  keysMatch: PropTypes.array,
  internSelectLabel: PropTypes.string,
};

InputTableSelect.defaultProps = {
  value: defaultInputTableSelectValue,
  headers: defaultHeaderTableSelect,
  required: false,
  error: false,
  handleHeadersAndValues: () => {},
  keysMatch: [],
  internSelectLabel: 'Selecciona una opción',
};

export default InputTableSelect;
