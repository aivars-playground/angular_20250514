import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  addUser(fullName: string) {
    console.log('ADD USER:' + fullName);
  }
}
