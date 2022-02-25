import {Component, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {ClassRoom} from "../../Models/class-room";
import {ClassroomService} from "../../services/classroom.service";
import {StudentService} from "../../services/student.service";
import {ProfessorService} from "../../services/professor.service";
import {User} from "../../Models/user";
import {Classform} from "../../Models/Utils/classform";
import {FormControl} from "@angular/forms";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-view-classrooms',
  templateUrl: './view-classrooms.component.html',
  styleUrls: ['./view-classrooms.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class ViewClassroomsComponent implements OnInit {
  students : User[];
  professors : User[];
  classrooms : ClassRoom[];
  class:Classform = new Classform();
  @ViewChild('donnees') donnees;
  constructor(private  service : ClassroomService , private studentService : StudentService , private profService : ProfessorService, private toastr: ToastrService ) { }

  ngOnInit(): void {
    this.AllStudents();
    this.AllProfs();
    this.AllClassrooms();
   // this.loadScripts();
  }

  AllClassrooms(){
    this.service.getAllClassrooms().subscribe(data =>{
      this.classrooms = data;
      this.loadScripts();
    })
  }
  AllStudents(){
    this.studentService.getAllStudents().subscribe(data =>{
    this.students = data;
    console.log(this.students);
    })
  }
  AllProfs(){
    this.profService.getAllProfessors().subscribe(data =>{
      this.professors = data;
    })
  }

  onCreate() {
    this.service.createClassRoom(this.class).subscribe(data => {
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
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets_2/js/bundle.js',
      'assets/assets_2/js/scripts.js',
      'assets/assets_2/js/libs/datatable-btns.js'
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
