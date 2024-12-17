import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NurseRegisterComponent } from './nurse-register.component';

describe('NurseRegisterComponent', () => {
  let component: NurseRegisterComponent;
  let fixture: ComponentFixture<NurseRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NurseRegisterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NurseRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
