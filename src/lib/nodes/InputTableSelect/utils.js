import _ from 'lodash';

export const ObjectNotEmpty = (obj) => Object.keys(obj).length;

export const generateValueEmpty = (fieldArray) => fieldArray.map((field) => ({
  id: field.id,
  name: field.name,
  value: '',
  label: field.label,
  type: field.type,
  required: field.required,
  options: field.options || [],
  hide: field.parentValue ? true : field.hide || false,
  children: field.children || [],
  parentValue: field.parentValue,
  hideRequired: field.hideRequired || false,
  format: field.format || 'LL',
}
));

export const generateFieldsWithValue = (fields, values) => fields.reduce((acc, field) => {
  acc.push({ ...field, value: values[field.name] });
  return acc;
}, []);

export const changeHideChildrens = (field, fieldsValues) => {
  const newFields = _.cloneDeep(fieldsValues);
  const { value = '', children = [] } = field;

  if (children.length === 0) return newFields;

  const fieldsValidated = newFields.reduce((acc, _field) => {
    const { id, parentValue = '', hideRequired = false } = _field;
    if (children.indexOf(id) === -1) {
      acc.push(_field);
      return acc;
    }
    let newField = { ..._field };
    if (value === parentValue || parentValue === '') {
      newField = { ...newField, hide: false, required: hideRequired };
      acc.push({ ...newField });
    } else {
      acc.push({ ...newField, hide: true, required: false });
    }
    return acc;
  }, []);

  return fieldsValidated.sort((_field, nextField) => (_field.id > nextField.id ? 1 : -1));
};
