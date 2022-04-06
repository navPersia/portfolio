import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  public birthdate= new Date(1994, 12, 6);
  public age: number;

  constructor() { 
      var timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
      this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  ngOnInit(): void {
  }

}
