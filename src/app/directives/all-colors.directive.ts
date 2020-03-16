import { Directive, Input, Inject } from '@angular/core';
import { CODES_ACCESSOR, CodesComponent, CodesDirective, Codes } from 'codes-ng';
import { DEFAULT_COLOR_CODES } from '../models/color-codes';
import { CustomColorsService } from '../services/custom-colors.service';

@Directive({
    selector: '[appAllColors]'
})
@Codes('appAllColors')
export class AllColorsDirective implements CodesDirective {
    @Input() set appAllColors(enabled: boolean) { }

    getCodes() {
        return this.customColors.getCustomColors()
            .then(customColors => 
                DEFAULT_COLOR_CODES.concat(customColors)
            );
    }

    constructor(
        @Inject(CODES_ACCESSOR) public component: CodesComponent,
        private customColors: CustomColorsService
    ) { }
}