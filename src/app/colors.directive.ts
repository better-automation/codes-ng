import { Directive, Input, Inject } from '@angular/core';
import { CODES_ACCESSOR, Codes } from 'codes-ng';
import { COLORS_CODES } from './color-codes';

@Directive({
    selector: '[appColors]'
})
export class ColorsDirective {
    @Input() set appColors(enabled: boolean) {
        if (enabled === false) {
            return;
        }

        this.component.codes = COLORS_CODES;
    }

    constructor(
        @Inject(CODES_ACCESSOR) private component: Codes
    ) { }
}