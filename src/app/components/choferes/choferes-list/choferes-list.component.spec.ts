import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferesListComponent } from './choferes-list.component';

describe('ChoferesListComponent', () => {
  let component: ChoferesListComponent;
  let fixture: ComponentFixture<ChoferesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoferesListComponent]
    });
    fixture = TestBed.createComponent(ChoferesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
