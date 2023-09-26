import {Component, HostListener, OnInit, ElementRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{


  constructor(private route: ActivatedRoute, private userService: UserService, private elementRef: ElementRef) {
  }

  user!: User;
  friends: any = [];
  page: number = 1;
  perPage: number = 5;
  loading: boolean = false;
  userId: any

  ngOnInit() {
      this.route.params.subscribe((params) => {
        this.userId = +params['id']
        this.userService.getUserById(this.userId).subscribe((res: any) => {
          this.user = res
        })
        this.getFriends(this.userId)
        this.scrollToTop();
      })
  }

  getFriends(userId: any) {
    this.userService.getUserFriends(userId, this.page, this.perPage).subscribe((res: any) => {
      const newFriends = res.map((item: any) => {
        const friend: User = {
          id: item.friend.id,
          firstName: item.friend.firstName,
          lastName: item.friend.lastName,
          profilePic: item.friend.profilePic,
          description: item.friend.description
        }
        return friend
      })
      this.friends = [...this.friends, ...newFriends]
      this.page++
    })
  }

  scrollToTop() {
    this.elementRef.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.loading
    ) {
      this.getFriends(this.userId);
    }
  }
}
