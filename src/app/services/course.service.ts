import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {ClassRoom} from "../Models/class-room";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Course} from "../Models/course";
import {Classform} from "../Models/Utils/classform";
import {CourseForm} from "../Models/Utils/course-form";

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private BaseUrl = environment.url;
  constructor( private http : HttpClient) { }

  getAllCourses() : Observable<Course[]>{
    return this.http.get<Course[]>(`${this.BaseUrl}/api/courses/all`);
  }
  createCourse(c: CourseForm): Observable<Object>{
    return this.http.post(`${this.BaseUrl}/api/courses/create`, c);
  }
}
