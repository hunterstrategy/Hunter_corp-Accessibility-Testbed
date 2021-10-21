import { Component, OnInit, Input } from "@angular/core";
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from "@angular/cdk/drag-drop";
import { Element, Attribute } from "../Element";

@Component({
  selector: "app-match-alt",
  templateUrl: "match-alt.component.html",
  styleUrls: ["match-alt.component.scss"],
})

/**
 * MatchAltComponent is basically the same as MatchComponent but uses a different focus implementation.
 * No siginificant implementation differences.
 */
export class MatchAltComponent implements OnInit {
  @Input() elements: Element[];
  @Input() attributes: Attribute[];

  constructor() {}

  moveMessage: string = "";

  ngOnInit() {
    this.elements = [];
    this.attributes = [];
  }

  /*Defines the Question strucuture
   * In the case of match this is a series of arrays that are related by a series of
   * mutually exclusive strings shared by the array
   */
  arrayOptionList = [
    {
      name: "Options",
      values: ["2, 6, 10, 14", "2, 4, 8, 16", "4, 12, 20, 28"],
    },
    {
      name: "Multiply by 2",
      values: [],
    },
    {
      name: "Add 4",
      values: [],
    },
    {
      name: "Add 8",
      values: [],
    },
  ];

  onOpenMenu(menu: any): void {
    menu.openMenu;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  dropcustom(element, i, currentContainer) {
    var index1 = this.arrayOptionList[0].values.indexOf(element);
    var index2 = this.arrayOptionList[1].values.indexOf(element);
    var index3 = this.arrayOptionList[2].values.indexOf(element);
    var index4 = this.arrayOptionList[3].values.indexOf(element);

    if (index1 != -1) {
      this.arrayOptionList[0].values.splice(index1, 1);
    } else if (index2 != -1) {
      this.arrayOptionList[1].values.splice(index2, 1);
    } else if (index3 != -1) {
      this.arrayOptionList[2].values.splice(index3, 1);
    } else if (index4 != -1) {
      this.arrayOptionList[3].values.splice(index4, 1);
    }
    currentContainer.values.push(element);
    this.moveMessage = "Moved " + element + " to " + currentContainer.name;
    setTimeout(() => {
      this.handleFocus(element, i);
    }, 250);
  }

  /**
   * Because the screen reader functionality is new, it is uncertain the best means of handling focus.
   * this implementation of handle focus maintains focus on the selected item as it is moved to a different list.
   *
   * @param elemId - Dom id of element
   * @param i - index of element
   */
  handleFocus(elemId, i) {
    //find next elem of below
    this.arrayOptionList.forEach((optionList) => {
      let tempListElement = document.getElementById(optionList.name);
      Array.from(tempListElement.children).forEach((element) => {
        if (element.id === elemId) {
          let nextElem = document.getElementById(element.id);
          nextElem.focus();
        }
      });
    });
  }
}
