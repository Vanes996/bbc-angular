import { Component, OnInit } from '@angular/core';
import { SearchResults } from '../../components/search-results/search-results.component';
import { SearchFilters } from '../../components/search-filters/search-filters.component';
import { SearchMainComponent } from '../../components/search-main/search-main.component';

@Component({
  selector: 'app-cerca',
  templateUrl: './cerca.component.html',
  styleUrls: ['./cerca.component.css']
})
export class Cerca implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
