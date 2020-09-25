import { TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss'],
})
/**
 * This is a very basic header, No signifiant accessibility considerations have been made outside of labels and unique IDs
 * Improvements -- 
 *    add a skip nav to this component that passes focus to the first fosusable element of the main component.
 */
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}