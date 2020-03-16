import { Injectable } from "@angular/core";
import { Code } from 'projects/codes-ng/src/public-api';
import { CUSTOM_COLOR_CODES } from '../models/color-codes';

@Injectable()
export class CustomColorsService {
    public hasCustomColors = false;

    public getCustomColors(): Promise<Code[]> {
        return new Promise(resolve => {
            setTimeout(() => {
                if (!this.hasCustomColors) {
                    return resolve([]);
                }

                resolve(CUSTOM_COLOR_CODES);
            }, 2000);
        });
    }
}