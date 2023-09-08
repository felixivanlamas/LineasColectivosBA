import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadasEditComponent } from './paradas-edit.component';

describe('ParadasEditComponent', () => {
  let component: ParadasEditComponent;
  let fixture: ComponentFixture<ParadasEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParadasEditComponent]
    });
    fixture = TestBed.createComponent(ParadasEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
