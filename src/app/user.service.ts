import { Injectable } from '@angular/core';
import { Users } from './users/userK';
import { USERS } from './users';
import { Profile} from './auth/profile'
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  getUsers(): Observable<Users[]> {
    return of (USERS);
  }
}
