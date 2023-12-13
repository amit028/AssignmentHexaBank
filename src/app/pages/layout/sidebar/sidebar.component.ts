import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let body: any = document.querySelector('.newsidebar');
        if (body != null) {
          body.classList.add('sidebar');
          (document.querySelector('.sidebar') as HTMLElement).style.display = 'block';
          (document.querySelector('.sidebar') as HTMLElement).style.zIndex = '1';

        } else {// need to show sidebar when it is full screen
          (document.querySelector('.sidebar') as HTMLElement).style.display = 'none';

      }
  }

  collapseBar() {
    // let body: any = document.querySelector('body');
    // let main: any = document.querySelector('.main-wrapper');
    // if (body.classList.contains('isCollapsed')) {
    //   body.classList.remove('isCollapsed')
    // } else {
    //   body.classList.add("isCollapsed");
    //   main.classList.add("isCollapsed");
    // }
  }
}
