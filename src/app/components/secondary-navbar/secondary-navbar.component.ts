import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.css']
})
export class SecondaryNavbarComponent implements OnInit {
  
  constructor() { }
  
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.filt = filterValue.trim().toLowerCase();
  // }

  ngOnInit(): void {
  }
  
  show = true;
}
