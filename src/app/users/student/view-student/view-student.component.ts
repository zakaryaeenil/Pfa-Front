import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {StudentService} from "../../../services/student.service";
import {User} from "../../../Models/user";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css'],
  encapsulation : ViewEncapsulation.None,
})
export class ViewStudentComponent implements OnInit {
  user : User = new User();
  students : User[];
  constructor( private service  : StudentService , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.AllStudents();
  }

  AllStudents(){

    this.service.getAllStudents().subscribe(data =>{
      this.students = data;
      console.log(this.students);
      this.loadScripts();
    })
  }


  onSubmit(){
    this.service.createStudent(this.user).subscribe(data =>{
        this.toastr.success('Student Created Successfully', 'New Student');
        setTimeout(() => {
          window.location.reload();
          // And any other code that should run only after 5s
        }, 2000);
      },
      error=> this.toastr.error('Error','Error'));

  }
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/plugins/table/datatable/datatables.js',
      'assets/plugins/table/datatable/button-ext/dataTables.buttons.min.js',
      'assets/plugins/table/datatable/button-ext/jszip.min.js',
      'assets/plugins/table/datatable/button-ext/buttons.html5.min.js',
      'assets/plugins/table/datatable/button-ext/buttons.print.min.js',
      'assets/export_table.js',
      'assets/plugins/highlight/highlight.pack.js',
      'assets/assets/js/scrollspyNav.js'
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
