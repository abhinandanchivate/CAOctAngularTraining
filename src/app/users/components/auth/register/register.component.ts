import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  errorDetail = { name: '', password: '', email: '' };
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  registerSubmit() {
    // form handlerName = formNameSubmit

    console.log('hello from register submit');
    console.log(JSON.stringify(this.register));
    this.authService.registerUser(this.register).subscribe(
      (res) => {
        console.log('user registered successfully');
        console.log(res.token);
        // can wee hold this token either in cookies or in local storage

        localStorage.setItem('token', res.token);
        // we need to redirect the user to dashboard page.
        // this shoul happen dynamically

        this.router.navigate(['/dashboard']);
      },
      (err) => {
        console.log(JSON.stringify(err));
        err.error.errors.forEach((e: any) => {
          console.log('message :' + e.msg);
          console.log('name :' + e.param);
          console.log(JSON.stringify(e));
          if ('name' == e.param) {
            this.errorDetail.name = e.msg;
          }
          if ('email' == e.param) {
            this.errorDetail.email = e.msg;
          }
          if ('password' == e.param) {
            this.errorDetail.password = e.msg;
          }
        });
      }
    );

    // toString method java :
    // mongodb : / mongodb atlas (cloud instance)
  }
}
