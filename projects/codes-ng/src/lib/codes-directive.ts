import { CodesComponent } from './codes-component';
import { Code } from './code.model';

export interface CodesDirective {
    component: CodesComponent,
    getCodes: () => Code[] | Promise<Code[]>,
    runUpdate?: (enabled: boolean) => void;
}