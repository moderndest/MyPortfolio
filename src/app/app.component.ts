import { Component, OnInit } from '@angular/core';
// import * as $ from 'jquery';
declare var $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Chatsuda Rattarasan';
  bgurl = 'assets/img/bg.jpg';
  ngOnInit() {
    $(document).ready(function () {
      $('#sidebarCollapse').on('click', function () {
          $('#sidebar').toggleClass('active');
          $(this).toggleClass('active');
      });
  });
  }
}
