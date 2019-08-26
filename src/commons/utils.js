export const textFormats = {
    UPPER: 'upperCase',
    LOWER: 'lowerCase',
};

export const isEmpty = (data) => !data || data.length < 1;

export const formatText = (text, format) => {
    if(!text || text.length < 1) return '';
    if (format === textFormats.UPPER) {
        return text.toUpperCase();
    }
    if (format === textFormats.LOWER) {
        return text.toLowerCase();
    }
};

export const validateRegex = (text, reg) => reg.test(text);