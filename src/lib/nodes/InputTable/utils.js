export const generateValueEmpty = (fieldArray) => fieldArray.map((field) => ({
  id: field.id,
  name: field.name,
  label: field.label,
  type: field.type,
  value: '',
  required: field.required,
}));

export const generateFieldsWithValue = (fields, values) => fields.reduce((acc, field) => {
  acc.push({ ...field, value: values[field.name] });
  return acc;
}, []);

export const getHeadersFromCSV = (data = []) => {
  const firstRow = data[0];
  return Object.keys(firstRow).map((key) => key);
};

export const includesHeaders = (arr1, arr2) => arr1.map((item) => (arr2.includes(item) ? null : item)).filter((item) => item);

export const createHeadersFromCSV = (headersFromCSV, headersColumns) => headersFromCSV.reduce((acc, header, index) => {
  const headerFounded = headersColumns.find((headerColumn) => headerColumn.name === header);
  acc.push({
    id: index,
    name: header.replace(/\W/g, '_'),
    label: header.replaceAll('_', ' '),
    type: 'respuesta corta',
    required: (headerFounded) ? headerFounded.required : false,
  });
  return acc;
}, []);

const checkColumnsHasDataByRow = (row) => Object.keys(row).some((r) => row[r] !== '' && row[r] !== undefined);

export const createItemsFromCSV = (items, headers) => items.reduce((acc, item) => {
  const data = [];
  if (checkColumnsHasDataByRow(item)) {
    headers.map((header) => {
      data.push({
        name: header.replace(/\W/g, '_'),
        label: header.replaceAll('_', ' '),
        value: item[header],
      });
    });
    acc.push(data);
  }
  return acc;
}, []);

export const ObjectNotEmpty = (obj) => Object.keys(obj).length;

export const getExtensionFile = ({ name = '' }) => name.split('.').pop();
