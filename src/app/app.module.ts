import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { DefaultColorsDirective } from './directives/default-colors.directive';
import { CustomColorsService } from './services/custom-colors.service';
import { AllColorsDirective } from './directives/all-colors.directive';
import { CustomColorsDirective } from './directives/custom-colors.directive';
import { ColorTypesDirective } from './directives/color-types.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AllColorsDirective,
    CustomColorsDirective,
    ColorTypesDirective,
    DefaultColorsDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [CustomColorsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
