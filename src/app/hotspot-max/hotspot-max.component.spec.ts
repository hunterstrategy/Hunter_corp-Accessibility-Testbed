import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotspotMaxComponent } from './hotspot-max.component';

describe('HotspotComponent', () => {
  let component: HotspotMaxComponent;
  let fixture: ComponentFixture<HotspotMaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotspotMaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotspotMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
