import {Component, OnInit} from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class AppComponent implements  OnInit {
message='this is a message from client';



  constructor() {};

  ngOnInit()
  {

  }

  title = 'chortke application for organizations';
}



