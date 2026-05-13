import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

type UserForm = FormGroup<{
  firstName: FormControl<string>;
  lastName: FormControl<string>;
  email: FormControl<string>;
  mobile: FormControl<string>;
}>;

@Component({
  selector: 'app-validation2',
  imports: [ReactiveFormsModule],
  templateUrl: './validation2.html',
  styleUrl: './validation2.css',
})
export class Validation2 {
  loading: boolean = false;
  successMessage: string = '';
  userData: UserForm;

  constructor(private fb: NonNullableFormBuilder) {
    this.userData = this.fb.group({
      firstName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern(/^[a-zA-Z ]+$/),
      ]),
      lastName: this.fb.control('', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10),
        Validators.pattern(/^[a-zA-Z ]+$/),
      ]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      mobile: this.fb.control('', [Validators.required, Validators.pattern(/^[6-9]\d{9}$/)]),
    });
  }

  onSubmit() {
    if (this.userData.invalid) {
      this.userData.markAllAsTouched();
      return;
    }

    this.loading = true;
    this.successMessage = '';

    const raw = this.userData.getRawValue();

    const formData = {
      ...raw, // ✅ fully typed
      firstName: raw.firstName.trim(),
      lastName: raw.lastName.trim(),
    };

    console.log(formData);

    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Form submitted successfully!';
      this.userData.reset();
    }, 2000);
  }

  getErrors(control: FormControl<string>, field: string): string {
    if (!control || !control.touched) return '';
    if (control.errors?.['required']) return `${field} is required`;
    if (control.errors?.['minlength']) return `${field} must be at least 3 characters`;
    if (control.errors?.['maxlength']) return `${field} must not exceed 10 characters`;
    if (control.errors?.['pattern']) return `Invalid ${field}`;
    if (control.errors?.['email']) return `Invalid email address`;
    return '';
  }

  get f() {
    return this.userData.controls;
  }
}
