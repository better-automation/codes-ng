import { Code } from './code.model';

export interface CodesComponent {
    codes: Code[];
    updateCodes?: () => void;
}
