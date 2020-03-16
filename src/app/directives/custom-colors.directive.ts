import { Directive, Input, Inject } from '@angular/core';
import { CODES_ACCESSOR, CodesComponent, CodesDirective, Codes } from 'codes-ng';
import { CustomColorsService } from '../services/custom-colors.service';

@Directive({
    selector: '[appCustomColors]'
})
@Codes('appCustomColors')
export class CustomColorsDirective implements CodesDirective {
    @Input() set appCustomColors(enabled: boolean) { 
        console.log('directive setter', enabled);
    }

    getCodes() {
        return this.customColors.getCustomColors();
    }

    constructor(
        @Inject(CODES_ACCESSOR) public component: CodesComponent,
        private customColors: CustomColorsService
    ) { }
}