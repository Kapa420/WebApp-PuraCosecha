import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductoresAdminComponent } from './tabla-productores-admin.component';

describe('TablaProductoresAdminComponent', () => {
  let component: TablaProductoresAdminComponent;
  let fixture: ComponentFixture<TablaProductoresAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaProductoresAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProductoresAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
