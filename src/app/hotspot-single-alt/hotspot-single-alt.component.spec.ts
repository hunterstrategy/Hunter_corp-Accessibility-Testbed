import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotSingleAltComponent } from './hotspot-single-alt.component';

describe('HotspotSingleComponent', () => {
  let component: HotspotSingleAltComponent;
  let fixture: ComponentFixture<HotspotSingleAltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspotSingleAltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotSingleAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
