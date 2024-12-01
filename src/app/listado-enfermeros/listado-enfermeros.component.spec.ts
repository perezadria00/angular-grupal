import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoEnfermerosComponent } from './listado-enfermeros.component';

describe('ListadoEnfermerosComponent', () => {
  let component: ListadoEnfermerosComponent;
  let fixture: ComponentFixture<ListadoEnfermerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListadoEnfermerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoEnfermerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
