import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioregistroComponent } from './formularioregistro.component';

describe('FormularioregistroComponent', () => {
  let component: FormularioregistroComponent;
  let fixture: ComponentFixture<FormularioregistroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioregistroComponent]
    });
    fixture = TestBed.createComponent(FormularioregistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
