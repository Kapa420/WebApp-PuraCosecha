import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroProductoresComponent } from './registro-productores.component';

describe('RegistroProductoresComponent', () => {
  let component: RegistroProductoresComponent;
  let fixture: ComponentFixture<RegistroProductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistroProductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
