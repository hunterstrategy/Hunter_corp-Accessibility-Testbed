import {Component, OnInit, Input} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { HostListener, HostBinding } from '@angular/core';
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

  dropcustom(event, element, i, currentContainer) {
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
      this.arrayOptionList['invertebrates'].splice(index1, 1);
    }
    currentContainer.push(element);

<<<<<<< Updated upstream
    let nextElem = event.srcElement.firstElementChild;
    if(nextElem == null){
        console.log("null");  // check if its null
        return;
      }
    else{
        nextElem.focus();   // focus if not null
      }
  }

  @HostListener('window:focus', ['$event'])
  onFocus(event: FocusEvent): void {  
      console.log("focus");
      console.log(event);
      // Do something      

  }
  
  @HostBinding('attr.tabindex') tabindex = '0';
  @HostListener('window:blur', ['$event'])
  onBlur(event: FocusEvent): void {
    console.log("blur");
    
     // Do something

=======
    if(parentList.children[1]){
      //find next elem of below
      let nextElem = document.getElementById(parentList.children[1].id);
      nextElem.focus();
      return;
    }
    else {
      let optionsList = document.getElementById("Options")
      let vertebrateList = document.getElementById("vertebrate");
      let invertebrateList = document.getElementById("invertebrate");
      if(optionsList.children[0]){
        //find next elem of below
        let nextElem = document.getElementById(optionsList.children[0].id);
        nextElem.focus();
        return;
      }
      else if(vertebrateList.children[0]){
        //find next elem of below
        let nextElem = document.getElementById(vertebrateList.children[0].id);
        nextElem.focus();
        return;
      }
      else {
        if(invertebrateList.children[0]){
          //find next elem of below
          let nextElem = document.getElementById(invertebrateList.children[0].id);
          nextElem.focus();
          return;
        }
      }
    }
>>>>>>> Stashed changes
  }
  

  onBlurMethod(i) {
    let parentList = document.getElementById(i);

    if(parentList.children[0].id){
      //find next elem of below
      let nextElem = document.getElementById(parentList.children[1].id);
      nextElem.focus();
      return;
    }
  }
}

