import { AbstractControl } from '@angular/forms';

export function getErrorMessage(
  control: AbstractControl | null,
  fieldName: string,
  messages: any,
): string {
  if (!control || !control.touched || !control.errors) return '';

  const errors = control.errors;

  for (const errorKey of Object.keys(errors)) {
    if (messages[fieldName][errorKey]) {
      return messages[fieldName][errorKey];
    }
  }
  return '';
}
