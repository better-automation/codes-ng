import { Code } from 'codes-ng';

export const CUSTOM_COLOR_CODES: Code[] = [
    new Code('Yellow', '#ffff00'),
    new Code('Brown', '#a52a2a'),
    new Code('Orange', '#ffa500')
];

export const DEFAULT_COLOR_CODES: Code[] = [
    new Code('White', '#ffffff'),
    new Code('Red', '#ff0000'),
    new Code('Green', '#00ff00'),
    new Code('Blue', '#0000ff'),
    new Code('Black', '#000000')
];

export const DEFAULT_COLOR = DEFAULT_COLOR_CODES[0].value;