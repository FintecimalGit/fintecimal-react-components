export const textFormats = {
  UPPER: 'upperCase',
  LOWER: 'lowerCase',
  NUMBER: 'number'
};

export const status = {
  NORMAL: 'normal',
  FOCUS: 'focus',
  ERROR: 'error'
};

export const isEmpty = data => !data || data.length < 1;

export const isNumber = data => !isNaN(Number(data));
const MAX_LENGTH_LABEL = 100;
export const defaultPlaceHolder = 'Escribe aquí';
export const isTextLong = text => text.length > MAX_LENGTH_LABEL;

export const removeNan = text => {
  while (text.length > 0) {
    if (isNumber(text)) return text;
    else {
      text = text.slice(0, text.length - 1);
    }
  }
  return '';
};

export const formatText = (text, format) => {
  if (!text || text.length < 1) return '';
  if (format === textFormats.UPPER) {
    return text.toUpperCase();
  }
  if (format === textFormats.LOWER) {
    return text.toLowerCase();
  }
  if (format === textFormats.NUMBER) {
    if (isNumber(text)) {
      return text;
    } else return removeNan(text);
  }
};

export const validateRegex = (text, reg) => reg.test(text);
