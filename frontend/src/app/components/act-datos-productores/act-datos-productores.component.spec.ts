import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActDatosProductoresComponent } from './act-datos-productores.component';

describe('ActDatosProductoresComponent', () => {
  let component: ActDatosProductoresComponent;
  let fixture: ComponentFixture<ActDatosProductoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActDatosProductoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActDatosProductoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
