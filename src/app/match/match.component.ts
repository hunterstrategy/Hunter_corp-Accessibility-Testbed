import {Component, OnInit, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {FocusableOption} from '@angular/cdk/a11y';
import { VERSION, MatMenuTrigger } from '@angular/material';

import { Element, Attribute} from '../Element';

/**
 * @title Drag&Drop disabled sorting
 */
@Component({
  selector: 'app-match',
  templateUrl: 'match.component.html',
  styleUrls: ['match.component.scss'],
})

export class MatchComponent implements OnInit{

  @Input() elements : Element[];
  @Input() attributes : Attribute[];

  constructor() {}

  ngOnInit() {
    this.elements = [];
    this.attributes = [];
  }

  items = [
    'Worms',
    'Cats',
    'Spiders',
    'Lizards'
  ];

  vertebrates = [];
  
  invertebrates = [];

  version = VERSION;

  onOpenMenu(menu: any): void {
    menu.openMenu
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  var;

  onKeydown(event) {
    console.log(event);
    console.log("pressed");
    console.log(this.elements);
  }

  fcn(item, i, cat) {
    console.log(item);
    console.log(i);
    console.log(cat);
  }

  dropcustom(thing) {
    transferArrayItem(thing.previousContainer.data,
      thing.container.data,
      thing.previousIndex,
      thing.currentIndex)
  }
}

