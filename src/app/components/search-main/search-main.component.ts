import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-search-main',
  templateUrl: './search-main.component.html',
  styleUrls: ['./search-main.component.css']
})
export class SearchMainComponent implements OnInit {

  comuni  = new FormControl('');
  categorie = new FormControl('');
  constructor() { }

  ngOnInit(): void {

  }

}
