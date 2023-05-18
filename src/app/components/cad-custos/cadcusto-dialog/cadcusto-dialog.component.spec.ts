import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadcustoDialogComponent } from './cadcusto-dialog.component';

describe('CadcustoDialogComponent', () => {
  let component: CadcustoDialogComponent;
  let fixture: ComponentFixture<CadcustoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadcustoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadcustoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
