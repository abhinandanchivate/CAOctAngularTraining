import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/users/models/register';
import { AuthService } from 'src/app/users/services/auth.service';

// whenever we want to perform the rest calls or any business validations, any common functionalities , we should  perform them under the service class.

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  registerSubmit() {
    // form handlerName = formNameSubmit

    console.log('hello from register submit');
    console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe(
      (res) => {
        console.log('user registered successfully');
      },
      () => {}
    );

    // toString method java :
    // mongodb : / mongodb atlas (cloud instance)
  }
}
