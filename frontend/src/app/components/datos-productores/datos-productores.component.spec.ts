import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosProductoresComponent } from './datos-productores.component';

describe('DatosProductoresComponent', () => {
  let component: DatosProductoresComponent;
  let fixture: ComponentFixture<DatosProductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosProductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatosProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
