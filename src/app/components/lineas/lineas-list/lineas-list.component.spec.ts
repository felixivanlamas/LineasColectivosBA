import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineasListComponent } from './lineas-list.component';

describe('LineasListComponent', () => {
  let component: LineasListComponent;
  let fixture: ComponentFixture<LineasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineasListComponent]
    });
    fixture = TestBed.createComponent(LineasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
