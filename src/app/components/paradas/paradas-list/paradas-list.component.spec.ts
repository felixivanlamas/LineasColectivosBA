import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParadasListComponent } from './paradas-list.component';

describe('ParadasListComponent', () => {
  let component: ParadasListComponent;
  let fixture: ComponentFixture<ParadasListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParadasListComponent]
    });
    fixture = TestBed.createComponent(ParadasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
