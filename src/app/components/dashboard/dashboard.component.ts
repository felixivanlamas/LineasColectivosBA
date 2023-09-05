import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']

})
export class DashboardComponent {
  detailsOnOff = false
  clickers = 0
  clicks: any[] = []

  displayDetails() {
    this.detailsOnOff = !this.detailsOnOff;
    this.clicks.push('Click ' + (this.clicks.length + 1))
  }

  getColor(){
    return this.clicks.length >= 5 ? 'blue' : 'transparent'
  }
    
}