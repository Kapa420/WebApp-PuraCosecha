import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaClientesAdminComponent } from './tabla-clientes-admin.component';

describe('TablaClientesAdminComponent', () => {
  let component: TablaClientesAdminComponent;
  let fixture: ComponentFixture<TablaClientesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaClientesAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaClientesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
