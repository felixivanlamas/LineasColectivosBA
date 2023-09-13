import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColectivosEditComponent } from './colectivos-edit.component';

describe('ColectivosEditComponent', () => {
  let component: ColectivosEditComponent;
  let fixture: ComponentFixture<ColectivosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColectivosEditComponent]
    });
    fixture = TestBed.createComponent(ColectivosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
