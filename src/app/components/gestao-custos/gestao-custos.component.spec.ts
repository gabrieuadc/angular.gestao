import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GestaoCustosComponent } from './gestao-custos.component';

describe('GestaoCustosComponent', () => {
  let component: GestaoCustosComponent;
  let fixture: ComponentFixture<GestaoCustosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoCustosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestaoCustosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
