import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { VALIDATION_MESSAGES } from '../core/validators/validation-messages';
import { CustomValidators } from '../core/validators/custom-validators';
import { getErrorMessage } from '../shared/utils/form-error.util';

type UserForm = FormGroup<{
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  mobile: FormControl<string>;
}>;

@Component({
  selector: 'app-validation3',
  imports: [ReactiveFormsModule],
  templateUrl: './validation3.html',
  styleUrl: './validation3.css',
})
export class Validation3 {
  form: UserForm;
  messages = VALIDATION_MESSAGES;

  constructor(private fb: NonNullableFormBuilder) {
    this.form = this.fb.group({
      firstName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        CustomValidators.name(),
      ]),
      lastName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        CustomValidators.name(),
      ]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      mobile: this.fb.control('', [Validators.required, CustomValidators.mobile()]),
    });
  }

  getError(controlName: keyof UserForm['controls']): string {
    return getErrorMessage(this.form.controls[controlName], controlName, this.messages);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const data = this.form.getRawValue();
    console.log(data);
  }
}
