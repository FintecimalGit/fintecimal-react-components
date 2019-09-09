const CLABE_LENGTH = 18;
const clabeWeights = [3,7,1,3,7,1,3,7,1,3,7,1,3,7,1,3,7];
export const BANKS = {
    '002': 'BANAMEX',
    '012': 'BANCOMER',
    '014': 'SANTANDER',
    '019': 'BANJERCITO',
    '021': 'HSBC',
    '022': 'GE MONEY',
    '030': 'BANCO DEL BAJIO',
    '032': 'IXE',
    '036': 'INBURSA',
    '037': 'INTERACCIONES',
    '042': 'MIFEL',
    '044': 'SCOTIABANK',
    '058': 'BANREGIO',
    '059': 'INVEX',
    '060': 'BANSI',
    '062': 'AFIRME',
    '072': 'BANORTE',
    102: 'ABNAMRO',
    103: 'AMERICAN EXPRESS',
    106: 'BAMSA',
    108: 'TOKYO',
    110: 'MORGAN',
    112: 'BMONEX',
    113: 'VE POR MAS',
    116: 'ING',
    124: 'DEUTSCHE',
    126: 'CREDIT SUISSE',
    127: 'AZTECA',
    128: 'AUTOFIN',
    129: 'BARCLAYS',
    130: 'COMPARTAMOS',
    131: 'FAMSA',
    132: 'BMULTIVA',
    133: 'PRUDENTIAL',
    134: 'WAL-MART',
    136: 'REGIONAL',
    137: 'BANCOPPEL',
    138: 'AMIGO',
    139: 'UBS BANK',
    140: 'FACIL',
    166: 'BANSEFI',
    168: 'SOCIEDAD HIPOTECARIA FEDERAL',
    600: 'MONEXCB',
    601: 'GBM',
    602: 'MASARI',
    604: 'INBURSA',
    605: 'VALUÉ',
    606: 'CB BASE',
    607: 'TIBER',
    608: 'VECTOR',
    610: 'B&B',
    611: 'INTERCAM',
    613: 'MULTIVA',
    614: 'ACCIVAL',
    615: 'MERRIL LYNCH',
    616: 'FINAMEX',
    617: 'VALMEX',
    618: 'ÚNICA',
    619: 'MAPFRE',
    620: 'PROFUTURO',
    621: 'ACTINBER',
    622: 'ACTINVE',
    623: 'SKANDIA',
    624: 'CONSULTORÍA',
    627: 'ZURICH',
    628: 'ZURICHVI',
    629: 'HIPOTECARIA CASITA',
    630: 'INTERCAM',
    631: 'VANGUARDIA',
    632: 'BULLTICK',
    633: 'STERLING',
    634: 'FINCOMUN',
    637: 'AAC ORDER',
    638: 'AKALA',
    640: 'MORGAN',
    646: 'STP',
    649: 'SKANDIA',
    901: 'International',
    902: 'INDEVAL',
};

export const getBank = (CLABE) => {
    if (!CLABE || CLABE.length !== CLABE_LENGTH) return ' ';
    const bank = BANKS[CLABE.slice(0, 3)];
    return (bank || ' ');
};

const getClabeControlDigit = (clabe) => clabe.substr(17,18);
const getClabeKey = (clabe) => clabe.substr(0,17);
export const validateClabe = (clabe) => {
    let sum = 0;
    const key = getClabeKey(clabe).split('');
    const control = parseInt(getClabeControlDigit(clabe),10);
    if (isNaN(control)) return false;
    for(let i = 0; i < key.length; i++) {
        const intElement = parseInt(key[i], 10);
        if (isNaN(intElement)) return false;
        const mult = (intElement * clabeWeights[i]) % 10;
        sum += mult;
    }
    sum = (10 - (sum % 10)) % 10;
    return (control === sum);
};
