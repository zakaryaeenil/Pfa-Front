import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.loadScripts();
  }
  loadScripts() {

    // This array contains all the files/CDNs
    const dynamicScripts = [
      'assets/assets_2/js/bundle.js',
      'assets/assets_2/js/scripts.js',
      'assets/assets_2/js/libs/fullcalendar.js',
      'assets/assets_2/js/apps/calendar.js'
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
