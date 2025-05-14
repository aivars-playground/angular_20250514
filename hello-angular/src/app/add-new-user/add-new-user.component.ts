import { Component } from '@angular/core';

@Component({
  selector: 'app-add-new-user',
  imports: [],
  templateUrl: './add-new-user.component.html',
  styleUrl: './add-new-user.component.css'
})
export class AddNewUserComponent {
  fullName: string = 'testUser'

  deleteUser(fullName: string) {
    console.log('DELETING USER:' + fullName);
  }
}
