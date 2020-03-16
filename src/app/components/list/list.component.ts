import { Component, Output, EventEmitter, forwardRef, Input } from '@angular/core';
import { CODES_ACCESSOR, CodesComponent, Code } from 'codes-ng';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [{
    provide: CODES_ACCESSOR,
    useExisting: forwardRef(() => ListComponent)
  }]
})
export class ListComponent implements CodesComponent {
  public codes: Code[];

  @Output() select = new EventEmitter<void>();

  onSelect(value: any) {
    this.select.emit(value);
  }
}
