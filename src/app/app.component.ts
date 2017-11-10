import {Component, OnInit} from '@angular/core';
import {HeroService} from "./hero.service";




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[HeroService]
})
export class AppComponent implements  OnInit {
message='this is a message from client';



  constructor(private hservice:HeroService) {};

  ngOnInit()
  {

  }

  title = 'chortke application for organizations';
}



