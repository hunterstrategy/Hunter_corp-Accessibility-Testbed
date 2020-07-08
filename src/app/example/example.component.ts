import {SelectionModel} from '@angular/cdk/collections';
import {Component} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface Names {
  name: string;
}

const ELEMENT_DATA: Names[] = [
  {name: 'Larry	'},
  {name: 'Moe'},
  {name: 'Curly'},
];

/**
 * @title Table with selection
 */
@Component({
  selector: 'app-example',
  styleUrls: ['example.component.scss'],
  templateUrl: 'example.component.html',
})
export class TableSelectionExample {
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