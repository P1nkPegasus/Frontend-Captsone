import { Component, OnInit } from '@angular/core';
import { Charity } from "../charity";
import { CharityService } from '../charity.service';
@Component({
  selector: 'app-charities',
  templateUrl: './charities.component.html',
  styleUrls: ['./charities.component.css']
})
export class CharitiesComponent implements OnInit {

  charities: Charity[] = [];

  constructor(private charityService: CharityService) { }

  ngOnInit(): void {
    this.getCharities();
  }

  private getCharities (){
    this.charityService.getCharityList()
    .subscribe(data => {
    this.charities = data;
    });
  }

}
