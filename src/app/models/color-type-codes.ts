import { Code } from 'codes-ng';

export const COLOR_TYPE_CODES: Code[] = [
    new Code('All', 'ALL'),
    new Code('Custom Only', 'CUSTOM_ONLY'),
    new Code('Default Only', 'DEFAULT_ONLY')
];

export const DEFAULT_COLOR_TYPE = COLOR_TYPE_CODES[0].value;