import { AbstractControl } from '@angular/forms';

export function getErrorMessage(
  control: AbstractControl,
  controlName: string,
  messages: any,
): string {
  if (!control || !control.touched || !control.errors) return '';

  const errors = control.errors;

  for (const errorKey of Object.keys(errors)) {
    if (messages[controlName] && messages[controlName][errorKey]) {
      return messages[controlName][errorKey];
    }
  }
  return '';
}
