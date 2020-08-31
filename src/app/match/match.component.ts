import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HostListener, HostBinding } from '@angular/core';
import { Element, Attribute} from '../Element';
import { element } from 'protractor';

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

  moveMessage:string = '';

  ngOnInit() {
    this.elements = [];
    this.attributes = [];
  }

  /*Defines the Question strucuture
  * In the case of match this is a series of arrays that are related by a series of 
  * mutually exclusive strings shared by the array
  */
  arrayOptionList = 
    [
       { 
        name: 'Options',
        values: ['Worms',
        'Cats',
        'Spiders',
        'Lizards']
      },
      { 
        name: 'vertebrate',
        values: []
      },
      {
        name: 'invertebrate',
        values: []
      }
    ];

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

  dropcustom(element, i,currentContainer) {
    var index1 = this.arrayOptionList[0].values.indexOf(element);
    var index2 = this.arrayOptionList[1].values.indexOf(element);
    var index3 = this.arrayOptionList[2].values.indexOf(element);
    if (index1 != -1) {
      this.arrayOptionList[0].values.splice(index1, 1);
    }
    else if (index2 != -1) {
      this.arrayOptionList[1].values.splice(index2, 1);
    }
    else if (index3 != -1){
      this.arrayOptionList[2].values.splice(index3, 1);
    }
    currentContainer.values.push(element);
    console.log(currentContainer.name )
    this.moveMessage = "Moved " + element + " to " + currentContainer.name; 
    this.handleFocus(element, i);
  }

  handleFocus(elemId, i){
    let parentList = document.getElementById(i);
    let passedFocus = false;
    //focus parent list
    //parentList.focus();
    //Focus Next input option if it exists
    // if(parentList.children[0]){
    //   //find next elem of below
    //   let nextElem = document.getElementById(parentList.children[0].id);
    //   nextElem.focus();
    //   return;
    // }
    //Focus first item from the avialable list that is not the current button option
    this.arrayOptionList.forEach(optionList => {
      let tempListElement = document.getElementById(optionList.name);
      Array.from(tempListElement.children).forEach(element => {
        if(element.id !== elemId && !passedFocus){
          let nextElem = document.getElementById(element.id);
          passedFocus = true;
          nextElem.focus();
        }
      });
    })
  }
}

