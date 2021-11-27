import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministradoresMainpageComponent } from './administradores-mainpage.component';

describe('AdministradoresMainpageComponent', () => {
  let component: AdministradoresMainpageComponent;
  let fixture: ComponentFixture<AdministradoresMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdministradoresMainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministradoresMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
