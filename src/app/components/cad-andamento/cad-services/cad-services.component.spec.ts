import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadServicesComponent } from './cad-services.component';

describe('CadServicesComponent', () => {
  let component: CadServicesComponent;
  let fixture: ComponentFixture<CadServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadServicesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
