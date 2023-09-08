import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorridosEditComponent } from './recorridos-edit.component';

describe('RecorridosEditComponent', () => {
  let component: RecorridosEditComponent;
  let fixture: ComponentFixture<RecorridosEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecorridosEditComponent]
    });
    fixture = TestBed.createComponent(RecorridosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
