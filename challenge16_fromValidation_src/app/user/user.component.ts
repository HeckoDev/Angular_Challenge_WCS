import { Component } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {emailValidation} from "./emailValidation";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      password: new FormControl(''),
      credentials: this.fb.group({
        email: ['', [Validators.required, emailValidation]]
      })
    });
  }

  onSubmit() {
    const newUser = this.userForm.value;
    console.log(newUser);

    this.userForm.reset();
  }
}
