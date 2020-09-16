import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, FormControl } from '@angular/forms';

export interface stoogeQuestion {
  name: string;
  isBald: boolean;
  isNotSmart: boolean;
}



/**
 * @title Table with selection
 */
@Component({
  selector: 'app-table',
  styleUrls: ['table.component.scss'],
  templateUrl: 'table.component.html',
})
export class TableComponent {
  form: FormGroup;
  questionData: stoogeQuestion[] = [

    { name: 'Larry', isBald: false, isNotSmart: false },
    { name: 'Moe', isBald: false, isNotSmart: false },
    { name: 'Curly', isBald: false, isNotSmart: false },
  ];

  get isDumbFormArray() {
    return this.form.controls.isDumb as FormArray;
  }

  ngOnInit() {

  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      isBald: new FormControl(),
      isDumb: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.questionData.forEach(() => this.isDumbFormArray.push(new FormControl(false)));
  }

  click() {

  }

  radioChange(data) {
  }

  submit() {
    const selectedOptionIds = this.form.value.options
      .map((checked, i) => checked ? this.questionData[i].name : null)
      .filter(v => v !== null);
  }

}