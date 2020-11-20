import { Component, OnInit } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router


@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class Header implements OnInit{
  constructor() { }

  ngOnInit(): void {
  }

}
