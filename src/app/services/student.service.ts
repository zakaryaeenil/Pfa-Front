import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Models/user";

@Injectable({
  providedIn: 'root'
})
export class StudentService {
private BaseUrl = environment.url;
  constructor( private http : HttpClient) { }

  getAllStudents() : Observable<User[]>{
    return this.http.get<User[]>(`${this.BaseUrl}/api/users/role/3`);
  }

  createStudent(user: User): Observable<Object>{
    return this.http.post(`${this.BaseUrl}/api/users/create/role/3`, user);
  }

}
