import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Models/user";
import {ClassRoom} from "../Models/class-room";
import {Course} from "../Models/course";
import {Classform} from "../Models/Utils/classform";

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {
  private BaseUrl = environment.url;
  constructor( private http : HttpClient) { }

  getAllClassrooms() : Observable<ClassRoom[]>{
    return this.http.get<ClassRoom[]>(`${this.BaseUrl}/api/classrooms/all`);
  }

  getClassroomCourses(id : number) : Observable<Course[]>{
    return this.http.get<Course[]>(`${this.BaseUrl}/api/classrooms/${id}/courses`);
  }
  createClassRoom(c: Classform): Observable<Object>{
    return this.http.post(`${this.BaseUrl}/api/classrooms/create`, c);
  }
}
