import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

// A trivial Interface representing "stooge names"
// however a more robust implementation can be expanded upon from here
export interface Names {
  name: string;
}

//A simple representation of potential data to pass in into the table using the above interface.
const ELEMENT_DATA: Names[] = [
  {name: 'Larry'},
  {name: 'Moe'},
  {name: 'Curly'},
];

/**
 * A Mat table implementation with acessibility considerations made. 
 * The tableSelectionExample is a data table so it can be navigated as a table with screen readers by pressing 't'.
 * To avoid issues with the table navigation put aria-labels on the DOM elements composing the question inputs.
 * If radio buttons are used because of the tab order it is important to use this data table 
 * over a presentation table as it allows users to navigate with table shortcuts and avoid the tab order bypassing options.
 * 
 */
@Component({
  selector: 'app-example',
  styleUrls: ['example.component.scss'],
  templateUrl: 'example.component.html',
})
export class TableSelectionExample {
  //Basic Mat Table Config
  displayedColumns: string[] = ['name', 'radiobutton', 'select'];
  dataSource = new MatTableDataSource<Names>(ELEMENT_DATA);
  selection = new SelectionModel<Names>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Names): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${1}`;
  }
}