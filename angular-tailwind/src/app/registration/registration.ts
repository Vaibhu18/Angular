import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CustomValidators } from '../core/validators/custom-validators';
import { VALIDATION_MESSAGES } from '../core/validators/validation-messages';
import { getErrorMessage } from '../shared/utils/form-error.util';
import { NgClass, NgIf } from '@angular/common';

type UserData = FormGroup<{
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  mobile: FormControl<string>;
}>;

@Component({
  selector: 'app-registration',
  imports: [ReactiveFormsModule, NgClass, NgIf],
  templateUrl: './registration.html',
  styleUrl: './registration.css',
})
export class Registration {
  userData: UserData;
  messages = VALIDATION_MESSAGES;
  loading: boolean = false;
  successMessage: string = '';

  constructor(private fb: NonNullableFormBuilder) {
    this.userData = this.fb.group({
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

  onSubmit() {
    if (this.userData.invalid) {
      this.userData.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.successMessage = '';

    const data = this.userData.getRawValue();

    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Registration successful';

      this.userData.reset();
      console.log(data);
    }, 2000);
  }

  getError(controlName: keyof UserData['controls']): string {
    return getErrorMessage(this.userData.controls[controlName], controlName, this.messages);
  }
}
