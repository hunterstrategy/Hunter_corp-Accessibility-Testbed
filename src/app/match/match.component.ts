import {Component, OnInit, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

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

  /*Defines the Question strucuture
  * In the case of match this is a series of arrays that are related by a series of 
  * mutually exclusive strings shared by the array
  */
  arrayOptionList = 
    {
      'options': ['Worms',
      'Cats',
      'Spiders',
      'Lizards'],
      'vertebrates' : [
      ],
      'invertebrates' :[
      ]
    };

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

  onKeydown(event) {
    console.log(event);
    console.log("pressed");
    console.log(this.elements);
  }

  fcn(lastContainer, currentContainer, i) {
    console.log(lastContainer);
    console.log(currentContainer);
    console.log(i);
  }

  dropcustom(element, i, currentContainer,) {
    var index1 = this.arrayOptionList['options'].indexOf(element);
    var index2 = this.arrayOptionList['vertebrates'].indexOf(element);
    var index3 = this.arrayOptionList['invertebrates'].indexOf(element);
    if (index1 != -1) {
      this.arrayOptionList['options'].splice(index1, 1);
    }
    else if (index2 != -1) {
      this.arrayOptionList['vertebrates'].splice(index1, 1);
    }
    else {
      this.arrayOptionList['vertebrates'].splice(index1, 1);
    }
    currentContainer.push(element);
  }
}

