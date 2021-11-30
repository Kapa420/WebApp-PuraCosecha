import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioAgregarProductorComponent } from './formulario-agregar-productor.component';

describe('FormularioAgregarProductorComponent', () => {
  let component: FormularioAgregarProductorComponent;
  let fixture: ComponentFixture<FormularioAgregarProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioAgregarProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioAgregarProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
