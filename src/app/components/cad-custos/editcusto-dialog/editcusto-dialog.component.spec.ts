import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcustoDialogComponent } from './editcusto-dialog.component';

describe('EditcustoDialogComponent', () => {
  let component: EditcustoDialogComponent;
  let fixture: ComponentFixture<EditcustoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcustoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditcustoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
