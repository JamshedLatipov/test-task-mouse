import {
  Component,
  ChangeDetectionStrategy,
  Input,
  forwardRef,
  ChangeDetectorRef,
  OnInit,
} from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';

const TEXT_FIELD_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TextFieldComponent),
  multi: true,
};

@Component({
  selector: 'app-text-field',
  templateUrl: './text-field.component.html',
  styleUrls: ['./text-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TEXT_FIELD_VALUE_ACCESSOR],
})
export class TextFieldComponent implements ControlValueAccessor, OnInit {
  public id: string = ((Math.random() * Date.now()) | 0)
    .toString(16)
    .substring(1);

  @Input()
  public label: string;

  @Input()
  public placeholder: string = '';

  @Input()
  public type: 'text' | 'email' | 'password' | 'date' | 'number' | 'time' =
    'text';


  @Input()
  public required: boolean = false;

  @Input()
  public pattern: RegExp | string = null;

  @Input()
  public readonly: boolean = false;

  @Input()
  public disabled: boolean = false;


  public value: string;

  constructor(private _cdr: ChangeDetectorRef) {}

  public ngOnInit(): void {}

  public onChange(value: any): void {
    this.value = value.target.value;
    this._onChange(value.target.value);
    this._cdr.markForCheck();
  }

  public onBlur(): void {
    this._onTouched();
  }

  public registerOnChange(fn: Function): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: Function): void {
    this._onTouched = fn;
  }

  public setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  public writeValue(value: string): void {
    this.value = value;
  }

  private _onChange: Function = () => {};

  private _onTouched: Function = () => {};
}
