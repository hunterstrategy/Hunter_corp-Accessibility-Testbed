import {Component, OnInit, Input, ViewChild, ElementRef} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HostListener, HostBinding } from '@angular/core';
import { Element, Attribute} from '../Element';
import { element } from 'protractor';

@Component({
  selector: 'app-match',
  templateUrl: 'match.component.html',
  styleUrls: ['match.component.scss'],
})

/**
 * MatchComponent takes a CDKdroplist component and inserts Mat menus into the component.
 * The menus are based on the structure in the the arrayOptionList. 
 * Which is the dragBay/List and then the options contained in each List. 
 * By default all the options are placed in the options list to be moved into the "answer" bays/lists.
 *  
 * Accessibility -- By using the menus inserted into the Dom that display on a click event it allows
 *  screen reader users to place options into the approriate location without needing to know the visual layout
 *  a key here is iterating thorugh and using angular bindings to create dynamic labels so a user knows 
 *  the number of options in each menu. An aria live region is used to notify users of placements.
 *  
 * Improvements -- There is a slight delay in the announcement of options placement to the user despite the live region being set ot assertive
 *    Implement as form and functionality to check the list for correctness via submit functions.
 */
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
  /**
   * Handles the movement of options from list to list
   */
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
    this.moveMessage = "Moved " + element + " to " + currentContainer.name; 
    this.handleFocus(element, i);
  }

  /**
   * Because the screen reader functionality is new, it is uncertain the best means of handling focus.
   * this implementation of handle focus attempts to find the first different item in the available list 
   * and moves focus to that element. this enables faster usage of the input to answer the question but 
   * can be slightly disorienting.
   * @param elemId - Dom id of element
   * @param i - index of element
   */
  handleFocus(elemId, i){
    let parentList = document.getElementById(i);
    let passedFocus = false;
    //Focus first item from the available list that is not the current button option
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

