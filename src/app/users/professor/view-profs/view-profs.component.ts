import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../../Models/user";
import {ProfessorService} from "../../../services/professor.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-view-profs',
  templateUrl: './view-profs.component.html',
  styleUrls: ['./view-profs.component.css'],
  encapsulation : ViewEncapsulation.None,
})
export class ViewProfsComponent implements OnInit {
  user : User = new User();
  professors : User[];
  constructor( private service  : ProfessorService , private toastr : ToastrService) { }

  ngOnInit(): void {
    this.AllProfessors();
  }

  AllProfessors(){
    this.service.getAllProfessors().subscribe(data =>{
      this.professors = data;
      console.log(this.professors);
      this.loadScripts();
    })
  }
  onSubmit(){
    this.service.createProfessor(this.user).subscribe(data =>{
        this.toastr.success('Professor Created Successfully', 'New Professor');
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
