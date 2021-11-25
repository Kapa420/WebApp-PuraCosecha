import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyMainpageComponent } from './body-mainpage.component';

describe('BodyMainpageComponent', () => {
  let component: BodyMainpageComponent;
  let fixture: ComponentFixture<BodyMainpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BodyMainpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyMainpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
