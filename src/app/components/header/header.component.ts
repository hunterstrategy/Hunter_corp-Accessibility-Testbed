import { TestBed } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
<mat-toolbar>
  <span>Accessibility Testbed</span>
  <span class="example-spacer"></span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon" aria-label="home">
    <mat-icon>home</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="table">
    <mat-icon>table</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="map">
    <mat-icon>map</mat-icon>
  </button>
</mat-toolbar>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {
  constructor() {}
  ngOnInit() {}
}