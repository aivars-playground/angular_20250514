import { Component } from '@angular/core';
import {IUser} from "../user/user.model";
import {UserService} from "../user/user.service";

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent {

  user: IUser | null = null;
  showSignoutMenu: boolean = false;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe({
     next: (user) => {this.user = user}
    })
  }

  toggleSignoutMenu() {
    this.showSignoutMenu = !this.showSignoutMenu;
  }

  signOut() {
    this.userService.signOut();
    this.showSignoutMenu = false;
  }

}
