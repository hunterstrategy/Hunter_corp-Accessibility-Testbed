import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotSingleComponent } from './hotspot-single.component';

describe('HotspotSingleComponent', () => {
  let component: HotspotSingleComponent;
  let fixture: ComponentFixture<HotspotSingleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspotSingleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotSingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
