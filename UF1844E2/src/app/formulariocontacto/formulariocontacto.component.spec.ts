import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulariocontactoComponent } from './formulariocontacto.component';

describe('FormulariocontactoComponent', () => {
  let component: FormulariocontactoComponent;
  let fixture: ComponentFixture<FormulariocontactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormulariocontactoComponent]
    });
    fixture = TestBed.createComponent(FormulariocontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
