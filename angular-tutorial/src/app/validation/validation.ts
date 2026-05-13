import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-validation',
  imports: [ReactiveFormsModule],
  templateUrl: './validation.html',
  styleUrl: './validation.css',
})
export class Validation {
  userData = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Za-z]{2,}$/),
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10),
      Validators.pattern(/^[A-Za-z]{2,}$/),
    ]),
    mobile: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]{9}$/)]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  onSubmit() {
    if (this.userData.invalid) {
      this.userData.markAllAsTouched();
      console.log('submit called');
      return;
    } else {
      console.log(this.userData.value);
    }
  }

  get firstName() {
    return this.userData.get('firstName');
  }

  get lastName() {
    return this.userData.get('lastName');
  }

  get mobile() {
    return this.userData.get('mobile');
  }

  get email() {
    return this.userData.get('email');
  }
}
