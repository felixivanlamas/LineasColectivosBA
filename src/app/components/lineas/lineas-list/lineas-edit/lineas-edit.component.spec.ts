import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasEditComponent } from './lineas-edit.component';

describe('LineasEditComponent', () => {
  let component: LineasEditComponent;
  let fixture: ComponentFixture<LineasEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineasEditComponent]
    });
    fixture = TestBed.createComponent(LineasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
