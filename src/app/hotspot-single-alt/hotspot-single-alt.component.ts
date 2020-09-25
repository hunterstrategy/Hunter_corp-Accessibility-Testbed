import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hotspot-single-alt',
  templateUrl: './hotspot-single-alt.component.html',
  styleUrls: ['./hotspot-single-alt.component.scss']
})

/**
 * Hotspot Single component is the same as hotspotMaxComponent but configured to one selection.
 * This is meant to stand in contrast to the hotspotSingleComponent which uses radio buttons instead.
 * No siginificant implementation differences from hotspotMaxComponent.
 */
export class HotspotSingleAltComponent implements OnInit {

  form: FormGroup;
  selectedOptionlength: number = 0;
  maxOptions: number = 1;
  maxLimitReached: boolean = false;
  noneSelected: boolean = false;

  optionsData = [
    { id: "1", class: "hotspot-option-1", name: "Salt Lake City", label: "Option 1 of 3 on Salt Lake City." },
    { id: "2", class: "hotspot-option-2", name: "Denver", label: "Option 2 of 3 on Denver." },
    { id: "3", class: "hotspot-option-3", name: "Houston", label: "Option 3 of 3 on Houston." }
  ]

  get optionsFormArray() {
    return this.form.controls.options as FormArray;
  }
  
  ngOnInit() {
  }

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      options: new FormArray([])
    });

    this.addCheckboxes();
  }

  private addCheckboxes() {
    this.optionsData.forEach(() => this.optionsFormArray.push(new FormControl(false)));
  }

  click(data) {
    this.noneSelected = false;
    this.maxLimitReached = false;
    if(this.selectedOptionlength === this.maxOptions){
      data.setValue(false);
    } 
    this.selectedOptionlength = this.form.value.options
      .map((checked, i) => checked ? this.optionsData[i].id : null)
      .filter(v => v !== null).length;    
    if(this.selectedOptionlength === 0){
      this.noneSelected = true;
    }
    if(this.selectedOptionlength === this.maxOptions){
      this.maxLimitReached = true;
    }
  }

  submit() {
    const selectedOptionIds = this.form.value.options
      .map((checked, i) => checked ? this.optionsData[i].id : null)
      .filter(v => v !== null);
  }

}
