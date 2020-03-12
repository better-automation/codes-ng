import { Component, Output, EventEmitter, forwardRef } from '@angular/core';
import { CODES_ACCESSOR, Codes, Code } from 'codes-ng';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [{
    provide: CODES_ACCESSOR,
    useExisting: forwardRef(() => ListComponent)
  }]
})
export class ListComponent implements Codes {
  public codes: Code[];

  @Output() select = new EventEmitter<void>();

  onSelect(value: any) {
    this.select.emit(value);
  }
}
