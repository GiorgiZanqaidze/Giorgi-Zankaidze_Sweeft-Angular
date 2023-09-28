import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { map } from 'rxjs/operators';
import {User} from "./user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:3000"

  public getUsers(page: number, perPage: number) {
    const start: number = (page - 1) * perPage
    const end: number = start + perPage
    return this.http.get(`${this.baseUrl}/users?_start=${start}&_end=${end}`)
  }

  public getUserById(id: number) {
    return this.http.get(`${this.baseUrl}/users/${id}`)
  }

  public getUserFriends(id: number, page: number, perPage: number) {
    const start: number = (page - 1) * perPage
    const end: number = start + perPage
    return this.http.get(`${this.baseUrl}/friends?userId=${id}&_start=${start}&_end=${end}`)
      .pipe(map((data: any) => {
          const friendsArray:User[] = data.map((user: any) => {
            return {
              id: user.friend.id,
              firstName: user.friend.firstName,
              lastName: user.friend.lastName,
              profilePic: user.friend.profilePic,
              description: user.friend.description
            };
          })
        return friendsArray
      }));
  }
}
