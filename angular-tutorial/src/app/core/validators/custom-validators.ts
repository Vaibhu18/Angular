import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidators {
  static name(): (control: AbstractControl) => ValidationErrors | null {
    return (control) => {
      const value = control.value;
      if (!value) return null;
      const valid = /^[A-Za-z ]+$/.test(value);
      return valid ? null : { invalidName: true };
    };
  }

  static mobile(): (control: AbstractControl) => ValidationErrors | null {
    return (control) => {
      const value = control.value;
      if (!value) return null;
      const valid = /^[6-9][0-9]{9}$/.test(value);
      return valid ? null : { invalidMobile: true };
    };
  }
}
