import { Component } from '@angular/core';
import { FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  userForm = new FormGroup({
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    address: new FormGroup({
      street: new FormControl(''),
      postalCode: new FormControl(''),
      city: new FormControl('')
    })
  });

    onSubmit() {
      const newUser = this.userForm.value;
      console.log(newUser);

      this.userForm.reset();
    }

}
