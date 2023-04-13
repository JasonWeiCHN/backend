import { Component } from '@angular/core';
import {FieldType, FieldTypeConfig} from '@ngx-formly/core';

@Component({
  selector: 'a-front-formly-custom-input',
  template: `
    <a-front-custom-input
      [formControl]="formControl"
      [formlyAttributes]="field"
      [disabled]="!!props.disabled"
    ></a-front-custom-input>
  `,
})
export class FormlyCustomInputTypeComponent extends FieldType<FieldTypeConfig> {}
