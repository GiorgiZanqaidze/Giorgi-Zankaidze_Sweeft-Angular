import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{


  constructor(private route: ActivatedRoute, private userService: UserService) {
  }

  user: any

  ngOnInit() {
    let userId
      this.route.params.subscribe((params) => {
        this.userService.getUserById(params['id']).subscribe((res) => {
          this.user = res
          userId = params['id']
          console.log(res)
        })
      })

    this.userService.getUserFriends(1).subscribe((res) => {
      console.log(res)
    })
  }
}
