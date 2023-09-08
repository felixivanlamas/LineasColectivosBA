import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoferesCreateComponent } from './choferes-create.component';

describe('ChoferesCreateComponent', () => {
  let component: ChoferesCreateComponent;
  let fixture: ComponentFixture<ChoferesCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChoferesCreateComponent]
    });
    fixture = TestBed.createComponent(ChoferesCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
