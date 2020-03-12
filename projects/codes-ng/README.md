# codes-ng

## Purpose

This package was created because I wanted a shortcut to creating selectable lists in Angular.

## Code Interface

You will need a list of objects that implement the Code interface.

```typescript
import { Code } from 'codes-ng';

export const COLORS_CODES: Code[] = [
    new Code('Red', '#ff0000'),
    new Code('Green', '#00ff00'),
    new Code('Blue', '#0000ff'),
    new Code('Yellow', '#ffff00')
];
```

## List Component

codes-ng was created for displaying selectable lists that require a label and a value.

```html
<select *ngIf="codes">
    <option *ngFor="let code of codes" [value]="code.value">
        {{ code.label }}
    </option>
</select>
```

* Register the CODES_ACCESSOR provider
* Implement the Codes interface

```typescript
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
}
```

## Directive

Next, create a custom directive that populates the list data.

* Inject the component with CODES_ACCESSOR and the Codes interface
* Use the setter to set the "codes" property of the component

```typescript
import { Directive, Input, Inject } from '@angular/core';
import { CODES_ACCESSOR, Codes } from 'codes-ng';
import { COLORS_CODES } from './color-codes';

@Directive({
    selector: '[appColors]'
})
export class ColorsDirective {
    @Input() set appColors(enabled: boolean) {
        if (enabled === false) {
            return;
        }

        this.component.codes = COLORS_CODES;
    }

    constructor(
        @Inject(CODES_ACCESSOR) private component: Codes
    ) { }
}
```

## Using the directive

Include the directive when using the list component.

```html
<app-list appColors (select)="setBackgroundColor($event)"></app-list>
```