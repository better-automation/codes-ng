import { Component, ViewChild } from '@angular/core';
import { DEFAULT_COLOR } from './models/color-codes';
import { DEFAULT_COLOR_TYPE } from './models/color-type-codes';
import { CustomColorsService } from './services/custom-colors.service';
import { CodesComponent } from 'projects/codes-ng/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('colorsList', { static: false }) colorsList: CodesComponent;

  color = DEFAULT_COLOR;
  borderColor = DEFAULT_COLOR;
  colorType = DEFAULT_COLOR_TYPE;

  get hasCustomColors() {
    return this.customColors.hasCustomColors;
  }

  constructor(
    private customColors: CustomColorsService
  ) { }

  updateCustomColors() {
    this.customColors.hasCustomColors = !this.hasCustomColors;

    this.colorsList.updateCodes();
  }
}
