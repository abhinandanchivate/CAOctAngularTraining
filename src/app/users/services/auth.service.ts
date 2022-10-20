import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Register } from '../models/register';

const headers = { headers: { 'Content-Type': 'application/json' } };
@Injectable({
  providedIn: 'root',
}) // it will inform to the angular that boss this is the service.
// this decorator will inform that angualr has to create a singleton object for hte same.
// httpClientService : it is a part of httpClientModule
// we have to import that module.
export class AuthService {
  // DI of httpClientService object
  constructor(private httpClient: HttpClient) {}

  registerUser(registerData: Register): Observable<any> {
    return this.httpClient.post('/api/users', registerData, headers);
  }
}
