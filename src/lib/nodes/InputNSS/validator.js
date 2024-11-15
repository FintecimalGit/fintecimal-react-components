import { isEmpty } from '../../commons/utils';

const MAX_SINGLE_DIGIT = 9;

export const nssValidator = {
  label: 'Número de seguridad social',
  errorMessages: {
    validation: 'Número de seguridad social no válido',
    empty: 'El campo es requerido',
  },
  type: 'text',
};

const luhn = (nssValue) => {
  let sum = 0;
  let isEvenPosition = false;

  for (let i = nssValue.length - 1; i >= 0; i -= 1) {
    let digit = parseInt(nssValue.charAt(i), 10);
    if (isEvenPosition) {
      digit *= 2;
      if (digit > MAX_SINGLE_DIGIT) {
        digit -= MAX_SINGLE_DIGIT;
      }
    }

    isEvenPosition = !isEvenPosition;
    sum += digit;
  }
  return sum % 10 === 0;
};

export const isValidNss = (data) => {
  if (isEmpty(data)) return false;
  const regE = /^(\d{2})(\d{2})(\d{2})\d{5}$/;
  const valid = data.match(regE);
  if (!valid) return false;

  const yearAlta = parseInt(valid[2], 10);
  const yearNac = parseInt(valid[3], 10);

  const adjustYear = (year) => {
    const currentYear = new Date().getFullYear();
    const currentCenturyStart = Math.floor(currentYear / 100) * 100;
    const yearModulo = currentYear % 100;
    if (year <= yearModulo) {
      return currentCenturyStart + year;
    }
    return currentCenturyStart - 100 + year;
  };

  const adjustedYearAlta = adjustYear(yearAlta);
  const adjustedYearNac = adjustYear(yearNac);

  if (adjustedYearNac > adjustedYearAlta) return false;

  return luhn(data);
};
