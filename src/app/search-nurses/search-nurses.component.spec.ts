import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNursesComponent } from './search-nurses.component';

describe('SearchNursesComponent', () => {
  let component: SearchNursesComponent;
  let fixture: ComponentFixture<SearchNursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchNursesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
