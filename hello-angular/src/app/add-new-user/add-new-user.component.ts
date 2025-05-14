import { Component } from '@angular/core';
import {UserService} from '../user.service';

@Component({
  selector: 'app-add-new-user',
  imports: [],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.css'
})
export class AddNewUserComponent {

  constructor(private userService: UserService) {}

  fullName: string = 'testUser'

  addUser(fullName: string) {
    this.userService.addUser(fullName)
  }
}
