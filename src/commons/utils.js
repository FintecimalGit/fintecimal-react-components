export const textFormats = {
    UPPER: 'upperCase',
    LOWER: 'lowerCase',
    NUMBER: 'number',
};

export const isEmpty = (data) => !data || data.length < 1;

export const isNumber = (data) =>  (typeof data === 'number' && isFinite(data));

export const formatText = (text, format) => {
    if(!text || text.length < 1) return '';
    if (format === textFormats.UPPER) {
        return text.toUpperCase();
    }
    if (format === textFormats.LOWER) {
        return text.toLowerCase();
    }
    if (format === textFormats.NUMBER) {
        console.log('FORMAT Number');
        if (isNumber) return text;
        else {
            return text.slice(0, text.length - 1);
        }
    }
};

export const validateRegex = (text, reg) => reg.test(text);