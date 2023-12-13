import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/util/helper.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isOpen = false;
  constructor(public helperService:HelperService) { }

  ngOnInit(): void {
  }


  collapseBar() {
    let body: any = document.querySelector('body');
    let main: any = document.querySelector('.main-wrapper');
    if (body.classList.contains('isCollapsed')) {
      body.classList.remove('isCollapsed')
      main.classList.remove("isCollapsed");
    }
    this.isOpen = !this.isOpen;
  }
}
