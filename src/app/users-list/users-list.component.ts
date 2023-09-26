import {Component, HostListener, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {UserService} from "../user.service";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{


  constructor(private http: HttpClient, private userService: UserService) {
  }

  users:any = []
  page: number = 1;
  perPage: number = 10;
  loading: boolean = false;


  ngOnInit() {
    // this.userService.getUsers(this.page, this.perPage).subscribe((res) => {
    //   this.users = res
    // })

    this.loadUsers()
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers(this.page, this.perPage).subscribe(
      (newUsers: any) => {
        this.users = [...this.users, ...newUsers];
        this.page++;
        this.loading = false;
      },
      (error) => {
        console.error('Error loading users', error);
        this.loading = false;
      }
    );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      !this.loading
    ) {
      this.loadUsers();
    }
  }


}
