import {Component, HostListener, OnInit, ElementRef, ViewChild, TemplateRef} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UserService} from "../user.service";
import {User} from "../user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{
  @ViewChild('elseBlock') elseBlock!: TemplateRef<any>


  constructor(private route: ActivatedRoute, private userService: UserService, private elementRef: ElementRef) {
  }

  user!: User;
  friends: any = [];
  page: number = 1;
  perPage: number = 2;
  loading: boolean = false;
  userId!: number

  ngOnInit() {
      this.route.params.subscribe((params) => {
        this.userId = +params['id']
        this.userService.getUserById(this.userId).subscribe((res: any) => {
          this.user = res
        })
        this.getFriendsOnScroll()
        this.scrollToTop();
      })
  }

  getFriendsOnScroll() {
    this.loading = true;
    this.userService.getUserFriends(this.userId, this.page, this.perPage).subscribe((friends: User[]) => {
      this.friends = [...this.friends, ...friends]
      this.page++
      this.loading = false;
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
      this.getFriendsOnScroll();
    }
  }
}
