import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cerca } from './cerca.component';

describe('CercaComponent', () => {
  let component: Cerca;
  let fixture: ComponentFixture<Cerca>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cerca ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cerca);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
