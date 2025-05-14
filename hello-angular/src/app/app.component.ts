import { Component } from '@angular/core';
import {AboutComponent} from './about/about.component';
import {AddNewUserComponent} from './add-new-user/add-new-user.component';

@Component({
  selector: 'app-root',
  imports: [AboutComponent, AddNewUserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
