import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonModalAgregarClienteComponent } from './boton-modal-agregar-cliente.component';

describe('BotonModalAgregarClienteComponent', () => {
  let component: BotonModalAgregarClienteComponent;
  let fixture: ComponentFixture<BotonModalAgregarClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonModalAgregarClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonModalAgregarClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
