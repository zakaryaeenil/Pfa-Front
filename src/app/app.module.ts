import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ViewProfsComponent } from './users/professor/view-profs/view-profs.component';
import { CourseComponent } from './posts/course/course.component';
import { StudentComponent } from './posts/student/student.component';
import { ProfessorComponent } from './posts/professor/professor.component';
import { ProfileComponent } from './profile/profile.component';
import { CalendarComponent } from './apps/calendar/calendar.component';
import { TodoComponent } from './apps/todo/todo.component';
import { DetailClassroomComponent } from './classrooms/detail-classroom/detail-classroom.component';
import { CreateClassroomComponent } from './classrooms/create-classroom/create-classroom.component';
import { CreateCourseComponent } from './courses/create-course/create-course.component';
import { DetailCourseComponent } from './courses/detail-course/detail-course.component';
import { DetailProfComponent } from './users/professor/detail-prof/detail-prof.component';
import { DetailStudentComponent } from './users/student/detail-student/detail-student.component';
import { ViewStudentComponent } from './users/student/view-student/view-student.component';
import { ViewCoursesComponent } from './courses/view-courses/view-courses.component';
import { ViewClassroomsComponent } from './classrooms/view-classrooms/view-classrooms.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CreateStudentComponent } from './users/student/create-student/create-student.component';
import {CreateProfComponent} from "./users/professor/create-prof/create-prof.component";
import { SidebarComponent } from './Helpers/sidebar/sidebar.component';
import { NavbarComponent } from './Helpers/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ViewProfsComponent,
    CourseComponent,
    StudentComponent,
    ProfessorComponent,
    ProfileComponent,
    CalendarComponent,
    TodoComponent,
    DetailClassroomComponent,
    CreateClassroomComponent,
    CreateCourseComponent,
    DetailCourseComponent,
    DetailProfComponent,
    DetailStudentComponent,
    ViewStudentComponent,
    ViewCoursesComponent,
    ViewClassroomsComponent,
    CreateStudentComponent,
    CreateProfComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
