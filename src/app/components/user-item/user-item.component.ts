import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
})
export class UserItemComponent{

  @Input() userData!: User;
  @Input() navigateTrue!: boolean

  constructor(private router: Router) {
  }

  navigate() {
    this.router.navigate(['/users-list/user', this.userData.id])
  }

}
