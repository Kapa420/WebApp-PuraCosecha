import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaProductosAdminComponent } from './tabla-productos-admin.component';

describe('TablaProductosAdminComponent', () => {
  let component: TablaProductosAdminComponent;
  let fixture: ComponentFixture<TablaProductosAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaProductosAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaProductosAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
