import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioaccesoComponent } from './formularioacceso.component';

describe('FormularioaccesoComponent', () => {
  let component: FormularioaccesoComponent;
  let fixture: ComponentFixture<FormularioaccesoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioaccesoComponent]
    });
    fixture = TestBed.createComponent(FormularioaccesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
