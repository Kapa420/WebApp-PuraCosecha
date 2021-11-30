import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionClientesComponent } from './sesion-clientes.component';

describe('SesionClientesComponent', () => {
  let component: SesionClientesComponent;
  let fixture: ComponentFixture<SesionClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
