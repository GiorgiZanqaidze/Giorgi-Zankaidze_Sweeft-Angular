import {Component, HostListener, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {UserService} from "../../user.service";
import {User} from "../../user";

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit{
  @ViewChild('elseBlock') elseBlock!: TemplateRef<any>

  constructor(private userService: UserService) {
  }

  errorMessage = "Users Not Found"

  users:User[] = []
  page: number = 1;
  perPage: number = 9;
  loading: boolean = false;


  ngOnInit() {
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
      window.innerHeight + window.scrollY + 10 >= document.body.offsetHeight &&
      !this.loading
    ) {
      this.loadUsers();
    }
  }


}