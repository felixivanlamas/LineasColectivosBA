import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecorridosListComponent } from './recorridos-list.component';

describe('RecorridosListComponent', () => {
  let component: RecorridosListComponent;
  let fixture: ComponentFixture<RecorridosListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecorridosListComponent]
    });
    fixture = TestBed.createComponent(RecorridosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
