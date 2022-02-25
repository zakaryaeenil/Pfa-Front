import { Component, OnInit } from '@angular/core';
import {ClassroomService} from "../../services/classroom.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Course} from "../../Models/course";

@Component({
  selector: 'app-detail-classroom',
  templateUrl: './detail-classroom.component.html',
  styleUrls: ['./detail-classroom.component.css']
})
export class DetailClassroomComponent implements OnInit {


  courses : Course[];
  name : string = '';
  constructor( private service : ClassroomService , private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.ClassroomCourses();
  }

  ClassroomCourses(){
    this.service.getClassroomCourses(this.activatedRoute.snapshot.params['id']).subscribe(data =>{
      this.courses = data;
      this.name = this.activatedRoute.snapshot.params['name'].toString();
    })
  }

}
