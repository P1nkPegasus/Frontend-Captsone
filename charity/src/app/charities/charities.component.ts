import { Component, OnInit } from '@angular/core';
import { Charity } from "../charity";
@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.css']
})
export class CharitiesComponent implements OnInit {

  charities: Charity[];

  constructor() { }

  ngOnInit(): void {
  }

}
