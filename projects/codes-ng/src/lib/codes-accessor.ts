import { InjectionToken } from '@angular/core';
import { CodesComponent } from './codes-component';

export const CODES_ACCESSOR = new InjectionToken<CodesComponent>('CodesAccessor');
