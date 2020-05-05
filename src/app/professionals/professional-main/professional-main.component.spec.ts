import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalMainComponent } from './professional-main.component';

describe('ProfessionalMainComponent', () => {
  let component: ProfessionalMainComponent;
  let fixture: ComponentFixture<ProfessionalMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
