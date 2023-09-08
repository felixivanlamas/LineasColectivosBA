import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivosListComponent } from './colectivos-list.component';

describe('ColectivosListComponent', () => {
  let component: ColectivosListComponent;
  let fixture: ComponentFixture<ColectivosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColectivosListComponent]
    });
    fixture = TestBed.createComponent(ColectivosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
