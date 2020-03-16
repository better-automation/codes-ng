import { Directive, Input, Inject } from '@angular/core';
import { CODES_ACCESSOR, CodesComponent, CodesDirective, Codes } from 'codes-ng';
import { COLOR_TYPE_CODES } from '../models/color-type-codes';


@Directive({
    selector: '[appColorTypes]'
})
@Codes('appColorTypes')
export class ColorTypesDirective implements CodesDirective {
    @Input() set appColorTypes(enabled: boolean) { }

    getCodes() {
        return COLOR_TYPE_CODES;
    }

    constructor(
        @Inject(CODES_ACCESSOR) public component: CodesComponent
    ) { }
}