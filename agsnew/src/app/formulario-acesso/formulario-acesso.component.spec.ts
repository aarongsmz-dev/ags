import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAcessoComponent } from './formulario-acesso.component';

describe('FormularioAcessoComponent', () => {
  let component: FormularioAcessoComponent;
  let fixture: ComponentFixture<FormularioAcessoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioAcessoComponent]
    });
    fixture = TestBed.createComponent(FormularioAcessoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
