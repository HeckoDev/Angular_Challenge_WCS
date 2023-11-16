import {AbstractControl, ValidationErrors} from "@angular/forms";

export function emailValidation (control: AbstractControl): ValidationErrors | null {
  const emailRegex = RegExp('wilder.school');
  const valid = emailRegex.test(control.value);

  const errors = {
    password: {
      rules: 'L email doit se terminer par wilder.school'
    }
  };

  return !valid ? errors : null;

}
