import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchAltComponent } from './match-alt.component';

describe('MatchAltComponent', () => {
  let component: MatchAltComponent;
  let fixture: ComponentFixture<MatchAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
