import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadAndamentoComponent } from './cad-andamento.component';

describe('CadAndamentoComponent', () => {
  let component: CadAndamentoComponent;
  let fixture: ComponentFixture<CadAndamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadAndamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadAndamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
