import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'a-front-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor {
  @Input() disabled = false;
  value: any = '';
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    // console.log('writeValue', value);
    this.value = value;
  }

  registerOnChange(fn: any): void {
    console.log(fn)
    this.onChange = (value) => {
      // console.log('onChange', value);
      fn(value);
    };
  }

  registerOnTouched(fn: any): void {
    // console.log(fn)
    this.onTouched = () => {
      // console.log('onTouched Bili');
    };
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
  }

  // 注意: 这个方法不属于 ControlValueAccessor , 是为了让你能够通知外部组件值是否 Change 或者 Touch
  updateValue(value: any) {
    this.value = value;
    this.onChange(value);
  }
}
