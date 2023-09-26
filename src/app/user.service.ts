import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  public getUsers(page: number, perPage: number) {
    const start: number = (page - 1) * perPage
    const end: number = start + perPage

    return this.http.get(`http://localhost:3000/users?_start=${start}&_end=${end}`)
  }

  public getUserById(id: number|string) {
    return this.http.get(`http://localhost:3000/users/${id}`)
  }
}
