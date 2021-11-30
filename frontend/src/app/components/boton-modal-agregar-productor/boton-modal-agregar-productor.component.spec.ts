import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonModalAgregarProductorComponent } from './boton-modal-agregar-productor.component';

describe('BotonModalAgregarProductorComponent', () => {
  let component: BotonModalAgregarProductorComponent;
  let fixture: ComponentFixture<BotonModalAgregarProductorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonModalAgregarProductorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BotonModalAgregarProductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
