export const text = {
    label: 'Texto',
    errorMessages: {
        validation: 'Texto con formato no válido',
        empty: 'El campo es requerido'
    },
    type: 'text'
};

export const email = {
    label: 'Correo electrónico',
    errorMessages: {
        validation: 'Correo electrónico con formato no válido',
        empty: 'El correo electrónico es requerido'
    },
    type: 'email'
};

export const rfc = {
    label: 'RFC',
    errorMessages: {
        validation: 'RFC incompleto o con formato incorrecto',
        empty: 'El campo RFC es requerido'
    },
    type: 'text'
};

export const curp = {
    label: 'CURP',
    errorMessages: {
        validation: 'CURP incompleto o con formato incorrecto',
        empty: 'El campo CURP es requerido'
    },
    type: 'text'
};

export const number = {
    label: 'Número',
    errorMessages: {
        validation: 'Campo con formato incorrecto',
        empty: 'El campo es requerido'
    },
    type: 'text',
};

export const cellphone = {
    label: 'Celular',
    errorMessages: {
        validation: 'El número no es válido',
        empty: 'El campo es requerido'
    },
    type: 'tel',
};

export const list = {
    label: 'Selecciona una opción',
    errorMessages: {
        validation: 'Selección no válida',
        empty: 'Debes seleccionar una opción'
    },
    type: 'list'
};

export const clabe = {
    label: 'CLABE',
    errorMessages: {
        validation: 'CLABE interbancaria incompleta o no válida',
        empty: 'El campo CLABE es requerido'
    },
    type: 'text'
};

export const table = {
    label: 'Tabla',
    errorMessages: {
        validation: 'Tabla con formato no válido',
        empty: 'Es necesario se agregue información válida a la tabla.'
    },
    type: 'table'
};

export const radio = {
  label: 'Selecciona una opción',
  errorMessages: {
    validation: 'Selección no válida',
    empty: 'Debes seleccionar una opción',
  },
  type: 'radio',
};

export const generateErrorMessagesByLabel = (type, label = '') => {
    return  {
        validation: type.errorMessages.validation,
        empty: `El campo ${label} es requerido`
    };
};