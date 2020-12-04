import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilters } from './search-filters.component';

describe('SearchFiltersComponent', () => {
  let component: SearchFilters;
  let fixture: ComponentFixture<SearchFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFilters]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchFilters);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
