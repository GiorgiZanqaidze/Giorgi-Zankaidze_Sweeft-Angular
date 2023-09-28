import {Component, HostListener, OnInit, ElementRef, ViewChild, TemplateRef} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {UserService} from "../../user.service";
import {User} from "../../user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  @ViewChild('elseBlock') elseBlock!: TemplateRef<any>


  constructor(
    private route: ActivatedRoute,
    private userService: UserService,

    private router: Router
  )
  {}

  userNotFoundMessage = "User Not Found"
  friendsNotFoundMessage = "Friends Not Found"

  user!: User;
  friends: User[] = [];
  userId!: number
  loading = false;
  page = 1;
  perPage = 2;

  ngOnInit() {
      this.loading = true;
      this.route.params.subscribe((params: Params) => {
        this.userId = +params['id']
        this.userService.getUserById(this.userId).subscribe((user: any) => {
          this.user = user
          this.loading = false;
        })
        this.getFriendsOnScroll()
      })
  }

  getFriendsOnScroll() {
    this.userService.getUserFriends(this.userId, this.page, this.perPage).subscribe((friends: User[]) => {
      this.friends = [...this.friends, ...friends]
      this.page++
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (
      window.innerHeight + window.scrollY + 10 >= document.body.offsetHeight &&
      !this.loading
    ) {
      this.getFriendsOnScroll();
    }
  }

  navigate() {
    this.router.navigate(['users-list'])
  }
}
