import { Directive, Input, Inject } from '@angular/core';
import { CODES_ACCESSOR, CodesComponent, CodesDirective, Codes } from 'codes-ng';
import { DEFAULT_COLOR_CODES } from '../models/color-codes';

@Directive({
    selector: '[appDefaultColors]'
})
@Codes('appDefaultColors')
export class DefaultColorsDirective implements CodesDirective {
    @Input() set appDefaultColors(enabled: boolean) { }

    getCodes() {
        console.log('getting appDefaultColors')
        return DEFAULT_COLOR_CODES;
    }

    constructor(
        @Inject(CODES_ACCESSOR) public component: CodesComponent
    ) { }
}