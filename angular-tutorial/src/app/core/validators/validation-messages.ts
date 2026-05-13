export const VALIDATION_MESSAGES: any = {
  firstName: {
    required: 'First Name is required',
    minlength: 'Minimum 3 characters required',
    maxlength: 'Maximum 10 characters allowed',
    invalidName: 'Only alphabets allowed',
  },
  lastName: {
    required: 'Last Name is required',
    minlength: 'Minimum 3 characters required',
    maxlength: 'Maximum 10 characters allowed',
    invalidName: 'Only alphabets allowed',
  },
  email: {
    required: 'Email is required',
    email: 'Invalid email format',
  },
  mobile: {
    required: 'Mobile is required',
    invalidMobile: 'Invalid mobile number',
  },
};
