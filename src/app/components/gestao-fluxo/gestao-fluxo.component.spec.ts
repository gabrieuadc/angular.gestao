import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoFluxoComponent } from './gestao-fluxo.component';

describe('GestaoFluxoComponent', () => {
  let component: GestaoFluxoComponent;
  let fixture: ComponentFixture<GestaoFluxoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoFluxoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoFluxoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
