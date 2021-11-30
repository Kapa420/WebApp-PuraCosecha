import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalActualizadoComponent } from './modal-actualizado.component';

describe('ModalActualizadoComponent', () => {
  let component: ModalActualizadoComponent;
  let fixture: ComponentFixture<ModalActualizadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalActualizadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalActualizadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
