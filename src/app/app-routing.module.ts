import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {CalendarComponent} from "./apps/calendar/calendar.component";
import {TodoComponent} from "./apps/todo/todo.component";
import {ViewStudentComponent} from "./users/student/view-student/view-student.component";
import {ViewClassroomsComponent} from "./classrooms/view-classrooms/view-classrooms.component";
import {ViewProfsComponent} from "./users/professor/view-profs/view-profs.component";
import {ProfileComponent} from "./profile/profile.component";
import {DetailClassroomComponent} from "./classrooms/detail-classroom/detail-classroom.component";
import {ViewCoursesComponent} from "./courses/view-courses/view-courses.component";
import {CreateStudentComponent} from "./users/student/create-student/create-student.component";
import {CreateProfComponent} from "./users/professor/create-prof/create-prof.component";

const routes: Routes = [
  {path : '' , component:DashboardComponent},
  {path : 'students' , component:ViewStudentComponent},
  {path : 'calendar' , component : CalendarComponent},
  {path : 'todo' , component : TodoComponent},
  {path : 'classrooms' , component : ViewClassroomsComponent},
  {path : 'classrooms/:id/:name' , component : DetailClassroomComponent},
  {path : 'courses' , component : ViewCoursesComponent},
  {path : 'professors', component : ViewProfsComponent},
  {path : 'profile' , component : ProfileComponent},
  {path : 'student/create' , component : CreateStudentComponent},
  {path : 'professor/create', component : CreateProfComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{onSameUrlNavigation: "reload"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
