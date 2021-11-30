import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SesionProductoresComponent } from './sesion-productores.component';

describe('SesionProductoresComponent', () => {
  let component: SesionProductoresComponent;
  let fixture: ComponentFixture<SesionProductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SesionProductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SesionProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
