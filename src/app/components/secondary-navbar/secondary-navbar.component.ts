import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common'


@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.css']
})
export class SecondaryNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show = true;
}
