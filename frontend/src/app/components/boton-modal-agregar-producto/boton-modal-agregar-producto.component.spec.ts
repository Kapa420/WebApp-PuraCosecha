import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonModalAgregarProductoComponent } from './boton-modal-agregar-producto.component';

describe('BotonModalAgregarProductoComponent', () => {
  let component: BotonModalAgregarProductoComponent;
  let fixture: ComponentFixture<BotonModalAgregarProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonModalAgregarProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonModalAgregarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
