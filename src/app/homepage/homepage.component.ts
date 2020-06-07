import { Component, OnInit } from '@angular/core';
import { FirstBlockComponent } from '../first-block/first-block.component';
import { SecondBlockComponent } from '../second-block/second-block.component';
import { ServicesBlockComponent } from '../services-block/services-block.component';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
