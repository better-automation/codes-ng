import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedColor = '#hhhhhh';

  setBackgroundColor(color: string) {
    this.selectedColor = color;
  }
}
