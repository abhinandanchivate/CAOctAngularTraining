import { Component, OnInit } from '@angular/core';
import { Register } from 'src/app/users/models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  register: Register = new Register();
  constructor() {}

  ngOnInit(): void {}

  registerSubmit() {
    // form handlerName = formNameSubmit

    console.log('hello from register submit');
    console.log(JSON.stringify(this.register));
    // toString method java :
    // mongodb : / mongodb atlas (cloud instance)
  }
}
