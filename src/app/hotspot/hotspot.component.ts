import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotspot',
  templateUrl: './hotspot.component.html',
  styleUrls: ['./hotspot.component.scss']
})

/**
 * The HotspotComponent implementation we assumed there was an image overlaid with checkbox's 
 * or similar inputs for the visual presentation and tried to replicate.
 * Accessibility -- 
 *  We found it is helpful to order the answer options in the dom so that the DOM element's location matches
 *    the order of the visual representation so a screen reader user is presented the information 
 *     in a similar order going top to bottom, left to right
 *  Outside of that aria-labels and specific input element considerations are all that are needed to 
 *    make this Screen reader accessible.
 */
export class HotspotComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
