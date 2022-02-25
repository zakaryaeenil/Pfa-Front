import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CourseService} from "../../services/course.service";
import {Course} from "../../Models/course";
import {CourseForm} from "../../Models/Utils/course-form";
import {ClassRoom} from "../../Models/class-room";
import {User} from "../../Models/user";
import {ClassroomService} from "../../services/classroom.service";
import {ProfessorService} from "../../services/professor.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-view-courses',
  templateUrl: './view-courses.component.html',
  styleUrls: ['./view-courses.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ViewCoursesComponent implements OnInit {
  courses : Course[];
  cour : CourseForm = new CourseForm();
  classRooms : ClassRoom[];
  professors : User[];
  constructor( private service : CourseService , private classRoomService : ClassroomService , private ProfessorService : ProfessorService , private  toastr : ToastrService) { }

  ngOnInit(): void {
    //this.loadScripts();
    this.AllCourses();
    this.AllProfs();
    this.AllClassrooms();
  }

  AllCourses(){
    this.service.getAllCourses().subscribe(data=>{
      this.courses = data;
    })
  }

  onCreate() {
    console.log(this.cour)
    this.service.createCourse(this.cour).subscribe(data => {
        this.toastr.success('ClassRoom Created avec success', 'Creation Classroom');
        setTimeout(() => {
          window.location.reload();
          // And any other code that should run only after 5s
        }, 2000);
        window.location.reload();
      },
      error =>
        this.toastr.error('Failled To Create ClassRoom', 'Create Classroom'));
  }
  AllClassrooms(){
    this.classRoomService.getAllClassrooms().subscribe(data =>{
      this.classRooms = data;
      this.loadScripts();
    })
  }
  AllProfs(){
    this.ProfessorService.getAllProfessors().subscribe(data =>{
      this.professors = data;
    })
  }
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets_2/js/bundle.js',
      'assets/assets_2/js/scripts.js',
      'assets/assets/js/libs/datatable-btns.js'
      //Load all your script files here'
    ];
    for (let i of dynamicScripts) {
      const node = document.createElement('script');
      node.src = i;
      node.type = 'text/javascript';
      node.async = false;
      document.getElementsByTagName('head')[0].appendChild(node);
    } }

}
