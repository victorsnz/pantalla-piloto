import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.css']
})
export class YearPickerComponent implements OnInit {
  minYear = new Date(1990);
  maxYear = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
