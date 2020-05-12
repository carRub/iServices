import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoreMainComponent } from './score-main.component';

describe('ScoreMainComponent', () => {
  let component: ScoreMainComponent;
  let fixture: ComponentFixture<ScoreMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScoreMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScoreMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
